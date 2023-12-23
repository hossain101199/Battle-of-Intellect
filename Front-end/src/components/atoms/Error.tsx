import InfoIcon from "@/assets/svgs/InfoIcon";
import React from "react";

interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="flex items-center gap-1 p-3 text-sm text-error border border-warning rounded-lg ">
      <div className="w-6">
        <InfoIcon />
      </div>
      <p className="font-medium ">{error}</p>
    </div>
  );
};

export default Error;
