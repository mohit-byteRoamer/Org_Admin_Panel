import { message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, verifyOTPSchema } from "../../feature/auth/schema";
import InputController from "../../components/form-controllers/input-controller";
import FormError from "../../components/input/form-error";
import CheckBoxController from "../../components/form-controllers/check-box-controller";
import { useMutation } from "react-query";
import { loginAPI, otpVerifyAPI, signUpApi } from "../../feature/auth/api";
import OTPInput from "../../components/otp-input";
import InputOTPController from "../../components/form-controllers/otp-input-controller";
import { navigate } from "../../utils/common-function";
import { APIRequestHandler } from "../../service/axios/api-request-handler";

let VerifyOTP = () => {
  const location = useLocation();
  const { email, name, password, phone, userType } = location.state || {
    email: "",
    name: "",
    password: "",
    phone: "",
    userType: "",
  };

  const [submitLoader, setSubmitLoader] = useState(false);

  // Verify OTP Section
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(verifyOTPSchema),
  });

  const loginMutation = useMutation({
    mutationFn: async (data) => {
      try {
        setSubmitLoader(true);
        const response = await otpVerifyAPI(data); // Wait for loginAPI call to complete
        return response;
      } catch (error) {
        console.error("Mutation error:", error);
        throw error;
      } finally {
        setSubmitLoader(false);
      }
    },
    onSuccess: (data) => {
      const { status, result } = data;
      APIRequestHandler(
        status,
        result.message,
        "/",
        null,
        setSubmitLoader,
        false,
        true
      );
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
  const otpVerifyHandler = (data) => {
    const payload = { ...data, email, deviceType: "web" };
    loginMutation.mutate(payload);
  };

  // Resent OTP Section
  const resendOTP = useMutation({
    mutationKey: "resendOTP",
    mutationFn: async (data) => {
      try {
        setSubmitLoader(true);
        const response = await signUpApi(data); // Wait for loginAPI call to complete
        return response;
      } catch (error) {
        setSubmitLoader(false);
        message.error("Some thing wrong");
        throw error;
      } finally {
        setSubmitLoader(false);
      }
    },
    onSuccess: (data) => {
      const { status, result } = data;
      debugger;
      APIRequestHandler(
        status,
        result.msg,
        null,
        null,
        setSubmitLoader,
        false,
        true
      );
    },
    onError: (error) => {
      debugger;
      message.error("Some thing wrong");
      setSubmitLoader(false);
    },
  });
  const resendHandler = (data) => {
    const payload = {
      email,
      name,
      password,
      phone,
      userType,
      deviceType: "web",
    };
    resendOTP.mutate(payload);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Verify OTP
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          OTP has been sent to your registered email address.
        </p>
      </div>

      <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center mb-14">
            <InputOTPController
              control={control}
              name={"otp"}
              errors={errors}
              required={true}
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleSubmit(otpVerifyHandler)}
              type="submit"
              className="flex w-full justify-center rounded-md text-primary-color border border-primary-color px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm"
            >
              Verify
            </button>
            <button
              onClick={resendHandler}
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
            >
              Resend
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          This OTP will expire in 30 seconds.
        </p>
      </div>
    </div>
  );
};

export default VerifyOTP;
