import { z } from "zod";

const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  userType: z.string().min(1, { message: "UserType is required" }),
});

const SignUpSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    userType: z.string().min(1, { message: "UserType is required" }),
    name: z.string().min(1, { message: "Name is required" }),
    phone: z.string().min(1, { message: "Phone number is required" }),
    confirmPassword: z.string().min(4),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const verifyOTPSchema = z.object({
  otp: z.string().min(4, { message: "Please enter valid OTP." }),
});

const registration = {
  clinicInformation: z.object({
    clinicName: z
      .string()
      .min(4, { message: "ClinicName name must be at least 4 characters long" })
      .max(20, { message: "ClinicName name must not exceed 10 characters" }),
    establishedYear: z.object({
      id: z.number(),
      value: z.string(),
      label: z.string(),
    }),
    license: z.string().min(1, { message: "Enter valid your license number" }),
    specialties: z
      .array(
        z.object({
          id: z.number(),
          value: z.string(),
          label: z.string(),
        })
      )
      .min(1, { message: "Specialties are required" }),

    service: z
      .array(
        z.object({
          id: z.number(),
          value: z.string(),
          label: z.string(),
        })
      )
      .min(1, { message: "Service are required" }),
    website: z
      .string()
      .min(8, { message: "Enter valid website link" })
      .optional(),
  }),
  locationDetailsSchema: z.object({
    state: z.object({
      id: z.number(),
      value: z.string(),
      label: z.string(),
    }),
    district: z.object({
      id: z.number(),
      value: z.string(),
      label: z.string(),
    }),
    locality: z.object({
      id: z.number(),
      value: z.string(),
      label: z.string(),
    }),
    pinCode: z.string().min(1, { message: "Enter valid pin code" }),
    fullAddress: z.string().min(1, { message: "Enter valid address" }),
  }),
};

export { SignInSchema, SignUpSchema, verifyOTPSchema, registration };
