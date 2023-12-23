import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // Optional className
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary rounded-lg text-accent font-semibold p-3 click-animation ${className}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
