"use client";
import React, { useState } from "react";
import { Input, Button, Modal, message } from "antd";
import {
  SearchOutlined,
  UserDeleteOutlined,
  StopOutlined,
  UnlockOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const { confirm } = Modal;

interface Friend {
  id: string;
  displayName: string;
  email: string;
  avatar: string;
  status: string;
}

const ManageFriend: React.FC = () => {
  const [search, setSearch] = useState("");
  const [friends, setFriends] = useState<Friend[]>([
    {
      id: "1",
      displayName: "Tấn Dũng",
      email: "Tandung@gmail.com",
      avatar:
        "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/476831973_1335783864282986_4011624421069735489_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=vZu4ZZmrEY8Q7kNvgFspqMg&_nc_oc=AdkswRk5M23n-Q4ANuD7jpJQZiBQCaB6PiTIyhqJaw_W1MC-BIHNoakHVzWPDhyUWa0&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=i62_4tqaiaKklF4ftkLCkw&oh=00_AYEnbAFP9FBHVMTjhaLd4uukFDdkaKOp4JbWSYhwGbYZpw&oe=67EAB10C",
      status: "normal",
    },
    {
      id: "2",
      displayName: "Phan Ái",
      email: "Phanai@gmail.com",
      avatar:
        "https://cdn2.tuoitre.vn/471584752817336320/2023/5/3/sieu-mau-nam-ngo-hoang-linh-2-168311214610028162157.jpg",
      status: "normal",
    },
    {
      id: "3",
      displayName: "Nguyễn Văn An",
      email: "nguyenvanan@gmail.com",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAP2Lm43wHhFopB1L6WSqPgppXX7DBvBn_g&s",
      status: "normal",
    },
    {
      id: "4",
      displayName: "Trần Thị Bình",
      email: "tranthibinh@gmail.com",
      avatar:
        "https://media.vov.vn/sites/default/files/styles/large/public/2022-09-2/hdf_2680.jpg",
      status: "normal",
    },
    {
      id: "5",
      displayName: "Lê Văn Cường",
      email: "levancuong@gmail.com",
      avatar:
        "https://thethaovanhoa.mediacdn.vn/372676912336973824/2024/1/24/linh2-17060917319611531238626.jpg",
      status: "normal",
    },
    {
      id: "6",
      displayName: "Phạm Thị Dung",
      email: "phamthidung@gmail.com",
      avatar:
        "https://image.tienphong.vn/w890/Uploaded/2025/dbyxqdrsxr/2021_12_05/minh-tu-02-3576.jpg",
      status: "normal",
    },
    {
      id: "7",
      displayName: "Hoàng Văn Em",
      email: "hoangvanem@gmail.com",
      avatar:
        "https://baocantho.com.vn/image/fckeditor/upload/2021/20210227/images/z2352180172438_3ff9b5675af00b16ef8c4a147e4a1075.jpg",
      status: "normal",
    },
    {
      id: "8",
      displayName: "Đỗ Thị Phương",
      email: "dothiphuong@gmail.com",
      avatar:
        "https://sohanews.sohacdn.com/160588918557773824/2021/2/1/hang11-1612163219599703855086.jpg",
      status: "normal",
    },
    {
      id: "9",
      displayName: "Vũ Văn Giang",
      email: "vuvangiang@gmail.com",
      avatar:
        "https://mcdn.coolmate.me/image/August2022/nguoi-mau-nam-viet-nam_461.jpg",
      status: "normal",
    },
    {
      id: "10",
      displayName: "Lý Thị Hương",
      email: "lythihuong@gmail.com",
      avatar:
        "https://cdnphoto.dantri.com.vn/kYb54yE1uxwS5HQCUFnhTJJcX3k=/thumb_w/1020/2022/10/23/he-mong-dao-1-1666509638872.jpg",
      status: "normal",
    },
    {
      id: "11",
      displayName: "Mai Văn Hùng",
      email: "maivanhung@gmail.com",
      avatar:
        "https://media-cdn-v2.laodong.vn/Storage/newsportal/2018/10/16/636329/KQ-Extra-IMG_0464.jpg",
      status: "normal",
    },
    {
      id: "12",
      displayName: "Đinh Thị Lan",
      email: "dinhthilan@gmail.com",
      avatar:
        "https://images2.thanhnien.vn/zoom/351_219/Uploaded/thanhlongn/2022_08_17/28523855054976075869870824124309320228228940n-6731.jpeg",
      status: "normal",
    },
    {
      id: "13",
      displayName: "Bùi Văn Minh",
      email: "buivanminh@gmail.com",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8igkZ_aejNBR7MbpzV21XQlWX6pQCJFn0w&s",
      status: "normal",
    },
    {
      id: "14",
      displayName: "Ngô Thị Nhung",
      email: "ngothinhung@gmail.com",
      avatar:
        "https://images2.thanhnien.vn/zoom/736_460/528068263637045248/2023/6/12/2-vo-hoang-yen5-16865764436471115380014-55-0-1305-2000-crop-1686576462936173858605.jpg",
      status: "normal",
    },
    {
      id: "15",
      displayName: "Trịnh Văn Phong",
      email: "trinhvanphong@gmail.com",
      avatar:
        "https://thanhnien.mediacdn.vn/Uploaded/thanhlongn/2022_11_14/l5-4054.jpg",
      status: "normal",
    },
  ]);

  const showConfirm = (friend: Friend, action: string) => {
    confirm({
      title: `Bạn có chắc chắn muốn ${action === "remove" ? "xóa" : friend.status === "blocked" ? "bỏ chặn" : "chặn"} ${friend.displayName}?`,
      icon: <ExclamationCircleOutlined />,
      onOk() {
        if (action === "remove") {
          setFriends(friends.filter((f) => f.id !== friend.id));
          message.success(`Đã xóa ${friend.displayName} khỏi danh sách bạn bè`);
        } else if (action === "block") {
          setFriends(
            friends.map((f) =>
              f.id === friend.id
                ? {
                    ...f,
                    status: f.status === "blocked" ? "normal" : "blocked",
                  }
                : f,
            ),
          );
          message.success(
            `${friend.displayName} đã được ${friend.status === "blocked" ? "bỏ chặn" : "chặn"}`,
          );
        }
      },
    });
  };

  const filteredFriends = friends.filter(
    (friend) =>
      friend.displayName.toLowerCase().includes(search.toLowerCase()) ||
      friend.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container py-[120px]">
      <div>
        <h4 className="font-title text-3xl">Danh sách bạn bè</h4>
      </div>
      <div className="mt-5">
        <div className="flex flex-col gap-5 rounded-[12px] border-2 border-black bg-white p-5 shadow-3d transition-all hover:shadow-3d-hover">
          <div>
            <p className="font-title text-2xl font-bold">
              Quản lý danh sách bạn bè
            </p>
            <p>Xem và quản lý danh sách bạn bè của bạn</p>
          </div>
          <Input
            placeholder="Tìm kiếm bạn bè theo tên hoặc email..."
            prefix={<SearchOutlined />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4"
          />
          <div className="flex flex-col gap-5">
            {filteredFriends.map((friend) => (
              <div
                key={friend.id}
                className={`flex flex-row items-center justify-between rounded-md bg-[#f5f3ea] p-1 px-4 shadow-3d-dark transition-all hover:bg-[#f7e1bd] ${
                  friend.status === "blocked" ? "opacity-50" : ""
                }`}
              >
                <div className="flex flex-row items-center gap-5">
                  <div>
                    <div className="h-[70px] w-[70px] overflow-hidden rounded-full">
                      <Image
                        className="h-full w-full object-cover"
                        src={friend.avatar}
                        width={200}
                        height={200}
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="text-lg font-bold">{friend.displayName}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="rounded-lg bg-primary px-2 py-1 shadow-3d">
                        <p>{friend.email}</p>
                      </div>
                      {friend.status === "blocked" && (
                        <div className="rounded-lg bg-red-500 px-2 py-1 shadow-3d">
                          <p className="text-white">Đã chặn</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    type="primary"
                    danger
                    icon={<UserDeleteOutlined />}
                    onClick={() => showConfirm(friend, "remove")}
                    className="bg-red-500 hover:bg-red-600"
                  />
                  <Button
                    type="default"
                    icon={
                      friend.status === "blocked" ? (
                        <UnlockOutlined />
                      ) : (
                        <StopOutlined />
                      )
                    }
                    onClick={() => showConfirm(friend, "block")}
                    className={`${
                      friend.status === "blocked"
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : "bg-gray-500 text-white hover:bg-gray-600"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageFriend;
