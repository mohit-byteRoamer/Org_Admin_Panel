import { Checkbox, Input } from "antd";
import FormError from "./form-error";

const CustomCheckbox = ({ label, expectedValue, value, onChange }) => {
  return (
    <div className="w-full flex flex-col items-start">
      <Checkbox checked={value == expectedValue} onChange={onChange}>
        {label}
      </Checkbox>
    </div>
  );
};

export default CustomCheckbox;
