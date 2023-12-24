import React, { ReactNode } from "react";
import SParagraph from "./SParagraph";

interface CategoryLabelProps {
  children: ReactNode;
}

const CategoryLabel: React.FC<CategoryLabelProps> = ({ children }) => {
  return (
    <SParagraph className="w-fit rounded-lg px-2 text-primary font-semibold uppercase bg-accent">
      {children}
    </SParagraph>
  );
};

export default CategoryLabel;
