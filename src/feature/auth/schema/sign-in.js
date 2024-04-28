import { z } from "zod";

const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  userType: z.string().min(1, { message: "UserType is required" }),
});

export { SignInSchema };
