"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import React, { useState } from "react";

const DefaultLayout = (props: {
  children: React.ReactNode;
  title: string;
  description?: string;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className={`relative flex flex-1 flex-col ${
          sidebarOpen ? "ml-[76px]" : "ml-72"
        } duration-300-linear`}
      >
        <Header />
        <main>
          <div className="mx-auto max-w-screen-2xl bg-white px-9 pb-15 pt-6 text-black">
            <div className="flex flex-col gap-2 mb-8">
              <div className="text-title-md text-neutral-100 font-medium">
                {props.title}
              </div>
              <div className="text-text-sm text-neutral-80">
                {props.description}
              </div>
            </div>
            {props.children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
