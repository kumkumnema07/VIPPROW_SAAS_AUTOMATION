import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/ui/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { NavbarMenu } from "./components/ui/Navbar";
import ReduxProvider from "@/providers/ReduxProvider";
import QueryProvider from "@/providers/QueryProvider";
import AppConfigLoader from "@/providers/AppConfigLoader";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIPPROW",
  description: "VIPPROW Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-blacks`}
      >
        <ReduxProvider>
          <QueryProvider>
            <AppConfigLoader />
            <NavbarMenu />
            {process.env.NODE_ENV === "development" ? null : (
              <div className="hidden lg:block">
                <SmoothCursor />
              </div>
            )}

            {children}
            <Footer />
            <Toaster position="bottom-center" />
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
