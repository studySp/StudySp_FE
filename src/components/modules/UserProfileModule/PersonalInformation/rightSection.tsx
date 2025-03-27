import { RootState } from "@/store";
import { Cake, Mail, Smile, UserPen } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function RightSection() {
  const { auth } = useSelector((state: RootState) => state);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex border-spacing-1 flex-col justify-center">
      <div className="mb-3 flex flex-col justify-center">
        <div className="flex flex-row gap-1">
          {auth?.userInfo?.user.userName && (
            <h5 className="text-2xl font-bold">
              {auth.userInfo.user.userName}
            </h5>
          )}
          {auth?.userInfo?.gender && (
            <Image
              src={
                auth.userInfo.gender === "Nữ"
                  ? "/avatar_image/female_icon.svg"
                  : auth.userInfo.gender === "Nam"
                    ? "/avatar_image/male_icon.svg"
                    : "/avatar_image/gender_other.svg"
              }
              alt="gender_icon"
              width={20}
              height={20}
            />
          )}
        </div>
      </div>

      <div className="mb-3 flex flex-col gap-5 md:flex-row md:gap-32">
        <div className="flex flex-col gap-2">
          {auth?.userInfo?.dayOfBirth && (
            <div className="flex flex-row gap-2">
              <Cake />
              <p className="font-semibold">{auth.userInfo.dayOfBirth}</p>
            </div>
          )}

          {auth?.userInfo?.nickname && (
            <div className="flex flex-row gap-2">
              <Smile />
              <p className="font-semibold">{auth.userInfo.nickname}</p>
            </div>
          )}

          {auth?.userInfo?.user.email && (
            <div className="flex flex-col">
              <div className="flex gap-2">
                <Mail />
                <p className="font-semibold">{auth.userInfo.user.email}</p>
              </div>
            </div>
          )}
        </div>

        {auth?.userInfo?.bio && (
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <UserPen />
              <h3 className="font-semibold">Giới thiệu bản thân:</h3>
            </div>
            <p className="h-20 w-full">{auth.userInfo.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RightSection;
