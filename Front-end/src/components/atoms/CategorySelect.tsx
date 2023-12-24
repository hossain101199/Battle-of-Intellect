import Paragraph from "./Paragraph";

const CategorySelect = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4">
      <Paragraph className="text-primary">Select Category:</Paragraph>
      <select
        id="categorySelect"
        className="outline-none rounded-lg p-3 border border-secondary font-bold text-primary uppercase w-full md:w-72 truncate"
      >
        <option value="">All Categories</option>
        <option value="">Lorem 1</option>
        <option value="">Lorem 2</option>
        <option value="">Lorem 3</option>
      </select>
    </div>
  );
};

export default CategorySelect;
