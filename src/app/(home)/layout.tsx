import type { Metadata } from "next";
import "@/app/globals.css";
import Head from "next/head";

//fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AuthProvider } from "../Providers";

export const metadata: Metadata = {
  title: "Attendance App",
  description: "Generated by emea developer app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
