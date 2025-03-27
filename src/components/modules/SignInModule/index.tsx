"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next-nprogress-bar";
import { motion } from "framer-motion";

import { LoginSchema } from "@/zod/schemas/LoginSchema";
import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/hooks/redux-toolkit";
import { actionLogin } from "@/store/slices/auth";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";

export function SignInCard() {
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });
  const dispatch = useAppDispatch();

  async function onSubmit(data: z.infer<typeof LoginSchema>) {
    console.log("Dữ liệu đăng nhập:", data);
    axios
      .post(
        "http://localhost:6060/api/v1/auth/login",
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((res) => {
        dispatch(actionLogin(res.data.data));
        toast({
          title: "Đăng nhập thành công",
          description: "Chào mừng bạn quay trở lại!",
        });
        router.push("/");
      })
      .catch((err: any) => {
        toast({
          title: "Lỗi đăng nhập",
          description: err?.message,
          variant: "destructive",
        });
      });

    // Giả lập đăng nhập thành công với thông tin tạm thời
  }

  return (
    <section
      className="relative z-50 flex h-[750px] w-[500px] items-center justify-center"
      style={{ perspective: 1000 }}
    >
      <motion.div
        transition={{
          type: "spring",
          duration: 1,
          bounce: 0.2,
        }}
        className="absolute h-full w-full max-w-[calc(100vw-40px)]"
      >
        <div
          className={cn(
            "h-full w-full flex-1 origin-center rounded-3xl border-2 border-black bg-white/70 px-4 py-8 shadow-3d transition-all duration-300 hover:shadow-3d-hover sm:px-6 sm:py-12 md:max-w-[500px] md:px-8 md:py-16 lg:px-10 lg:py-12",
            "backdrop-blur-sm",
          )}
        >
          {/* <Logo /> */}
          <h1 className="font-title text-4xl" onClick={() => router.push("/")}>
            StuSp
          </h1>
          <p className="mb-9 mt-6 text-xl">Nhập thông tin tài khoản của bạn!</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập email của bạn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập mật khẩu của bạn"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                // control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="ml-2">Nhớ mật khẩu</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
                name={""}
              />

              <Button type="submit" haveOverlay className="w-full">
                Đăng nhập
              </Button>
              <p className="text-center text-xs">
                Chưa có tài khoản?
                <span
                  className="ml-1 cursor-pointer text-primary hover:underline"
                  onClick={() => router.push("/sign-up")}
                >
                  Đăng ký ngay!
                </span>
              </p>
            </form>
          </Form>
        </div>
      </motion.div>
    </section>
  );
}
export default SignInCard;
