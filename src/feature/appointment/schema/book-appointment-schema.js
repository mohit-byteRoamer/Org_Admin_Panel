import { z } from "zod";

const bookAppointmentSchema = {
  aboutPersonSchema: z.object({
    pName: z
      .string()
      .min(4, { message: "Patient name must be at least 4 characters long" })
      .max(20, { message: "Patient name must not exceed 10 characters" }),
    gender: z.object({
      id: z.number(),
      value: z.string(),
      label: z.string(),
    }),
    phone: z.string().min(1, { message: "Phone number is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    issues: z
      .array(
        z.object({
          id: z.number(),
          value: z.string(),
          label: z.string(),
        })
      )
      .min(1, { message: "Issues are required" }),
    vop: z.string().min(6, { message: "VOP must be 15+ characters long" }),
    vot: z.string().min(6, { message: "VOT must be 15+ characters long" }),
  }),
  aboutSessionWithNotesSchema: z.object({
    notes: z.string().min(6, { message: "Notes is required" }).optional(),
  }),
  aboutSessionSchema: z.object({
    fromDate: z.string().min(6, { message: "Session start date is required" }),
    time: z.any(),
    sessionType: z.object({
      id: z.number(),
      value: z.string(),
      label: z.string(),
    }),
    // .min(1, { message: "Session Type is required" }),
    mode: z.object({
      id: z.number(),
      value: z.string(),
      label: z.string(),
    }),
    // .min(1, { message: "Session mode is required" }),
    paymentMode: z.object({
      id: z.number(),
      value: z.string(),
      label: z.string(),
    }),
    // .min(1, { message: "Payment Mode Type is required" }),
    packageType: z.object({
      id: z.number(),
      value: z.string(),
      label: z.string(),
    }),
    // .min(1, { message: "Package Type is required" }),
    paidAmount: z.string().min(1, { message: "Paid amount is required" }),
    pendingAmount: z.string().min(1, { message: "Pending amount is required" }),
    vpa: z.string().min(1, { message: "VPA is required" }),
    bank: z.object({
      id: z.number(),
      value: z.string(),
      label: z.string(),
    }),
    // .min(1, { message: "Bank is required" }),
  }),
};

export { bookAppointmentSchema };
