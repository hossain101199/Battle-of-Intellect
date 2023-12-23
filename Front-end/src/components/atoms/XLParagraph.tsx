import React from "react";

interface XLParagraphProps {
  children: React.ReactNode;
  className?: string; // Optional className with a default value
}

const XLParagraph: React.FC<XLParagraphProps> = ({
  children,
  className = "font-normal",
}) => {
  return <p className={`text-xl ${className}`}>{children}</p>;
};

export default XLParagraph;
