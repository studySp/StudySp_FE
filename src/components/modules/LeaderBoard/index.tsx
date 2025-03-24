import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleCheckBig, Clock, Trophy } from "lucide-react";
import Image from "next/image";
import React from "react";

const usersLeaderboard: UserInforLeaderBoardProps[] = [
  {
    fullname: "Michael Anderson",
    achivements: ["Thần thời gian", "Dân tích điểm", "Cú đêm"],
    avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <Clock size={16} />
        <p className="font-semibold">230 giờ</p>
      </div>
    ),
    rank: (
      <div>
        <Trophy size={30} className="text-yellow-500" />
      </div>
    ),
  },
  {
    fullname: "James Carter",
    achivements: ["Thần thời gian", "Dân tích điểm", "Cú đêm", "Người cũ"],
    avatar:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <Clock size={16} />
        <p className="font-semibold">229 giờ</p>
      </div>
    ),
    rank: (
      <div>
        <Trophy size={30} className="text-gray-500" />
      </div>
    ),
  },
  {
    fullname: "David Thompson",
    achivements: ["Thần thời gian", "Cú đêm", "Dân tích điểm", "Chủ phòng"],
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA_ReoAgwPlHWGZYJYzLHT1byzwsM1N80bcYCLok-CX3drw4l25Oi7jA5imJHctMEH9aE&usqp=CAU",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <Clock size={16} />
        <p className="font-semibold">220 giờ</p>
      </div>
    ),
    rank: (
      <div>
        <Trophy size={30} className="text-[#A52A2A]" />
      </div>
    ),
  },
  {
    fullname: "Emily Johnson",
    achivements: ["Thần thời gian", "Dân tích điểm"],
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYyTtNRaO0wJ-w6ZmYqeZ6F5Mw6befJt9JQOHmpBp-GDBHz9INxkqkDKlcD43O2QhsIcs&usqp=CAU",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <Clock size={16} />
        <p className="font-semibold">190 giờ</p>
      </div>
    ),
    rank: (
      <div className="h-[30px] w-[30px] text-center">
        <p className="text-2xl">4</p>
      </div>
    ),
  },
  {
    fullname: "Sophia White",
    achivements: ["Thần thời gian", "Không nghỉ"],
    avatar: "https://untitledui.com/images/avatars/lucy-bond",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <Clock size={16} />
        <p className="font-semibold">189 giờ</p>
      </div>
    ),
    rank: (
      <div className="h-[30px] w-[30px] text-center">
        <p className="text-2xl">5</p>
      </div>
    ),
  },
];

const usersLeaderboardCompleted: UserInforLeaderBoardProps[] = [
  {
    fullname: "William Scott",
    achivements: ["Thần thời gian"],
    avatar: "https://untitledui.com/images/avatars/olly-schroeder",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <CircleCheckBig size={16} />
        <p className="font-semibold">229 nhiệm vụ</p>
      </div>
    ),
    rank: (
      <div>
        <Trophy size={30} className="text-yellow-500" />
      </div>
    ),
  },
  {
    fullname: "Alexander Reed",
    achivements: ["Thần thời gian", "Cú đêm", "Người cũ"],
    avatar: "https://untitledui.com/images/avatars/koray-okumus",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <CircleCheckBig size={16} />
        <p className="font-semibold">210 nhiệm vụ</p>
      </div>
    ),
    rank: (
      <div>
        <Trophy size={30} className="text-gray-500" />
      </div>
    ),
  },
  {
    fullname: "Daniel Parker",
    achivements: ["Thần thời gian", "Chủ phòng"],
    avatar: "https://untitledui.com/images/avatars/drew-cano",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <CircleCheckBig size={16} />
        <p className="font-semibold">189 nhiệm vụ</p>
      </div>
    ),
    rank: (
      <div>
        <Trophy size={30} className="text-[#A52A2A]" />
      </div>
    ),
  },
  {
    fullname: "Victoria Gray",
    achivements: ["Thần thời gian"],
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncsZypfh2LE3F3Auy2siOF29x8vuaDRkvMCiRwWZ3XQvl6zc_xeMF6fyJeakrXbP2Yyo&usqp=CAU",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <CircleCheckBig size={16} />
        <p className="font-semibold">180 nhiệm vụ</p>
      </div>
    ),
    rank: (
      <div className="h-[30px] w-[30px] text-center">
        <p className="text-2xl">4</p>
      </div>
    ),
  },
  {
    fullname: "Ella Foster",
    achivements: ["Thần thời gian", "Làm chủ"],
    avatar: "https://untitledui.com/images/avatars/kelly-williams",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <CircleCheckBig size={16} />
        <p className="font-semibold">179 nhiệm vụ</p>
      </div>
    ),
    rank: (
      <div className="h-[30px] w-[30px] text-center">
        <p className="text-2xl">5</p>
      </div>
    ),
  },
];

const usersLeaderboardScores: UserInforLeaderBoardProps[] = [
  {
    fullname: "Samuel Ward",
    achivements: ["Thần thời gian", "Cú đêm", "Người cũ"],
    avatar:
      "https://githubsatellite.com/assets/img/speakers/Pranav_Raj_Headshot.jpg",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <Trophy size={16} />
        <p className="font-semibold">2293 điểm</p>
      </div>
    ),
    rank: (
      <div>
        <Trophy size={30} className="text-yellow-500" />
      </div>
    ),
  },
  {
    fullname: "Zoey Howard",
    achivements: ["Thần thời gian"],
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvWWkM6vz62wC6zuyDgX3l53uju0eRtup32hQJOSVtOlWi6ggf5SXTk1V2mkO3xY0QMk&usqp=CAU",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <Trophy size={16} />
        <p className="font-semibold">2102 điểm</p>
      </div>
    ),
    rank: (
      <div>
        <Trophy size={30} className="text-gray-500" />
      </div>
    ),
  },
  {
    fullname: "Anthony Cox",
    achivements: ["Chủ phòng"],
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93eOq9ja20_ZT1D5OloMvlaHwD04bAPnrzGA-b_bct3cRc1bQlONHHJP75ItYrNgNBNs&usqp=CAU",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <Trophy size={16} />
        <p className="font-semibold">1892 điểm</p>
      </div>
    ),
    rank: (
      <div>
        <Trophy size={30} className="text-[#A52A2A]" />
      </div>
    ),
  },
  {
    fullname: "Charlotte Bryant",
    achivements: ["Thần thời gian"],
    avatar: "https://untitledui.com/images/avatars/lana-steiner",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <Trophy size={16} />
        <p className="font-semibold">1802 điểm</p>
      </div>
    ),
    rank: (
      <div className="h-[30px] w-[30px] text-center">
        <p className="text-2xl">4</p>
      </div>
    ),
  },
  {
    fullname: "Lucy Jenkins",
    achivements: ["Thần thời gian", "Siêng năng"],
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWt_pXAyDGHGOQsrRg5WEEn6c1DQo8zF2mQUjceIos3Eh7FfeBPRpb35ZoXt6fRv5162E&usqp=CAU",
    subFitness: (
      <div className="flex flex-row items-center gap-2">
        <Trophy size={16} />
        <p className="font-semibold">1794 điểm</p>
      </div>
    ),
    rank: (
      <div className="h-[30px] w-[30px] text-center">
        <p className="text-2xl">5</p>
      </div>
    ),
  },
];

export default function LeaderBoard() {
  return (
    <div className="container py-[120px]">
      <div>
        <h4 className="font-title text-3xl">Bảng xếp hạng</h4>
      </div>
      <div className="mt-5">
        <Tabs defaultValue="studytime">
          <TabsList>
            <TabsTrigger value="studytime">Thời gian học</TabsTrigger>
            <TabsTrigger value="completedtask">Hoàn hành nhiệm vụ</TabsTrigger>
            <TabsTrigger value="scores">Điểm tích lũy</TabsTrigger>
          </TabsList>
          <TabsContent value="studytime" className="mt-5">
            <div className="flex flex-col gap-5 rounded-[12px] border-2 border-black bg-white p-5 shadow-3d transition-all hover:shadow-3d-hover">
              <div>
                <p className="font-title text-2xl font-bold">
                  Top người học dựa theo thời gian
                </p>
                <p>Người dùng với số thời gian học nhiều nhất</p>
              </div>
              <div className="flex flex-col gap-5">
                {usersLeaderboard.map((item, index) => (
                  <UserInforOfLeaderBoard key={index} {...item} />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="completedtask" className="mt-5">
            <div className="flex flex-col gap-5 rounded-[12px] border-2 border-black bg-white p-5 shadow-3d transition-all hover:shadow-3d-hover">
              <div>
                <p className="font-title text-2xl font-bold">
                  Top người hoàn thành nhiệm vụ
                </p>
                <p>Người dùng với số nhiệm vụ hoàn thành nhiều nhất</p>
              </div>
              <div className="flex flex-col gap-5">
                {usersLeaderboardCompleted.map((item, index) => (
                  <UserInforOfLeaderBoard key={index} {...item} />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="scores" className="mt-5">
            <div className="flex flex-col gap-5 rounded-[12px] border-2 border-black bg-white p-5 shadow-3d transition-all hover:shadow-3d-hover">
              <div>
                <p className="font-title text-2xl font-bold">
                  Top người hoàn thành nhiệm vụ
                </p>
                <p>Người dùng với số nhiệm vụ hoàn thành nhiều nhất</p>
              </div>
              <div className="flex flex-col gap-5">
                {usersLeaderboardScores.map((item, index) => (
                  <UserInforOfLeaderBoard key={index} {...item} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export type UserInforLeaderBoardProps = {
  avatar?: string;
  achivements?: string[];
  fullname?: string;
  subFitness?: React.ReactNode;
  rank?: React.ReactNode;
};

export const UserInforOfLeaderBoard = ({
  achivements,
  avatar,
  fullname,
  rank,
  subFitness,
}: UserInforLeaderBoardProps) => {
  return (
    <div className="flex flex-row items-center justify-between rounded-md bg-[#f5f3ea] p-1 px-4 shadow-3d-dark transition-all hover:bg-[#f7e1bd]">
      <div className="flex flex-row items-center gap-5">
        <div>{rank}</div>
        <div>
          <div className="h-[70px] w-[70px] overflow-hidden rounded-full">
            <Image
              className="h-full w-full object-cover"
              src={avatar ?? "/images/avatar.webp"}
              width={200}
              height={200}
              alt="avt"
            />
          </div>
        </div>
        <div>
          <div>
            <p className="text-lg font-bold">{fullname}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {achivements!.map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-primary px-2 py-1 shadow-3d"
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>{subFitness}</div>
    </div>
  );
};
