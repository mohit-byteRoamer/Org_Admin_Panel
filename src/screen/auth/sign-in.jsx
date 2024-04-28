import { Checkbox, message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "../../feature/auth/schema/sign-in";
import InputController from "../../components/form-controllers/input-controller";
import FormError from "../../components/input/form-error";
import CheckBoxController from "../../components/form-controllers/check-box-controller";
import { useMutation } from "react-query";
import { loginAPI } from "../../feature/auth/api";

let SignIn = () => {
  const [isDoctor, setIsDoctor] = useState(false);
  const [isPhysiotherapy, setIsPhysiotherapy] = useState(false);
  const [submitLoader, setSubmitLoader] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignInSchema),
  });

  const loginMutation = useMutation({
    mutationFn: async (data) => {
      try {
        setSubmitLoader(true);
        const response = await loginAPI(data); // Wait for loginAPI call to complete
        return response;
      } catch (error) {
        console.error("Mutation error:", error);
        throw error;
      } finally {
        setSubmitLoader(false);
      }
    },
    onSuccess: (data) => {
      // navigate("onGoing-session");
      message.success("Login Successfully");
    },
    onError: (error) => {
      // Handle error from the mutation
      console.error("Mutation error:", error);
      // Additional error handling (e.g., display error message)
    },
  });
  const SignInHandler = (data) => {
    const payload = { ...data, deviceType: "web" };
    loginMutation.mutate(payload);
    console.log(data, "SignInHandler");
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
          Sign In
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
            name={"email"}
            label={"Email"}
            placeholder={"Email"}
            errors={errors}
            required={true}
          />

          <InputController
            control={control}
            name={"password"}
            label={"Password"}
            placeholder={"Password"}
            errors={errors}
            required={true}
          />

          <div className="text-sm">
            <a href="#" className="font-semibold text-primary-color ">
              Forgot password?
            </a>
          </div>

          <div>
            <button
              onClick={handleSubmit(SignInHandler)}
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="/signUp"
            className="font-semibold ml-1 leading-6 text-primary-color"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
