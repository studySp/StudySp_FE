"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock, Search, Users } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import React from "react";

const rooms: RecentRoomsItemProps[] = [
  {
    title: "Web UI/UX Design",
    subTitle: "Bạn nào muốn học về WEB UI/UX thì vào phòng nhé 😘",
    timer: "Bạn đã tham gia 30 phút trước",
    participantsNo: 2,
    type: "JOIN",
  },
  {
    title: "Tiếng Nhật lớp cô Thủy",
    subTitle: "Ôn tiếng Nhật lớp chô Thủy nha mn | 日本語 ",
    timer: "Bạn đã tham gia 2 tiếng trước",
    participantsNo: 10,
    type: "JOIN",
  },
  {
    title: "Xem live steam tôi Dev 😤😤",
    subTitle: "Nay làm tiếp series NextJs với Nest nha mn <3 <3",
    timer: "Bạn đã tham gia 2 ngày trước",
    participantsNo: 25,
    type: "CLOSE",
  },
];

export default function RecentRooms() {
  return (
    <div className="container flex flex-col gap-8 py-[120px]">
      <div className="flex flex-row justify-between">
        <h4 className="font-title text-3xl">Phòng tham gia gần đây</h4>
        <Button haveOverlay>
          <p>Tìm phòng mới</p>
          <span className="ml-2">
            <Search size={16} />
          </span>
        </Button>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {rooms.length > 0 ? (
            rooms?.map((item, index) => {
              return (
                <RecentRoomsItem
                  participantsNo={item.participantsNo}
                  subTitle={item.subTitle}
                  timer={item.timer}
                  title={item.title}
                  type={item.type}
                  key={index}
                />
              );
            })
          ) : (
            <p className="mx-auto font-light">
              Bạn chưa tham gia phòng học nào
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export type RecentRoomsItemProps = {
  title?: string;
  subTitle?: string;
  timer?: string;
  participantsNo?: number;
  type?: "JOIN" | "CLOSE";
};

export function RecentRoomsItem({
  title,
  subTitle,
  timer,
  participantsNo,
  type = "JOIN",
}: RecentRoomsItemProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col rounded-[12px] border-2 border-black bg-white shadow-3d transition-all hover:shadow-3d-hover">
      <div className="flex flex-col gap-5 p-5">
        <div>
          <div className="flex flex-row justify-between">
            <p>{title}</p>
            <div
              className={cn(
                "rounded-md px-2 py-1 text-sm font-bold",
                type === "JOIN" ? "bg-primary" : "bg-gray-200",
              )}
            >
              {type === "JOIN" ? "Tham gia" : "Đã đóng"}
            </div>
          </div>
          <p className="text-black text-opacity-80">{subTitle}</p>
        </div>
        <div>
          <div className="flex flex-row gap-2">
            <Clock size={16} />
            <p>Tham gia lúc: {timer}</p>
          </div>
          <div className="flex flex-row gap-2">
            <Users size={16} />
            <p>Số người tham gia: {participantsNo}</p>
          </div>
        </div>
        <div>
          <Button
            haveOverlay
            className="w-full"
            disabled={type === "CLOSE"}
            onClick={() => {
              setTimeout(() => {
                router.push("/study-room/any");
              }, 3000);
            }}
          >
            {type === "JOIN" ? "Tham gia" : "Phòng đã đóng"}
          </Button>
        </div>
      </div>
    </div>
  );
}
