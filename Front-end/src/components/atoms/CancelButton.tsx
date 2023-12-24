"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CancelButton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <button
      className={`rounded-lg font-semibold p-3 click-animation border border-warning text-primary hover:bg-warning hover:text-accent ${className}`}
      onClick={() => router.back()}
    >
      {children ? children : "Cancel"}
    </button>
  );
};

export default CancelButton;
