import { Controller } from "react-hook-form";
import MultiSelect from "../input/multi-select";

const ItemSelectController = ({
  control,
  mode,
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
      rules={{ required: required }}
      render={({ field }) => {
        return (
          <MultiSelect
            id={name}
            mode={mode}
            label={label}
            placeholder={placeholder}
            options={options}
            {...field}
            error={errors[name] && errors[name].message}
          />
        );
      }}
    />
  </div>
);

export default ItemSelectController;
