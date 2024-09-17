import { Fab } from "@mui/material";
import React from "react";

interface Props {
  icon: any;
  size: "small" | "medium" | "large";
  variant: "filled" | "transparent";
  onClick?: any;
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
