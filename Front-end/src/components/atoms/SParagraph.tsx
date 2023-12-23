import React from "react";

interface SParagraphProps {
  children: React.ReactNode;
  className?: string; // Optional className with a default value
}

const SParagraph: React.FC<SParagraphProps> = ({
  children,
  className = "font-normal",
}) => {
  return <p className={`text-sm ${className}`}>{children}</p>;
};

export default SParagraph;
