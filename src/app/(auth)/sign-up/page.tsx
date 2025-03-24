import type { Metadata } from "next";

import SignInModule from "@/components/modules/SignInModule";

export const metadata: Metadata = {
  title: "StuSp - Đăng ký",
  description: "Generated by create next app",
  icons: "/StuSp.svg",
};

export default function SignUpPage() {
  return <SignInModule pageMode={"SIGNUP"} />;
}
