"use client";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";
import { useAppSelector } from "@/hooks/redux-toolkit";

function MainLayout({ children }: { children: React.ReactNode }) {
  const { userInfo } = useAppSelector((state) => state.auth);

  return (
    <>
      {userInfo ? <UserHeader /> : <GuestHeader />}
      <main className="mt-[72px] min-h-screen">{children}</main>
    </>
  );
}

export default MainLayout;
