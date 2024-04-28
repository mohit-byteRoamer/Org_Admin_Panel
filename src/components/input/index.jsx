import { Input } from "antd";
import FormError from "./form-error";

const TextInput = ({
  status = "",
  type = "text",
  label,
  prefix,
  suffix,
  value,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <div className="w-full flex flex-col items-start">
      <label className="block mb-2 text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <Input
        type={type}
        status={status}
        prefix={prefix}
        suffix={suffix}
        value={value}
        placeholder={placeholder}
        className={`${status == "error" && "text-red-500"}`}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <FormError error={error} />}
    </div>
  );
};

export default TextInput;
