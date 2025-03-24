import Image from "next/image";
import { Bell, MicOff, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SoloStudyRoom() {
  return (
    <div className="relative mb-16 w-full overflow-hidden rounded-3xl shadow-3d-hover">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-indigo-950/90"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-6 p-9">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button className="flex gap-2 rounded-md" variant={"outline"}>
              <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
              <span className="text-lg font-medium text-green-500">Live</span>
            </Button>

            <h1 className="ml-2 text-2xl font-bold text-white">Phòng tự học</h1>
          </div>
          <div className="flex items-center gap-4">
            <Video className="h-6 w-6 text-white/80" />
            <MicOff className="h-6 w-6 text-white/80" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="max-w-xl">
            <h2 className="mb-2 font-title text-3xl text-white">
              Sẵn sàng tập trung?
            </h2>
            <p className="text-lg font-light text-white/90">
              Kết hợp nền tảng học tập với background thư giãn, âm nhạc,
              Pomodoro và To-do List – giúp bạn học hiệu quả hơn, dù chỉ một
              mình!
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button
              variant="destructive"
              className="flex h-auto items-center gap-2 rounded-full bg-white font-semibold text-blue-500 hover:bg-white/90"
            >
              <span className="text-lg">Bắt đầu tự học</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
