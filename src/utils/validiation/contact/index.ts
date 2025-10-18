import z from "zod";

export const contactSchema = z.object({
  first_name: z
    .string("First name is required")
    .min(3, "First name must be at least 3 characters"),
  last_name: z
    .string("First name is required")
    .min(3, "First name must be at least 3 characters"),
  email: z.email("please enter a valid email"),
  phone: z
    .string("Phone number is required")
    .min(10, "Invalid phone number")
    .max(10, "Invalid phone number"),
  subject: z
    .string("Subject is required")
    .min(3, "Subject must be at least 3 characters"),
  message: z
    .string("Message is required")
    .min(3, "Message must be at least 3 characters")
    .max(500, "Message too long"),
});
export type ContactSchemaT = z.infer<typeof contactSchema>;
