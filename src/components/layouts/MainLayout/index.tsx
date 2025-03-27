"use client";
import { useEffect } from "react";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";
import { useAppSelector } from "@/hooks/redux-toolkit";

function MainLayout({ children }: { children: React.ReactNode }) {
  const { isAuth } = useAppSelector((state) => state.auth);

  return (
    <>
      {isAuth ? <UserHeader /> : <GuestHeader />}
      <main className="mt-[72px] min-h-screen">{children}</main>
    </>
  );
}

export default MainLayout;
