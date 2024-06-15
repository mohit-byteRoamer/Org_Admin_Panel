import { Button, Steps } from "antd";
import UploadFile from "../../components/upload-file";
import { useCallback, useMemo, useState } from "react";
import General from "../../feature/auth/widgets/clinic-information";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookAppointmentSchema } from "../../feature/appointment/schema/book-appointment-schema";
import { registration } from "../../feature/auth/schema";
import ClinicInformation from "../../feature/auth/widgets/clinic-information";
import LocationDetails from "../../feature/auth/widgets/location-details";
import { useMutation } from "react-query";
const { Step } = Steps;

let clinicInformationData;
const Registration = () => {
  const [current, setCurrent] = useState(1);
  const [submitLoader, setSubmitLoader] = useState(false);


  const {
    control: clinicInformationControl,
    handleSubmit: aboutPersonHandler,
    formState: { errors: clinicInformationError },
  } = useForm({
    resolver: zodResolver(registration.clinicInformation),
  });
  const {
    control: locationDetailsControl,
    handleSubmit: locationDetailsHandler,
    formState: { errors: locationDetailsError },
  } = useForm({
    resolver: zodResolver(registration.locationDetailsSchema),
  });

  const steps = useMemo(
    () => [
      {
        title: "Clinic Information",
        content: (
          <ClinicInformation
            control={clinicInformationControl}
            errors={clinicInformationError}
          />
        ),
      },
      {
        title: "Location Detail",
        content: (
          <LocationDetails
            control={locationDetailsControl}
            errors={locationDetailsError}
          />
        ),
      },
    ],
    [
      clinicInformationControl,
      clinicInformationError,
      locationDetailsControl,
      locationDetailsError,
    ]
  );
  const items = useMemo(
    () =>
      steps.map((item) => ({
        key: item.title,
        title: item.title,
      })),
    []
  );

  const next = useCallback(
    (data) => {
      clinicInformationData = { ...data };
      setCurrent(current + 1);
    },
    [current]
  );
  const prev = useCallback(() => {
    setCurrent(current - 1);
  }, [current]);

  const bookAppointmentMutation = useMutation({
    mutationFn: (data) => {
      setSubmitLoader(false);
      // bookAppointment(data);
    },
    onSuccess: () => {
      // navigate("onGoing-session");
      // message.success("Appointment Booked");
    },
  });
  const submitForm = (data) => {
    // const payload = {
    //   oId: "65ffe611c79982916009c475",
    //   ...aboutPersonData,
    //   gender: aboutPersonData?.gender?.value,
    //   issues: aboutPersonData?.issues?.map((item) => item.value),
    //   ...data,
    //   mode: data?.mode?.value,
    //   sessionType: data?.sessionType?.value,
    //   packageType: data?.packageType?.value,
    //   paymentMode: data?.paymentMode?.value,
    //   paidAmount: parseInt(data.paidAmount),
    //   pendingAmount: parseInt(data.pendingAmount),
    //   sessionRecommended: sessionRecommended.yes ? true : false,
    //   senderAccountInfo: {
    //     mode: data?.mode?.value,
    //     bank: data?.bank?.value,
    //     vpa: data?.vpa,
    //     amount: parseInt(data.paidAmount),
    //   },
    // };
    // setSubmitLoader(true);
    // bookAppointmentMutation.mutate(payload);
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-xl mb-6 font-bold tracking-tight text-gray-900">
          Registration
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[25%]">
          <Steps size="small" current={current} items={items} />
        </div>
        <div>{steps[current].content}</div>
        <div className="mt-10 w-[35%] flex justify-end">
          {current < steps.length - 1 && (
            <Button
              onClick={aboutPersonHandler(next)}
              className="bg-primary-color text-white"
            >
              Next
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={prev}
            >
              Previous
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              // loading={submitLoader}
              type="primary"
              onClick={locationDetailsHandler(submitForm)}
            >
              Done
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
