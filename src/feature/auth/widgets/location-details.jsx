import InputController from "../../../components/form-controllers/input-controller";
import ItemSelectController from "../../../components/form-controllers/item-select-controller";
import TextAreaInputController from "../../../components/form-controllers/text-area-input-controller";
import { genderList, issuesList } from "../../appointment/constant";
import { district, locality, states } from "../constant";

const LocationDetails = ({ control, errors }) => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="w-full grid grid-cols-2 gap-4">
        <ItemSelectController
          control={control}
          mode="single"
          name={"state"}
          label={"State"}
          placeholder={"State"}
          errors={errors}
          options={states}
        />
        <ItemSelectController
          control={control}
          mode="single"
          name={"district"}
          label={"District"}
          placeholder={"District"}
          errors={errors}
          options={district}
        />
      </div>
      <div className="w-full grid grid-cols-2 gap-4">
        <ItemSelectController
          control={control}
          mode="single"
          name={"locality"}
          label={"Locality"}
          placeholder={"Locality"}
          errors={errors}
          options={locality}
        />
        <InputController
          control={control}
          name={"pinCode"}
          label={"PinCode"}
          placeholder={"PinCode"}
          errors={errors}
          type="number"
        />
      </div>
      <div>
        <InputController
          control={control}
          name={"fullAddress"}
          label={"FullAddress"}
          placeholder={"FullAddress"}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default LocationDetails;
