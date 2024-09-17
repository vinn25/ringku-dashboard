import { Fab } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  size: "small" | "medium" | "large";
  variant: "filled" | "transparent";
  onClick?: () => void;
}

const IconButton = ({ icon, size, variant, onClick }: Props) => {
  return variant === "filled" ? (
    <Fab
      className="bg-violet-500 hover:bg-violet-600 text-iconColor-white shadow-none"
      size={size}
      onClick={onClick}
    >
      {icon}
    </Fab>
  ) : (
    <Fab
      className="bg-transparent hover:bg-neutral-20 text-iconColor-default shadow-none"
      size={size}
      onClick={onClick}
    >
      {icon}
    </Fab>
  );
};

export default IconButton;
