"use client";
import { Button } from "@/components/ui/button";
import type { ICard } from "@/data/study-area";
import { cn } from "@/lib/utils";
import webStorageClient from "@/utils/webStorageClient";
import { Clock, Search, Users } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import React, { useEffect, useState } from "react";

export default function RecentRooms() {
  const [rooms, setRooms] = useState<ICard[]>([]);
  useEffect(() => {
    const recentRooms = webStorageClient.get("recentRooms");

    console.log("Dữ liệu từ localStorage:", recentRooms);

    if (Array.isArray(recentRooms)) {
      setRooms(recentRooms); // Nếu đã là mảng, giữ nguyên
    } else if (typeof recentRooms === "object" && recentRooms !== null) {
      setRooms(Object.values(recentRooms)); // Chuyển object thành mảng
    } else {
      setRooms([]); // Nếu dữ liệu sai định dạng, đặt thành mảng rỗng
    }

    console.log("Danh sách phòng gần đây (sau khi xử lý):", rooms);
  }, []);

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
            rooms?.map((item) => {
              return (
                <RecentRoomsItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  subTitle={item.subTitle}
                  timer={item.timer}
                  participantsNo={item.participantsNo}
                  type={item.type}
                  imgSrc={item.imgSrc}
                  authorName={item.authorName}
                  online={item.online}
                  isPrivate={item.isPrivate}
                  tag={item.tag}
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

export function RecentRoomsItem({
  id,
  title,
  subTitle,
  timer,
  participantsNo,
  type = "JOIN",
}: ICard) {
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
            {/* <Clock size={16} /> */}
            {/* <p>Tham gia lúc: {timer}</p> */}
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
                router.push(`/study-room/${id}`);
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
