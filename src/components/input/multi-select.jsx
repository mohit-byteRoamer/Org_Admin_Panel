import React, { useState } from "react";
import { Select, Space, Tooltip } from "antd";
import { servicesList } from "../../feature/appointment/constant";
import FormError from "./form-error";

const MultiSelect = ({
  id,
  mode = "multiple",
  label,
  options = [],
  onChange,
  maxTagCount = "responsive",
  placeholder = "Select Item...",
  disabled = false,
  style = {
    width: "100%",
    textAlign: "left",
  },
  error,
}) => {
  return (
    <div>
      <div className="flex mb-2 text-sm font-medium leading-6 text-gray-900">
        {label}
      </div>
      <Select
        id={id}
        mode={mode}
        options={options}
        maxTagCount={maxTagCount}
        placeholder={placeholder}
        disabled={disabled}
        style={style}
        onChange={(val, option) => onChange(option)}
        // onChange={(value, options) => console.log(value, options, "mohit")}
      >
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            <div onClick={() => console.log("mohit", option)}>
              {option.label}
            </div>
          </Select.Option>
        ))}
      </Select>
      {error && <FormError error={error} />}
    </div>
  );
};
export default MultiSelect;
