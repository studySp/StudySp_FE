import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email phải là một địa chỉ email hợp lệ.",
  }),
  password: z.string().min(6, {
    message: "Password phải có ít nhất 6 ký tự.",
  }),
});
