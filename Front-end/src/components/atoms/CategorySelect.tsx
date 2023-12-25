"use client";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import Paragraph from "./Paragraph";

const CategorySelect = () => {
  const { data, isLoading } = useGetCategoriesQuery({});

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4">
      <Paragraph className="text-primary">Select Category:</Paragraph>
      <select
        id="categorySelect"
        className="outline-none rounded-lg p-3 border border-secondary font-bold text-primary uppercase w-full md:w-72 truncate"
      >
        <option value="">All Categories</option>
        {data?.data?.map((category: any) => (
          <option key={category.categoryId} value={category.categoryId}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
