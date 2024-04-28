import { Controller } from "react-hook-form";
import CustomTimePicker from "../time-picker";

const TimePickerController = ({
  control,
  name,
  label,
  placeholder,
  options,
  errors,
  required = true,
}) => (
  <div className="flex flex-col">
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => {
        return (
          <CustomTimePicker
            id={name}
            label={label}
            placeholder={placeholder}
            options={options}
            style={"w-full"}
            {...field}
            error={errors[name] && errors[name].message}
          />
        );
      }}
    />
  </div>
);
export default TimePickerController;
