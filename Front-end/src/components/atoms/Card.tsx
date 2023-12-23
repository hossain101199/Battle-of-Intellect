import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string; // Optional className
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-lg border-[2px] border-secondary bg-white overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
