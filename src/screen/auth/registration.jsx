import { Steps } from "antd";
import UploadFile from "../../components/upload-file";
import { useState } from "react";
import General from "../../feature/auth/widgets/clinic-information";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookAppointmentSchema } from "../../feature/appointment/schema/book-appointment-schema";
import { registration } from "../../feature/auth/schema";
import ClinicInformation from "../../feature/auth/widgets/clinic-information";
import LocationDetails from "../../feature/auth/widgets/location-details";
const { Step } = Steps;

const Registration = () => {
  const [current, setCurrent] = useState(0);

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

  const steps = [
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
  ];
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
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
      </div>
    </div>
  );
};

export default Registration;
