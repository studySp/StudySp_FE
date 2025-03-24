"use client";
import { useRouter } from "next-nprogress-bar";
import React from "react";

function OutRoom() {
  const router = useRouter();
  return (
    <div className="absolute left-4 top-4 !mr-10">
      <div className="flex flex-row gap-6">
        <div className="relative z-10 flex flex-row items-center rounded-lg border-2 border-black bg-white/80 p-2 backdrop-blur-sm transition hover:shadow-3d-hover">
          <div>
            <button
              className="flex flex-row-reverse items-center gap-2 rounded-md py-1 text-sm outline-none transition"
              onClick={() => router.push("/study-area")}
            >
              <div>Thoát phòng</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutRoom;
