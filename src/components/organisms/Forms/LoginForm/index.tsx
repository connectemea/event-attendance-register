"use client";
import React, { useState } from "react";
import { TextInput } from "@/components/atoms/Input/TextInput";
import SubmitButton from "@/components/atoms/Button/SubmitButton";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const [snackbarState, setSnackbarState] = useState<{
    open: boolean;
    vertical: SnackbarOrigin["vertical"];
    horizontal: SnackbarOrigin["horizontal"];
  }>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCloseSnackbar = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        role,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid credentials");
        return;
      }

      setSnackbarState({ ...snackbarState, open: true });
      setTimeout(() => {
        // Redirect to home page after successful login
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Login error:", error);
      setError("Failed to login");
    }
  };
  const handleClick = () => {
    setEmail("demo@gmail.com");
    setPassword("password");
  };
  return (
    <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
      <div className="flex items-center">
        <button onClick={() => handleClick()} className="bg-blue-500 p-2 rounded-md font-bold text-white mx-auto ">Click to fill</button>
      </div>
      <h1 className="text-xl font-bold my-4 text-black">Enter the details</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <SubmitButton
          onClick={() => console.log("Button clicked")}
          disabled={!email || !password}
        >
          Login
        </SubmitButton>
        {error && <ErrorMessage message={error} />}

        <Link href="/register" className="text-sm mt-3 text-right">
          Don't have an account? <span className="underline">Register</span>
        </Link>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarState.open}
        onClose={handleCloseSnackbar}
        message="Login successful!"
        key={`${snackbarState.vertical},${snackbarState.horizontal}`}
      />
    </div>
  );
};

export default LoginForm;
