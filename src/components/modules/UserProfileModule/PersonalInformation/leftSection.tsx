import { RootState } from "@/store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

function LeftSection() {
  const { auth } = useSelector((state: RootState) => state);
  console.log(auth);

  return (
    <div className="flex h-[200px] w-[200px] flex-col gap-4 rounded-full">
      <Image
        src={auth?.userInfo?.photoURL}
        alt="avatar"
        width={150}
        height={10}
        className="h-full w-full rounded-full object-cover"
      />
    </div>
  );
}

export default LeftSection;
