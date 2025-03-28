"use client";

import ChatOutSide from "./ChatOutSide";
import MusicBooking from "./MusicBooking";
import OutRoom from "./OutRoom";
import ProfileMainBoard from "./ProfileMainBoard";
import { Room } from "./Room";
import RoomThemeControll from "./RoomThemeControll";

function StudyRoomModule({ roomId }: { roomId: string }) {
  return (
    <div className="h-full w-full animate-fade select-none">
      <div className="absolute left-0 right-0 top-0 h-full w-full gap-5 overflow-hidden p-8">
        <OutRoom />
        <MusicBooking />
        <ProfileMainBoard />
        <ChatOutSide />
        <RoomThemeControll />
        <Room />
      </div>
    </div>
  );
}

export default StudyRoomModule;
