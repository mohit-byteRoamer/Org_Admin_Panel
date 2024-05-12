import InputController from "../../../components/form-controllers/input-controller";
import ItemSelectController from "../../../components/form-controllers/item-select-controller";
import TextAreaInputController from "../../../components/form-controllers/text-area-input-controller";
import { genderList, issuesList } from "../../appointment/constant";

const LocationDetails = ({ control, errors }) => {
  return (
    <div className="flex justify-center mt-6">
      <div className="text-red-500">mohit</div>
      <div className="w-4/5 flex flex-col gap-4">
        <div className="w-full grid grid-cols-3 gap-4">
          <InputController
            control={control}
            name={"pName"}
            label={"Name"}
            placeholder={"Name"}
            errors={errors}
          />
          <ItemSelectController
            control={control}
            mode="single"
            name={"gender"}
            label={"Gender"}
            placeholder={"Gender"}
            errors={errors}
            options={genderList}
          />
          <InputController
            control={control}
            name={"phone"}
            label={"Phone number"}
            placeholder={"Phone number"}
            errors={errors}
            type={"number"}
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-4">
          <InputController
            control={control}
            name={"email"}
            label={"Email Address"}
            placeholder={"Email Address"}
            errors={errors}
          />
          <ItemSelectController
            control={control}
            name={"issues"}
            label={"Issues"}
            placeholder={"Issues"}
            errors={errors}
            options={issuesList}
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <TextAreaInputController
            control={control}
            name={"vop"}
            label={"Voice Of Patient"}
            placeholder={"Voice Of Patient"}
            errors={errors}
          />
          <TextAreaInputController
            control={control}
            name={"vot"}
            label={"Voice Of Therapist"}
            placeholder={"Voice Of Therapist"}
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
