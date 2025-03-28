"use client";
import { useEffect } from "react";
import StudyRoomModule from "@/components/modules/StudyRoomModule";
import webStorageClient from "@/utils/webStorageClient";
import { cardsData, type ICard } from "@/data/study-area";

type TProps = {
  params: {
    roomId: string;
  };
};

function StudyRoom({ params }: TProps) {
  const { roomId } = params;
  useEffect(() => {
    const existingRooms = webStorageClient.get("recentRooms");

    // Đảm bảo existingRooms luôn là một mảng
    const parsedRooms = Array.isArray(existingRooms)
      ? existingRooms
      : Object.values(existingRooms || {});

    // Kiểm tra xem phòng đã tồn tại chưa
    const isRoomExists = parsedRooms.some((room: ICard) => room.id === roomId);

    if (!isRoomExists) {
      const newRoom = { ...cardsData.find((room) => room.id === roomId) };

      // Chỉ lưu tối đa 5 phòng gần đây
      const updatedRooms = [newRoom, ...parsedRooms].slice(0, 5);

      webStorageClient.set("recentRooms", JSON.stringify(updatedRooms), {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Lưu trong 7 ngày
      });
    }
  }, [roomId]);

  return <StudyRoomModule roomId={roomId} />;
}

export default StudyRoom;
