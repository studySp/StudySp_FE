"use client";

import ChatOutSide from "./ChatOutSide";
import MusicBooking from "./MusicBooking";
import OutRoom from "./OutRoom";
import ProfileMainBoard from "./ProfileMainBoard";
import RoomThemeControll from "./RoomThemeControll";

function StudyRoomModule() {
  return (
    <div className="h-full w-full select-none animate-fade">
      <div className="absolute left-0 right-0 top-0 h-full w-full overflow-hidden p-8">
        <OutRoom/>
        <MusicBooking/>
        <ProfileMainBoard />
        <ChatOutSide />
        <RoomThemeControll />
      </div>
    </div>
  );
}

export default StudyRoomModule;
