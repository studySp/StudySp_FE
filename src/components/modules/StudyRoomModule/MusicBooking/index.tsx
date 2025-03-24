"use client";
import useModal from "@/hooks/useModal";
import React from "react";

function MusicBooking() {
  return (
    <div className="absolute left-[165px] top-4">
      <div className="flex flex-row gap-6">
        <div className="relative z-10 flex flex-row items-center rounded-lg border-2 border-black bg-white/80 p-2 backdrop-blur-sm transition hover:shadow-3d-hover">
          <div>
            <button className="flex flex-row-reverse items-center gap-2 rounded-md py-1 text-sm outline-none transition">
              <div>Yêu cầu nhạc</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicBooking;
