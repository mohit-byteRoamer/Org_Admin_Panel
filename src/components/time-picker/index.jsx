import { TimePicker } from "antd";
import FormError from "../input/form-error";
import moment from "moment";

const CustomTimePicker = ({
  onChange = () => {},
  label,
  size = "middle",
  error,
  style,
  placeHolder = "Select Time",
}) => (
  <div className="w-full flex flex-col items-start">
    <label className="block mb-2 text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <TimePicker
      placeHolder={placeHolder}
      use12Hours
      size={size}
      format="h:mm a"
      onChange={(e, timeString) => {
        const defaultDate = moment().format("YYYY-MM-DD");
        const dateTime = moment.utc(
          defaultDate + " " + timeString,
          "YYYY-MM-DD HH:mm"
        );
        const formattedDateTime = dateTime.format("YYYY-MM-DDTHH:mm:ss[Z]");
        onChange(formattedDateTime);
      }}
      className={style}
    />
    {error && <FormError error={error} />}
  </div>
);

export default CustomTimePicker;
