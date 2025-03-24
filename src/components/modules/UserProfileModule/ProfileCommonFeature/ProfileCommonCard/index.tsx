"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next-nprogress-bar";
import React from "react";

export type ProfileCommonCardProps = {
  icon?: React.ReactNode;
  title?: string;
  subTitle?: string;
  des?: string;
  btnContent?: string;
  redirectUrl?: string;
};

export default function ProfileCommonCard({
  icon,
  title,
  subTitle,
  des,
  btnContent,
  redirectUrl = "/",
}: ProfileCommonCardProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col rounded-[12px] border-2 border-blue-800 bg-white shadow-3d transition-all hover:shadow-3d-hover">
      <div className="flex flex-col gap-2 p-5">
        <div className="flex flex-row items-center gap-5">
          <div>{icon}</div>
          <div>
            <h4 className="text-2xl font-bold">{title}</h4>
          </div>
        </div>
        <div className="">
          <p className="text-black text-opacity-70">{subTitle}</p>
        </div>
        <div>
          <p className="text-black">{des}</p>
        </div>
        <div>
          <Button
            className="w-full font-bold"
            onClick={() => router.push(redirectUrl!)}
            haveOverlay
          >
            {btnContent}
          </Button>
        </div>
      </div>
    </div>
  );
}
