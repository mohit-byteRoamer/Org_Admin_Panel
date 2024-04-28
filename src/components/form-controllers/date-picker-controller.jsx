import { Controller } from "react-hook-form";
import CustomDatePicker from "../date-picker";

const DatePickerController = ({
  control,
  name,
  label,
  placeholder,
  errors,
  required = true,
  disablePreviousDates = false,
}) => (
  <div className="flex flex-col">
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({ field }) => {
        return (
          <CustomDatePicker
            id={name}
            label={label}
            placeholder={placeholder}
            {...field}
            style={"w-full"}
            disablePreviousDates={disablePreviousDates}
            error={errors[name] && errors[name].message}
          />
        );
      }}
    />
  </div>
);

export default DatePickerController;
