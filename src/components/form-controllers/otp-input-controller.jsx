import { Controller } from "react-hook-form";
import OTPInput from "../otp-input";

const InputOTPController = ({ control, name, errors, required = true }) => (
  <div className="flex flex-col">
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({ field }) => {
        return (
          <OTPInput
            id={name}
            error={errors[name] && errors[name].message}
            {...field}
          />
        );
      }}
    />
  </div>
);
export default InputOTPController;
