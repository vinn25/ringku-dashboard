import { Fab } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  size: "small" | "medium" | "large";
  variant: "filled" | "transparent";
  onClick?: () => void;
  disabled?: boolean;
  disableRipple?: boolean;
  disableFocusRipple?: boolean;
  disableTouchRipple?: boolean;
}

const IconButton = ({
  icon,
  size,
  variant,
  onClick,
  disabled,
  disableRipple,
  disableFocusRipple,
  disableTouchRipple,
}: Props) => {
  return variant === "filled" ? (
    <Fab
      className="bg-violet-500 focus:shadow-none hover:bg-violet-600 text-iconColor-white shadow-none"
      size={size}
      onClick={onClick}
      disabled={disabled}
      disableRipple={disableRipple}
      disableFocusRipple={disableFocusRipple}
      disableTouchRipple={disableTouchRipple}
    >
      {icon}
    </Fab>
  ) : (
    <Fab
      className="bg-transparent focus:shadow-none hover:bg-neutral-20 text-iconColor-default shadow-none"
      size={size}
      onClick={onClick}
      disabled={disabled}
      disableRipple={disableRipple}
      disableFocusRipple={disableFocusRipple}
      disableTouchRipple={disableTouchRipple}
    >
      {icon}
    </Fab>
  );
};

export default IconButton;
