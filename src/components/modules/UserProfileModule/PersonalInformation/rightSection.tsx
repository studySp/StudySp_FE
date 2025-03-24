import { RootState } from "@/store";
import {
  Cake,
  GraduationCap,
  Mail,
  Medal,
  Smile,
  UserPen,
  Pencil,
  Check,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function RightSection() {
  const { auth } = useSelector((state: RootState) => state);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // State cho từng thông tin cần chỉnh sửa
  const [editingField, setEditingField] = useState<string | null>(null);
  const [updatedInfo, setUpdatedInfo] = useState({
    displayName: auth?.userInfo?.displayName || "",
    email: auth?.userInfo?.email || "",
    birthday: "27/04/2003",
    bio: "Hi 👋, Thanh Thủy nè. TT đang học kỹ thuật phần mềm trường đại học FPT",
    status: "Gao neee",
  });

  useEffect(() => setIsMounted(true), []);

  // Xử lý cập nhật thông tin
  const handleUpdateInfo = (field: string, value: string) => {
    setUpdatedInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex border-spacing-1 flex-col justify-center">
      <div className="mb-3 flex flex-col justify-center">
        <div className="flex flex-row items-center gap-1">
          {isMounted && (
            <>
              {editingField === "displayName" ? (
                <input
                  type="text"
                  value={updatedInfo.displayName}
                  onChange={(e) =>
                    handleUpdateInfo("displayName", e.target.value)
                  }
                  className="rounded-md border px-2 py-1 text-lg"
                />
              ) : (
                <h5 className="text-2xl font-bold">
                  {updatedInfo.displayName}
                </h5>
              )}
              <button
                onClick={() =>
                  setEditingField(
                    editingField === "displayName" ? null : "displayName",
                  )
                }
              >
                {editingField === "displayName" ? (
                  <Check className="text-green-500" />
                ) : (
                  <Pencil />
                )}
              </button>
            </>
          )}
          <Image
            src="/avatar_image/female_icon.svg"
            alt="gender_icon"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="mb-3 flex flex-col gap-5 md:flex-row md:gap-32">
        {/* Cột 1 */}
        <div className="flex flex-col gap-2">
          {/* Ngày sinh */}
          <div className="flex flex-row items-center gap-2">
            <Cake />
            {editingField === "birthday" ? (
              <input
                type="text"
                value={updatedInfo.birthday}
                onChange={(e) => handleUpdateInfo("birthday", e.target.value)}
                className="rounded-md border px-2 py-1"
              />
            ) : (
              <p className="font-semibold">{updatedInfo.birthday}</p>
            )}
            <button
              onClick={() =>
                setEditingField(editingField === "birthday" ? null : "birthday")
              }
            >
              {editingField === "birthday" ? (
                <Check className="text-green-500" />
              ) : (
                <Pencil />
              )}
            </button>
          </div>

          {/* Status */}
          <div className="flex flex-row items-center gap-2">
            <Smile />
            {editingField === "status" ? (
              <input
                type="text"
                value={updatedInfo.status}
                onChange={(e) => handleUpdateInfo("status", e.target.value)}
                className="rounded-md border px-2 py-1"
              />
            ) : (
              <p className="font-semibold">{updatedInfo.status}</p>
            )}
            <button
              onClick={() =>
                setEditingField(editingField === "status" ? null : "status")
              }
            >
              {editingField === "status" ? (
                <Check className="text-green-500" />
              ) : (
                <Pencil />
              )}
            </button>
          </div>

          {/* Email */}
          <div className="flex flex-row items-center gap-2">
            <Mail />
            {isMounted && (
              <>
                {editingField === "email" ? (
                  <input
                    type="text"
                    value={updatedInfo.email}
                    onChange={(e) => handleUpdateInfo("email", e.target.value)}
                    className="rounded-md border px-2 py-1"
                  />
                ) : (
                  <p className="font-semibold">{updatedInfo.email}</p>
                )}
                <button
                  onClick={() =>
                    setEditingField(editingField === "email" ? null : "email")
                  }
                >
                  {editingField === "email" ? (
                    <Check className="text-green-500" />
                  ) : (
                    <Pencil />
                  )}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Cột 2 */}
        <div className="flex flex-col gap-2">
          {/* Giới thiệu */}
          <div className="flex flex-row items-center gap-2">
            <UserPen />
            <h3 className="font-semibold">Giới thiệu bản thân:</h3>
          </div>
          {editingField === "bio" ? (
            <textarea
              value={updatedInfo.bio}
              onChange={(e) => handleUpdateInfo("bio", e.target.value)}
              className="h-20 w-full rounded-md border p-2"
            />
          ) : (
            <p className="h-20 w-full">{updatedInfo.bio}</p>
          )}
          <button
            onClick={() =>
              setEditingField(editingField === "bio" ? null : "bio")
            }
          >
            {editingField === "bio" ? (
              <Check className="text-green-500" />
            ) : (
              <Pencil />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
