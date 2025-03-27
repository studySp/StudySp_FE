"use client";
import Image from "next/image";
import screenfull from "screenfull";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { actionSetMute } from "@/store/slices/studyRoomController";
import { GearIcon } from "@radix-ui/react-icons";

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
];

function ProfileMainBoard({}: TProps) {
  const path = usePathname();
  const dispatch = useAppDispatch();
  const { audio } = useAppSelector((state) => state.studyRoomController);

  const [appUrl, setAppUrl] = useState<string>("");
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportUser, setReportUser] = useState<string | null>(null);
  const [reportReason, setReportReason] = useState("");
  const [formData, setFormData] = useState({
    isPrivate: false,
    camera: true,
    microphone: true,
    hasPassword: false,
  });
  useEffect(() => {
    setAppUrl(window.location.origin + path);
  }, [path]);

  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };
  const handleAddFriend = (userName: string) => {
    alert(`Đã gửi lời mời kết bạn đến ${userName}`);
  };

  const handleOpenReportModal = (userName: string) => {
    setReportUser(userName);
    setReportReason("");
    setShowReportModal(true);
  };

  const handleSubmitReport = () => {
    if (!reportReason.trim()) {
      alert("Vui lòng nhập lý do báo cáo!");
      return;
    }

    alert(`Báo cáo ${reportUser} với lý do: ${reportReason}`);
    setShowReportModal(false);
  };

  return (
    <div className="absolute right-4 top-4">
      <div className="flex flex-row gap-6">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-white p-2 transition hover:bg-gray-100">
              <GearIcon />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content className="z-10 mr-6 mt-3 flex max-h-[300px] w-fit max-w-[400px] animate-fade-down flex-col gap-2 rounded-lg border-2 border-black bg-white p-4 shadow-md animate-duration-200 hover:shadow-3d-hover">
            <DropdownMenu.Label className="font-bold">
              Cài đặt
            </DropdownMenu.Label>
            <DropdownMenu.Separator className="border-b-2" />
            <DropdownMenu.Group className="flex max-h-[600px] w-fit max-w-[400px] flex-col gap-0 overflow-auto">
              <div className="group relative z-0 mb-5 w-full">
                <label className="inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    value=""
                    className="peer sr-only"
                    checked={formData.isPrivate}
                    onChange={(e) =>
                      setFormData({ ...formData, isPrivate: e.target.checked })
                    }
                  />
                  <div className="peer relative h-6 w-11 rounded-full bg-blue-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-blue-300 after:bg-blue-600 after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Chế độ riêng tư
                  </span>
                </label>
              </div>
              <div className="group relative z-0 mb-5 w-full">
                <label className="inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    value=""
                    className="peer sr-only"
                    checked={formData.camera}
                    onChange={(e) =>
                      setFormData({ ...formData, camera: e.target.checked })
                    }
                  />
                  <div className="peer relative h-6 w-11 rounded-full bg-blue-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-blue-300 after:bg-blue-600 after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Camera
                  </span>
                </label>
              </div>
              <div className="group relative z-0 mb-5 w-full">
                <label className="inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    value=""
                    className="peer sr-only"
                    checked={formData.microphone}
                    onChange={(e) =>
                      setFormData({ ...formData, microphone: e.target.checked })
                    }
                  />

                  <div className="peer relative h-6 w-11 rounded-full bg-blue-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-blue-300 after:bg-blue-600 after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Microphone
                  </span>
                </label>
              </div>
              <div className="group relative z-0 mb-5 w-full">
                <label className="inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    value=""
                    className="peer sr-only"
                    checked={formData.hasPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hasPassword: e.target.checked,
                      })
                    }
                  />
                  <div className="peer relative h-6 w-11 rounded-full bg-blue-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-blue-300 after:bg-blue-600 after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Password
                  </span>
                </label>
              </div>
              {formData.hasPassword && (
                <div className="group relative z-0 mb-5 w-full">
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                    placeholder=" "
                    required
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">
                    Password
                  </label>
                </div>
              )}
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        <div className="relative z-10 flex flex-row items-center rounded-lg border-2 border-black bg-white/80 p-2 backdrop-blur-sm transition hover:shadow-3d-hover">
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
                  {users.map((item, index) => (
                    <div
                      className="flex flex-row items-center justify-between gap-2 p-2"
                      key={index}
                    >
                      <div className="flex flex-row gap-2">
                        <div className="h-[40px] w-[40px]">
                          <Image
                            src={item.avatar}
                            alt="avatar"
                            height={40}
                            width={40}
                            className="h-full w-full rounded-full"
                            unoptimized
                          />
                        </div>
                        <div>
                          <p className="font-bold">{item.name}</p>
                          <p className="text-sm">{item.username}</p>
                        </div>
                      </div>

                      <div className="flex flex-row gap-2">
                        <button
                          className="rounded-md bg-blue-500 px-2 py-1 text-xs text-white transition hover:bg-blue-600"
                          onClick={() => handleAddFriend(item.name)}
                        >
                          Add Friend
                        </button>
                        <button
                          className="rounded-md bg-red-500 px-2 py-1 text-xs text-white transition hover:bg-red-600"
                          onClick={() => handleOpenReportModal(item.name)}
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  ))}
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>

      {/* Modal Báo Cáo */}
      {showReportModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-lg font-bold">Báo cáo {reportUser}</h2>
            <textarea
              className="mt-2 w-full rounded-md border border-gray-300 p-2"
              rows={4}
              placeholder="Nhập lý do báo cáo..."
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 rounded-md bg-gray-300 px-4 py-2"
                onClick={() => setShowReportModal(false)}
              >
                Hủy
              </button>
              <button
                className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                onClick={handleSubmitReport}
              >
                Gửi báo cáo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMainBoard;
