"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import React, { useState } from "react";

const DefaultLayout = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
