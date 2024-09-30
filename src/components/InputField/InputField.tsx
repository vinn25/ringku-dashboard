import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick?: () => void;
  fullWidth?: boolean;
  inputSize: "sm" | "lg";
}

const InputField = ({ inputSize, onClick, fullWidth, ...props }: Props) => {
  const paddingSize = inputSize === "sm" ? "px-4 py-2" : "px-6 py-3";
  const textSize = inputSize === "sm" ? "text-sm" : "text-lg";

  return (
    <div>
      <span
        className={`inline-flex gap-2 ${
          fullWidth && "w-full"
        } bg-neutral-10 border-neutral-40 border-2 rounded-full focus-within:border-violet-500 focus-within:border-2 text-neutral-70 ${paddingSize} ${textSize}`}
        onClick={onClick}
      >
        <input
          {...props}
          className={`${fullWidth && "w-full"} focus-visible:outline-none`}
        />
      </span>
    </div>
  );
};

export default InputField;
