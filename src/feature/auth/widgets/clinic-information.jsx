import { useState } from "react";
import InputController from "../../../components/form-controllers/input-controller";
import ItemSelectController from "../../../components/form-controllers/item-select-controller";
import TextAreaInputController from "../../../components/form-controllers/text-area-input-controller";
import FileUpload from "../../../components/upload-file";
import { genderList, issuesList } from "../../appointment/constant";

const ClinicInformation = ({ control, errors }) => {
  const [profile, setProfile] = useState();
  const [coverPic, setCoverPic] = useState();

  return (
    <div className="flex justify-center mt-6">
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-10 ">
          <div className="w-[120px] h-[150px]">
            <FileUpload
              onChange={(file, opration) => {
                if (opration == "add" && file) {
                  const image = URL.createObjectURL(file);
                  setProfile(image);
                } else {
                  setProfile(null);
                }
              }}
              state={profile}
              label={"Profile Picture"}
            />
          </div>
          <div className="w-[120px] h-[150px]">
            <FileUpload
              onChange={(file, opration) => {
                if (opration == "add" && file) {
                  const image = URL.createObjectURL(file);
                  setCoverPic(image);
                } else {
                  setCoverPic(null);
                }
              }}
              state={coverPic}
              label={"Cover Picture"}
            />
          </div>
        </div>

        <div className="w-full ">
          <InputController
            control={control}
            name={"clinicName"}
            label={"Clinic Name"}
            placeholder={"Clinic Name"}
            errors={errors}
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <ItemSelectController
            control={control}
            mode="single"
            name={"establishedYear"}
            label={"Established Year"}
            placeholder={"Established Year"}
            errors={errors}
            options={genderList}
          />
          <InputController
            control={control}
            name={"license"}
            label={"License"}
            placeholder={"License"}
            errors={errors}
            type={"number"}
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <ItemSelectController
            control={control}
            name={"specialties"}
            label={"Specialties"}
            placeholder={"Specialties"}
            errors={errors}
            options={issuesList}
          />
          <ItemSelectController
            control={control}
            name={"service"}
            label={"Service"}
            placeholder={"Service"}
            errors={errors}
            options={issuesList}
          />
        </div>
        <div className="w-full">
          <InputController
            control={control}
            name={"website"}
            label={"Website"}
            placeholder={"Website"}
            errors={errors}
            type={"number"}
          />
        </div>
      </div>
    </div>
  );
};

export default ClinicInformation;
