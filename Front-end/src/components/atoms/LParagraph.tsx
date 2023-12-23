import React from "react";

interface LParagraphProps {
  children: React.ReactNode;
  className?: string; // Optional className with a default value
}

const LParagraph: React.FC<LParagraphProps> = ({
  children,
  className = "font-normal",
}) => {
  return <p className={`text-lg ${className}`}>{children}</p>;
};

export default LParagraph;
