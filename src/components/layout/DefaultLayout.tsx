"use client";

import IconButton from "@/components/Button/IconButton";
import InputField from "@/components/InputField/InputField";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";

const DefaultLayout = (props: {
  children: React.ReactNode;
  title: string;
  description?: string;
  search?: boolean;
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
            <div className="flex flex-row justify-between items-center mb-8">
              <div className="flex flex-col gap-2 ">
                <div className="text-title-md text-neutral-100 font-medium">
                  {props.title}
                </div>
                <div className="text-text-sm text-neutral-80 font-medium">
                  {props.description}
                </div>
              </div>
              {props.search && (
                <div className="flex items-center gap-3">
                  <div>
                    <InputField placeholder="Search" inputSize="lg" />
                  </div>
                  <div>
                    <IconButton
                      icon={<Search fontSize="medium" />}
                      size="medium"
                      variant="filled"
                    />
                  </div>
                </div>
              )}
            </div>
            {props.children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
