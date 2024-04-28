import React from "react";
import { Input } from "antd";
import FormError from "./form-error";
const { TextArea } = Input;

const TextAreaInput = ({
  id,
  onChange,
  label,
  placeholder,
  rows = 4,
  maxLength = 200,
  error,
}) => {
  return (
    <div className="w-full flex flex-col items-start">
      <div className="flex mb-2 text-sm font-medium leading-6 text-gray-900">
        {label}
      </div>
      <TextArea
        showCount
        id={id}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        style={{
          height: 120,
          resize: "none",
        }}
        className="projectTextarea"
      />
      {error && <FormError error={error} />}
    </div>
  );
};
export default TextAreaInput;
