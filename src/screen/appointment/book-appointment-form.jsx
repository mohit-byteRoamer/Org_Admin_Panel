import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookAppointmentSchema } from "../../feature/appointment/schema/book-appointment-schema";
import { useMutation } from "react-query";
import {
  bankList,
  genderList,
  issuesList,
  packageList,
  paymentModeList,
  sessionModeList,
  sessionTypeList,
} from "../../feature/appointment/constant";
import { Button, Checkbox, Steps, message } from "antd";
import InputController from "../../components/form-controllers/input-controller";
import TextAreaInputController from "../../components/form-controllers/text-area-input-controller";
import ItemSelectController from "../../components/form-controllers/item-select-controller";
import DatePickerController from "../../components/form-controllers/date-picker-controller";
import TimePickerController from "../../components/form-controllers/time-picker-controller";
import { useForm } from "react-hook-form";
import { bookAppointment } from "../../feature/appointment/api";
import { navigate } from "../../utils/common-function";
import axios from "axios";

let aboutPersonData = undefined;
const CreateAppointment = () => {
  const [current, setCurrent] = useState(0);
  const [submitLoader, setSubmitLoader] = useState(false);
  const [sessionRecommended, setSessionRecommended] = useState({
    yes: false,
    no: true,
  });

  const {
    control: aboutPersonControl,
    handleSubmit: aboutPersonHandler,
    formState: { errors: aboutPersonFormError },
  } = useForm({
    resolver: zodResolver(bookAppointmentSchema.aboutPersonSchema),
  });
  const sessionSchema = sessionRecommended.yes
    ? bookAppointmentSchema?.aboutSessionSchema
    : bookAppointmentSchema.aboutSessionWithNotesSchema;

  const {
    control: aboutSessionControl,
    handleSubmit: aboutSessionHandleSubmit,
    formState: { errors: aboutSessionError },
  } = useForm({
    resolver: zodResolver(sessionSchema),
  });
  const bookAppointmentMutation = useMutation({
    mutationFn: (data) => {
      setSubmitLoader(false);
      bookAppointment(data);
    },
    onSuccess: () => {
      navigate("onGoing-session");
      message.success("Appointment Booked");
    },
  });

  const steps = [
    {
      title: "About Person",
      content: (
        <AboutPerson
          control={aboutPersonControl}
          errors={aboutPersonFormError}
        />
      ),
    },
    {
      title: "About Session",
      content: (
        <AboutSession
          control={aboutSessionControl}
          errors={aboutSessionError}
          setSessionRecommended={setSessionRecommended}
          sessionRecommended={sessionRecommended}
        />
      ),
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const next = (data) => {
    aboutPersonData = { ...data };
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const submitForm = (data) => {
    const payload = {
      oId: "65ffe611c79982916009c475",
      ...aboutPersonData,
      gender: aboutPersonData?.gender?.value,
      issues: aboutPersonData?.issues?.map((item) => item.value),
      ...data,
      mode: data?.mode?.value,
      sessionType: data?.sessionType?.value,
      packageType: data?.packageType?.value,
      paymentMode: data?.paymentMode?.value,
      paidAmount: parseInt(data.paidAmount),
      pendingAmount: parseInt(data.pendingAmount),
      sessionRecommended: sessionRecommended.yes ? true : false,
      senderAccountInfo: {
        mode: data?.mode?.value,
        bank: data?.bank?.value,
        vpa: data?.vpa,
        amount: parseInt(data.paidAmount),
      },
    };
    setSubmitLoader(true);
    bookAppointmentMutation.mutate(payload);
  };

  return (
    <div className="bg-white rounded-lg mt-6 p-6">
      <div className="w-[45%]">
        <Steps
          current={current}
          items={items}
          className=""
        />
      </div>
      <div>{steps[current].content}</div>
      <div className="mt-12 flex justify-end">
        {current < steps.length - 1 && (
          <Button
            onClick={aboutPersonHandler(next)}
            className="bg-primary-color text-white"
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            loading={submitLoader}
            type="primary"
            onClick={aboutSessionHandleSubmit(submitForm)}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

const AboutPerson = ({ control, errors }) => {
  return (
    <div className="flex justify-center mt-6">
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

export default CreateAppointment;
// 438
