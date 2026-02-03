// website\components\client-sections\ClientLayout.tsx

"use client";

import ReduxProvider from "@/providers/ReduxProvider";
import QueryProvider from "@/providers/QueryProvider";
import AppConfigLoader from "@/providers/AppConfigLoader";
import { NavbarMenu } from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

const SmoothCursor = dynamic(() => import("@/components/ui/smooth-cursor"), {
  ssr: false,
});

export default function ClinetLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
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
    </>
  );
}
