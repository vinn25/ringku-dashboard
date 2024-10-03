import { ReactNode } from "react";

interface Props {
  text: string;
  size: "sm" | "lg";
  variant: "violet" | "neutral";
  icon?: ReactNode;
  iconPlace?: "front" | "behind";
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

const ButtonDefault = ({
  text,
  size,
  variant,
  icon,
  iconPlace,
  onClick,
  fullWidth,
  disabled,
}: Props) => {
  const paddingSize = size === "sm" ? "px-4 py-2" : "px-6 py-3";
  const textSize = size === "sm" ? "text-sm" : "text-lg";
  const colorVariant =
    variant === "violet"
      ? "bg-violet-500 hover:bg-violet-600 text-neutral-10"
      : "bg-neutral-10 text-neutral-70 hover:bg-neutral-20 border-neutral-40";

  return variant === "violet" ? (
    <button
      className={`flex justify-center items-center gap-2 border border-transparent rounded-[1000px] ${colorVariant} ${textSize} ${paddingSize} ${
        fullWidth && "w-full"
      }`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {iconPlace === "front" && icon}
      {text}
      {iconPlace === "behind" && icon}
    </button>
  ) : (
    <button
      className={`flex justify-center items-center gap-2 border rounded-[1000px] ${colorVariant} ${textSize} ${paddingSize} ${
        fullWidth && "w-full"
      }`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {iconPlace === "front" && icon}
      {text}
      {iconPlace === "behind" && icon}
    </button>
  );
};

export default ButtonDefault;
