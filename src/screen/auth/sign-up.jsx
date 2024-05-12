import { message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignUpSchema } from "../../feature/auth/schema";
import InputController from "../../components/form-controllers/input-controller";
import FormError from "../../components/input/form-error";
import CheckBoxController from "../../components/form-controllers/check-box-controller";
import { useMutation } from "react-query";
import { loginAPI, signUpApi } from "../../feature/auth/api";
import { navigate } from "../../utils/common-function";
import { APIRequestHandler } from "../../service/axios/api-request-handler";

let SignUp = () => {
  const [isDoctor, setIsDoctor] = useState(false);
  const [isPhysiotherapy, setIsPhysiotherapy] = useState(false);
  const [submitLoader, setSubmitLoader] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const signUp = useMutation({
    mutationKey: "signUp",
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
      debugger;
      const allSignUpData = watch();
      const { status, result } = data;
      APIRequestHandler(
        status,
        result.msg,
        "verifyOTP",
        allSignUpData,
        setSubmitLoader,
        false,
        true
      );
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      message.error("Some thing wrong");
      setSubmitLoader(false);
    },
  });

  const SignInHandler = (data) => {
    const payload = { ...data, deviceType: "web" };
    signUp.mutate(payload);
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
          Sign Up
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Fornax Admin panel
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-x-3">
            <label
              htmlFor="first-name"
              className="text-sm self-start font-semibold leading-6 text-gray-900"
            >
              User type
            </label>
            <div className="flex mt-2 gap-x-3">
              <CheckBoxController
                control={control}
                name={"userType"}
                required={true}
                label={"Doctor"}
                isActive={isDoctor}
                activeHandler={setIsDoctor}
                value={"Doctor"}
              />
              <CheckBoxController
                control={control}
                name={"userType"}
                required={true}
                label={"Physiotherapy"}
                isActive={isPhysiotherapy}
                activeHandler={setIsPhysiotherapy}
                value={"Physiotherapy"}
              />
            </div>
            {errors.userType && <FormError error={errors.userType.message} />}
          </div>
          <InputController
            control={control}
            name={"name"}
            label={"Name"}
            placeholder={"name"}
            errors={errors}
            required={true}
          />

          <div className="flex gap-2">
            <InputController
              control={control}
              name={"email"}
              label={"Email"}
              placeholder={"Email"}
              errors={errors}
              required={true}
            />
            <InputController
              control={control}
              name={"phone"}
              label={"Phone"}
              placeholder={"Phone"}
              errors={errors}
              required={true}
            />
          </div>
          <div className="flex gap-2">
            <InputController
              control={control}
              name={"password"}
              label={"Password"}
              placeholder={"Password"}
              errors={errors}
              required={true}
            />
            <InputController
              control={control}
              name={"confirmPassword"}
              label={"Confirm Password"}
              placeholder={"Confirm Password"}
              errors={errors}
              required={true}
            />
          </div>

          <div>
            <button
              onClick={handleSubmit(SignInHandler)}
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to="/"
            className="font-semibold ml-1 leading-6 text-primary-color"
          >
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
