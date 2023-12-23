import React from "react";

interface MHeadingProps {
  className?: string; // Optional className
  children: React.ReactNode; // Optional children
}

const MHeading: React.FC<MHeadingProps> = ({ className = "", children }) => {
  return (
    <h4
      className={`text-[24px] sm:text-[36px] font-bold text-primary ${className}`}
    >
      {children}
    </h4>
  );
};

export default MHeading;
