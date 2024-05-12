import { Checkbox } from "antd";
import DatePickerController from "../../../components/form-controllers/date-picker-controller";
import ItemSelectController from "../../../components/form-controllers/item-select-controller";
import TextAreaInputController from "../../../components/form-controllers/text-area-input-controller";
import TimePickerController from "../../../components/form-controllers/time-picker-controller";
import { bankList, packageList, paymentModeList, sessionModeList, sessionTypeList } from "../constant";
import InputController from "../../../components/form-controllers/input-controller";

const AboutSession = ({
  control,
  errors,
  sessionRecommended,
  setSessionRecommended,
}) => {
  const recommendedSessionHandler = (type) =>
    setSessionRecommended((pre) => ({
      [type]: !pre[type],
      [type == "yes" ? "no" : "yes"]: false,
    }));

  return (
    <div className="flex justify-center mt-6">
      <div className="w-4/5 flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="self-start text-sm font-medium leading-6 text-gray-900">
            Session Recommended
          </div>
          <div className="flex mt-2 gap-4">
            <Checkbox
              checked={sessionRecommended.yes}
              onChange={() => recommendedSessionHandler("yes")}
            >
              Yes
            </Checkbox>
            <Checkbox
              checked={sessionRecommended.no}
              onChange={() => recommendedSessionHandler("no")}
            >
              No
            </Checkbox>
          </div>
        </div>
        <div className="w-full">
          {sessionRecommended.yes == false ? (
            <TextAreaInputController
              control={control}
              name={"notes"}
              label={"Note for patients (if any)"}
              placeholder={"Note for patients"}
              errors={errors}
            />
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <div className="self-start text-base font-semibold">
                  Session info
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-full grid grid-cols-3 gap-4 mt-1">
                    <DatePickerController
                      control={control}
                      name={"fromDate"}
                      errors={errors}
                      required={sessionRecommended.yes}
                      label={"Session Start From"}
                      placeholder={"Session Start From"}
                      disablePreviousDates={true}
                    />
                    <TimePickerController
                      name={"time"}
                      label={"Session Time"}
                      placeholder={"Session Time"}
                      control={control}
                      errors={errors}
                      required={sessionRecommended.yes}
                    />
                    <ItemSelectController
                      control={control}
                      name={"sessionType"}
                      mode="single"
                      label={"Session Type"}
                      placeholder={"Session Type"}
                      errors={errors}
                      options={sessionTypeList}
                      required={sessionRecommended.yes}
                    />
                    <ItemSelectController
                      control={control}
                      name={"mode"}
                      mode="single"
                      label={"Session Mode"}
                      placeholder={"Session Mode"}
                      errors={errors}
                      options={sessionModeList}
                      required={sessionRecommended.yes}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="self-start text-base font-semibold">
                  Payment info
                </div>
                <div className="flex flex-col gap-3 ">
                  <div className="w-full grid grid-cols-3 gap-4 mt-1">
                    <ItemSelectController
                      control={control}
                      name={"bank"}
                      mode="single"
                      label={"Bank Name"}
                      placeholder={"Bank Name"}
                      errors={errors}
                      options={bankList}
                      MultiSelect
                      required={sessionRecommended.yes}
                    />
                    <ItemSelectController
                      control={control}
                      name={"paymentMode"}
                      label={"Payment Mode"}
                      mode="single"
                      placeholder={"Payment Mode"}
                      errors={errors}
                      options={paymentModeList}
                      required={sessionRecommended.yes}
                    />
                    <ItemSelectController
                      control={control}
                      name={"packageType"}
                      mode="single"
                      label={"Package Type"}
                      placeholder={"Package Type"}
                      errors={errors}
                      options={packageList}
                      required={sessionRecommended.yes}
                    />
                    <InputController
                      control={control}
                      name={"paidAmount"}
                      label={"Amount to be paid"}
                      placeholder={"Amount to be paid"}
                      errors={errors}
                      required={sessionRecommended.yes}
                      type={"number"}
                    />
                    <InputController
                      control={control}
                      name={"pendingAmount"}
                      label={"Pending Amount (if any)"}
                      placeholder={"Pending Amount (if any)"}
                      errors={errors}
                      required={sessionRecommended.yes}
                      type={"number"}
                    />
                    <InputController
                      control={control}
                      name={"vpa"}
                      label={"Virtual payment address"}
                      placeholder={"Virtual payment address"}
                      errors={errors}
                      required={sessionRecommended.yes}
                    />
                  </div>
                  <div className="w-full grid grid-cols-3 gap-4 mt-1"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSession;
