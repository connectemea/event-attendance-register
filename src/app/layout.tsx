import type { Metadata } from "next";
import "@/app/globals.css";
import Head from "next/head";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";

//fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "@/theme";
import CssBaseline from "@mui/material/CssBaseline";
export const metadata: Metadata = {
  title: "Attendance App",
  description: "Generated by emea developer app"
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
