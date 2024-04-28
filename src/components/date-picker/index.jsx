import { DatePicker } from "antd";
import FormError from "../input/form-error";
import moment from "moment";

const CustomDatePicker = ({
  onChange = () => {},
  label,
  size = "middle",
  error,
  style,
  placeHolder = "Select Date",
  disablePreviousDates = false,
}) => (
  <div className="w-full flex flex-col items-start">
    <label className="block mb-2 text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <DatePicker
      placeholder={placeHolder}
      className={style}
      size={size}
      disabledDate={
        disablePreviousDates
          ? (current) => {
              return current && current < moment().startOf("day");
            }
          : undefined
      }
      onChange={(date, dateString) => {
        const DateSt = moment.utc(dateString).format();
        onChange(DateSt);
      }}
    />
    {error && <FormError error={error} />}
  </div>
);

export default CustomDatePicker;
