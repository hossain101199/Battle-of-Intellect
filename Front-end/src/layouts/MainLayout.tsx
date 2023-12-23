"use client";
import { excludeFooterPaths } from "@/routes/routes";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const shouldRenderFooter = !excludeFooterPaths.includes(pathname);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Navbar />
        {children}
      </div>
      {shouldRenderFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
