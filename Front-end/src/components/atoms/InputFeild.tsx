import EyeIcon from "@/assets/svgs/EyeIcon";
import HideIcon from "@/assets/svgs/HideIcon";
import { useField } from "formik";
import React from "react";
import SParagraph from "./SParagraph";

interface InputFieldProps {
  title?: string;
  showIcon?: boolean;
  showPassword?: boolean;
  setShowPassword?: (show: boolean) => void;
  [key: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({
  title = "",
  showIcon = false,
  showPassword,
  setShowPassword = () => {},
  ...props
}) => {
  const [field, meta] = useField(props as any);

  return (
    <div className="w-full">
      {title && (
        <SParagraph className="font-bold uppercase mb-3 text-primary">
          {title}
        </SParagraph>
      )}

      <div className="flex rounded-lg p-3 w-full border border-secondary">
        <input
          className="outline-none border-none w-full text-sm font-medium placeholder:text-slategray"
          autoComplete="true"
          {...field}
          {...props}
        />

        {showIcon &&
          (showPassword ? (
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              <EyeIcon className="w-4 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              <HideIcon className="w-4 h-5" />
            </button>
          ))}
      </div>

      {meta.touched && meta.error ? (
        <SParagraph className="error text-start text-error">
          {meta.error}
        </SParagraph>
      ) : null}
    </div>
  );
};

export default InputField;
