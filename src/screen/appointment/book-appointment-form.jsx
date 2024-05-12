import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookAppointmentSchema } from "../../feature/appointment/schema/book-appointment-schema";
import { useMutation } from "react-query";
import { Button, Steps, message } from "antd";
import { useForm } from "react-hook-form";
import { bookAppointment } from "../../feature/appointment/api";
import { navigate } from "../../utils/common-function";
import AboutPerson from "../../feature/appointment/widgets/about-person";
import AboutSession from "../../feature/appointment/widgets/about-Session";

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
        <Steps current={current} items={items} className="" />
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

export default CreateAppointment;
