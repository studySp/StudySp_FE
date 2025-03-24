import { RootState } from "@/store";
import { Cake, GraduationCap, Mail, Medal, Smile, UserPen } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function RightSection() {
  const { auth } = useSelector((state: RootState) => state);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <div className="flex border-spacing-1 flex-col justify-center">
      <div className="mb-3 flex flex-col justify-center">
        <div className="flex flex-row gap-1">
          {isMounted && (
            <h5 className="text-2xl font-bold">
              {auth?.userInfo!?.displayName}
            </h5>
          )}
          <Image
            src="/avatar_image/female_icon.svg"
            alt="gender_icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="mb-3 flex flex-col gap-5 md:flex-row md:gap-32">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <Cake className="" />
            <p className="font-semibold">27/04/2003</p>
          </div>
          <div className="flex flex-row gap-2">
            <Smile className="" />
            <p className="font-semibold">Gao neee</p>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <Mail />
              {isMounted && (
                <p className="font-semibold">{auth?.userInfo!?.email}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <UserPen />
            <h3 className="font-semibold">Giới thiệu bản thân:</h3>
          </div>
          <p className="h-20 w-full">
            Hi 👋, Thanh Thủy nè. TT đang học kỹ thuật phần mềm trường đại học
            FPT
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
