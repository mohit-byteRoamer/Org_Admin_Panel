import { Controller } from "react-hook-form";
import TextAreaInput from "../input/textarea";

const TextAreaInputController = ({
  control,
  name,
  placeholder,
  label,
  errors,
  required = true,
}) => (
  <div className="flex flex-col">
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({ field }) => {
        return (
          <TextAreaInput
            id={name}
            placeholder={placeholder}
            label={label}
            {...field}
            error={errors[name] && errors[name].message}
          />
        );
      }}
    />
  </div>
);
export default TextAreaInputController;
