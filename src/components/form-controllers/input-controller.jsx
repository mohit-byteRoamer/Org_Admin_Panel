import { Controller } from "react-hook-form";
import TextInput from "../input";

const InputController = ({
  control,
  name,
  label,
  placeholder,
  errors,
  type = "text",
  required = true,
}) => (
  <div className="flex flex-col">
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({ field }) => {
        return (
          <TextInput
            id={name}
            label={label}
            placeholder={placeholder}
            {...field}
            type={type}
            status={errors[name] && "error"}
            error={errors[name] && errors[name].message}
          />
        );
      }}
    />
  </div>
);
export default InputController;
