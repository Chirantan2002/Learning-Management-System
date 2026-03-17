"use client";
import Navbar from "@/components/student/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const pathname = usePathname();
  const isEducatorRoute = pathname.includes("/educator/*");
  return (
    <div className="min-h-screen">
      {!isEducatorRoute && <Navbar/>}
    </div>
  );
};

export default page;
