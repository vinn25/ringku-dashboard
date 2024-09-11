"use client";

import Sidebar from "@/components/layout/Sidebar";
import React, { useState } from "react";

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default DefaultLayout;
