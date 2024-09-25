import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "@/assets/logo-ringku.svg";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@/components/Button/IconButton";
import SidebarItem from "@/components/layout/Sidebar/SidebarItem";
import SidebarItemCollapse from "@/components/layout/Sidebar/SidebarItemCollapse";
import { Settings } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import SidebarBottom from "@/components/layout/Sidebar/SidebarBottom";
import SidebarBottomCollapse from "@/components/layout/Sidebar/SidebarBottomCollapse";

const sidebarItems = [
  {
    id: "wallet",
    label: "My Wallet",
    route: "/",
  },
  {
    id: "card",
    label: "My Card",
    route: "/card",
  },
  {
    id: "chart",
    label: "Financial Chart",
    route: "/chart",
  },
  {
    id: "transaction",
    label: "Recent Transactions",
    route: "/transaction",
  },
];

const sidebarBottom = [
  {
    id: "setting",
    label: "Settings",
    icon: <Settings />,
  },
  {
    id: "profile",
    label: "User",
    icon: <Avatar className="size-[25px]" alt="user" />,
  },
];

const Sidebar = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <aside
      className={`fixed left-0 top-0 z-9999 flex h-screen ${
        props.sidebarOpen ? "w-22" : "w-72"
      } translate-x-0 flex-col justify-between overflow-y-hidden bg-black duration-300 ease-linear`}
    >
      {/* Sidebar Header */}
      <div>
        <div
          className={`flex items-center justify-between gap-2 px-[18px] pt-6 pb-5 ${
            props.sidebarOpen && "pt-8"
          }`}
        >
          {!props.sidebarOpen && (
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={160}
                height={53.44}
                priority
              />
            </Link>
          )}
          <IconButton
            icon={<MenuIcon fontSize="small" />}
            size="small"
            variant="filled"
            onClick={() => {
              props.setSidebarOpen(!props.sidebarOpen);
            }}
          />
        </div>

        {/* Sidebar Menu */}
        <div className="px-[18px]">
          <nav>
            <div>
              <ul>
                {sidebarItems.map((item) =>
                  !props.sidebarOpen ? (
                    <SidebarItem key={item.id} item={item} />
                  ) : (
                    <SidebarItemCollapse key={item.id} item={item} />
                  )
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Sidebar Bottom */}
      <div className="px-[18px] pb-6">
        <nav>
          <ul>
            {sidebarBottom.map((item) =>
              !props.sidebarOpen ? (
                <SidebarBottom key={item.id} item={item} />
              ) : (
                <SidebarBottomCollapse key={item.id} item={item} />
              )
            )}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
