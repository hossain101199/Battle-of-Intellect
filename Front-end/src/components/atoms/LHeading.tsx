import React from "react";

interface LHeadingProps {
  className?: string; // Optional className
  children: React.ReactNode; // Optional children
}

const LHeading: React.FC<LHeadingProps> = ({ className = "", children }) => {
  return (
    <h3
      className={`text-[24px] lg:text-[36px] xl:text-[40px] font-bold text-primary ${className}`}
    >
      {children}
    </h3>
  );
};

export default LHeading;
