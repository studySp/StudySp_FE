"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ChatIcon from "@public/icons/studyroom/chat.svg";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AvatarImage from "@public/images/avatartwo.jpg";
import { TMessage, fakeMessageData } from "@/data/stuty-room-themes";

function ChatOutSide() {
  const [isOpenChat, setIsOpenChat] = useState<boolean>(false);

  return (
    <div className="absolute bottom-4 right-4 z-[1] h-[calc(100%-96px)] w-[480px]">
      <div
        className={cn(
          "absolute bottom-0 right-[0px] flex h-full w-full flex-row items-end gap-4 transition duration-500",
          "translate-x-[430px]",
        )}
      >
        <div
          className="h-fit w-fit cursor-pointer rounded-lg border-2 border-black bg-white/80 p-2 backdrop-blur-sm transition hover:shadow-3d-hover"
          onClick={() => setIsOpenChat(!isOpenChat)}
        >
          <Image
            src={ChatIcon}
            alt="icons"
            height={40}
            width={40}
            className="h-[35px] w-[35px]"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

export default ChatOutSide;
