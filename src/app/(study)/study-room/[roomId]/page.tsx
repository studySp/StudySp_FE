import StudyRoomModule from "@/components/modules/StudyRoomModule";
import React from "react";

type TProps = {
  params: {
    roomId: string;
  };
};

function StudyRoom({ params }: TProps) {
  const { roomId } = params;
  return <StudyRoomModule roomId={roomId} />;
}

export default StudyRoom;
