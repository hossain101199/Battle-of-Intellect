import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string; // Optional className with a default value
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = "font-normal",
}) => {
  return <p className={`text-base ${className}`}>{children}</p>;
};

export default Paragraph;
