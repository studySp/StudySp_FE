"use client";
import Image from "next/image";
import screenfull from "screenfull";

import ArrowUpDownIcon from "@public/icons/studyroom/arrow-up-down.svg";
import BellIcon from "@public/icons/studyroom/bell.svg";
import VolumnMuteIcon from "@public/icons/studyroom/volumn-mute.svg";
import VolumnUpIcon from "@public/icons/studyroom/volumn-up.svg";
import VideoCallIcon from "@public/icons/studyroom/video.svg";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { actionSetMute } from "@/store/slices/studyRoomController";

type TProps = {};

const users = [
  {
    name: "Nguyễn Minh Phúc",
    username: "@phucnm.dev",
    avatar:
      "https://i.pinimg.com/736x/85/69/7b/85697b7b1fa0bdecfcbf80aefbdb87b7.jpg",
  },
  {
    name: "Trần Gia Huy",
    username: "@huytg.code",
    avatar:
      "https://i.pinimg.com/736x/e4/85/ca/e485caf194ab8e6057685d538920093e.jpg",
  },
  {
    name: "Phạm Thanh Tùng",
    username: "@tungpt.ai",
    avatar:
      "https://i.pinimg.com/736x/31/04/60/31046062275e8ee91e86870389aa4c81.jpg",
  },
  {
    name: "Võ Ngọc Mai",
    username: "@maivn.marketing",
    avatar:
      "https://i.pinimg.com/736x/12/c6/ec/12c6ecefdd47b6d60715fdc4abc0f2ff.jpg",
  },
  {
    name: "Lê Hoàng Nam",
    username: "@namlh.database",
    avatar:
      "https://i.pinimg.com/736x/5b/07/21/5b07212049a3029d4b5924a58e9aac8b.jpg",
  },
  {
    name: "Bùi Hồng Ngọc",
    username: "@ngocbh.manager",
    avatar:
      "https://i.pinimg.com/736x/b8/f6/6f/b8f66f6bb48f3c14019618f1a7776e7e.jpg",
  },
  {
    name: "Hoàng Gia Bảo",
    username: "@baohg.webdev",
    avatar:
      "https://i.pinimg.com/736x/9c/83/83/9c8383007351d83d96442761ffec4eee.jpg",
  },
  {
    name: "Lý Minh Quân",
    username: "@quanlm.finance",
    avatar:
      "https://i.pinimg.com/736x/46/2b/ae/462bae9176c26e916b20de2434175934.jpg",
  },
  {
    name: "Đỗ Nhật Long",
    username: "@longdn.design",
    avatar:
      "https://i.pinimg.com/736x/af/99/ec/af99ecc288152fba0433df0e79db554a.jpg",
  },
  {
    name: "Nguyễn Thảo Vy",
    username: "@vynt.cloud",
    avatar:
      "https://i.pinimg.com/736x/98/a5/a7/98a5a76caf8dbb66de5316e93a7de2b8.jpg",
  },
];

function ProfileMainBoard({}: TProps) {
  const path = usePathname();
  const dispatch = useAppDispatch();

  const { audio } = useAppSelector((state) => state.studyRoomController);

  const [appUrl, setAppUrl] = useState<string>("");
  useEffect(() => {
    const fetchAppUrl = () => {
      const url = window.location.origin;
      setAppUrl(url + path);
    };

    fetchAppUrl();
  }, [path]);

  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };
  return (
    <div className="absolute right-4 top-4">
      <div className="flex flex-row gap-6">
        <div className="relative z-10 flex flex-row items-center rounded-lg border-2 border-black bg-white/80 p-2 backdrop-blur-sm transition hover:shadow-3d-hover">
          <div className="px-2">
            <button
              className="flex flex-row-reverse items-center gap-2 rounded-md px-2 py-1 text-sm outline-none transition hover:bg-secondary"
              onClick={() => {
                // router.push("/video-call/any");
              }}
            >
              <Image
                src={VideoCallIcon}
                alt="icons"
                height={200}
                width={200}
                className="h-[20px] w-[20px]"
                unoptimized
              />
            </button>
          </div>
          <div className="h-full border-l-2"></div>
          <div className="px-2">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="flex flex-row items-center gap-2 rounded-md px-4 py-1 text-sm outline-none transition hover:bg-secondary">
                  Phòng của Ái
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="z-10 mr-6 mt-3 flex max-h-[300px] w-fit max-w-[400px] animate-fade-down flex-col gap-2 rounded-lg border-2 border-black bg-white p-4 shadow-md animate-duration-200 hover:shadow-3d-hover">
                <DropdownMenu.Label className="font-bold">
                  🐸 Người tham gia
                </DropdownMenu.Label>
                <DropdownMenu.Separator className="border-b-2" />
                <DropdownMenu.Group className="flex max-h-[600px] w-fit max-w-[400px] flex-col gap-0 overflow-auto">
                  <DropdownMenu.Item className="flex flex-col gap-3 rounded-md p-2 transition focus-visible:outline-none">
                    {users.map((item, index) => (
                      <div className="flex flex-row gap-2" key={index}>
                        <div className="h-[40px] w-[40px]">
                          <Image
                            src={item?.avatar}
                            alt="avatar"
                            height={40}
                            width={40}
                            className="h-full w-full rounded-full"
                            unoptimized
                          />
                        </div>
                        <div>
                          <p className="font-bold">{item?.name}</p>
                          <p className="text-sm">{item?.username}</p>
                        </div>
                      </div>
                    ))}
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          <div className="h-full border-l-2"></div>
          <div className="px-2">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="rounded-md px-4 py-1 text-sm outline-none transition hover:bg-secondary">
                  Mời bạn bè
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="z-10 mr-6 mt-3 flex max-h-[300px] w-fit max-w-[400px] animate-fade-down flex-col gap-2 rounded-lg border-2 border-black bg-white p-4 shadow-md animate-duration-200 hover:shadow-3d-hover">
                <DropdownMenu.Label className="font-bold">
                  Mời bạn bè
                </DropdownMenu.Label>
                <DropdownMenu.Separator className="border-b-2" />
                <DropdownMenu.Group className="flex flex-col gap-0">
                  <DropdownMenu.Item className="rounded-md p-2 transition focus-visible:outline-none">
                    <label htmlFor="" className="text-sm">
                      Link phòng
                    </label>
                    <input
                      type="text"
                      value={appUrl}
                      disabled
                      className="w-full text-ellipsis rounded-lg bg-secondary p-2 text-sm italic"
                    />
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="rounded-md p-2 transition focus-visible:outline-none">
                    <button className="rounded-md bg-secondary px-4 py-2 text-sm outline-none transition hover:bg-[#ebebeb]">
                      Copy link
                    </button>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>

        <div className="relative z-10 flex flex-row items-center gap-4 rounded-lg border-2 border-black bg-white/80 p-2 backdrop-blur-sm hover:shadow-3d-hover">
          <div className="flex flex-row-reverse gap-2 border-r-2 px-2">
            <button
              className="flex h-[30px] w-[30px] items-center justify-center rounded-md outline-none transition hover:bg-secondary"
              onClick={() => toggleFullscreen()}
            >
              <Image
                src={ArrowUpDownIcon}
                alt="icon"
                height={200}
                width={200}
                className="h-[20px] w-[20px] cursor-pointer"
                unoptimized
              />
            </button>
            <button className="flex h-[30px] w-[30px] items-center justify-center rounded-md outline-none transition hover:bg-secondary">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Image
                    src={BellIcon}
                    alt="icon"
                    height={200}
                    width={200}
                    className="h-[20px] w-[20px] cursor-pointer"
                    unoptimized
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="z-10 mr-4 mt-4 flex max-h-[300px] w-fit max-w-[400px] animate-fade-down flex-col gap-2 rounded-lg border-2 border-black bg-white p-4 shadow-md animate-duration-200 hover:shadow-3d-hover">
                  <DropdownMenu.Label className="text-start font-bold">
                    Thông báo
                  </DropdownMenu.Label>
                  <DropdownMenu.Separator className="border-b-2" />
                  <DropdownMenu.Group className="flex flex-col gap-2">
                    <DropdownMenu.Item className="flex flex-col gap-2 rounded-md p-2 focus-visible:outline-none">
                      <div className="flex flex-row items-center gap-2 border-b-2 pb-2">
                        <span>🔔</span>
                        <p className="text-start text-sm">
                          Người dùng `&quot;`Thanh Thủy`&quot;` đã tham gia
                          phòng học
                        </p>
                      </div>
                      <div className="flex flex-row items-center gap-2 border-b-2 pb-2">
                        <span>✅</span>
                        <p className="text-start text-sm">
                          Bạn đã tạo phòng học thành công
                        </p>
                      </div>
                    </DropdownMenu.Item>
                  </DropdownMenu.Group>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </button>
            <button
              className="flex h-[30px] w-[30px] items-center justify-center rounded-md outline-none transition hover:bg-secondary"
              onClick={() => dispatch(actionSetMute(!audio.muted))}
            >
              <Image
                src={audio.muted ? VolumnMuteIcon : VolumnUpIcon}
                alt="icon"
                height={200}
                width={200}
                className="h-[20px] w-[20px] cursor-pointer"
                unoptimized
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMainBoard;
