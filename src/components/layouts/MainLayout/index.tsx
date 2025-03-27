"use client";
import { useEffect, useState } from "react";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";
import { useAppSelector } from "@/hooks/redux-toolkit";

function MainLayout({ children }: { children: React.ReactNode }) {
  const { userInfo } = useAppSelector((state) => state.auth);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {userInfo ? <UserHeader /> : <GuestHeader />}
      <main className="mt-[72px] min-h-screen">{children}</main>
    </>
  );
}

export default MainLayout;
