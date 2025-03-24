import { RootState } from "@/store";
import {
  Cake,
  GraduationCap,
  Mail,
  Medal,
  University,
  UserRoundSearch,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function RightSection() {
  const { auth } = useSelector((state: RootState) => state);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <div className="flex flex-col justify-center">
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
            <GraduationCap className="" />
            <p className="font-semibold">DE170035</p>
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
          <div className="flex flex-col">
            <div className="flex gap-2">
              <Medal />
              <p className="font-semibold">Kĩ thuật phần mềm</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <University />
              <p className="font-semibold">Kỳ chuyên ngành 7</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2">
          <UserRoundSearch />
          <h3 className="font-semibold">Mô tả bản thân:</h3>
        </div>
        <p className="h-20 w-full">
          Hi 👋, I am ThuyNTT. A software engineer passionate developer from
          Vietnam
        </p>
      </div>
    </div>
  );
}

export default RightSection;
