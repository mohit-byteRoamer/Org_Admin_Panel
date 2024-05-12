import { Input } from "antd";
import FormError from "../input/form-error";

const OTPInput = ({ onChange, error }) => {
  return (
    <div>
      <Input.OTP
        length={4}
        formatter={(str) => str.toUpperCase()}
        onChange={(e) => onChange(e)}
      />
      {error && <FormError error={error} />}
    </div>
  );
};
export default OTPInput;
