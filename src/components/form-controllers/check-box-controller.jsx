import { Controller } from "react-hook-form";
import { Checkbox } from "antd";

const CheckBoxController = ({
  control,
  name,
  value,
  isActive,
  activeHandler,
  label,
  required = true,
}) => (
  <div className="flex flex-col">
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({ field }) => {
        return (
          <Checkbox
            checked={isActive}
            onChange={() => {
              field.onChange(value);
              activeHandler(!isActive);
            }}
          >
            {label}
          </Checkbox>
        );
      }}
    />
  </div>
);
export default CheckBoxController;
