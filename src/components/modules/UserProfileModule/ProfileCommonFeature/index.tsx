"use client";
import React from "react";
import ProfileCommonCard, { ProfileCommonCardProps } from "./ProfileCommonCard";
import { Clock, ClockFading, Gift, Trophy } from "lucide-react";

const cardsData: ProfileCommonCardProps[] = [
  {
    icon: <ClockFading />,
    title: "Phòng gần đây",
    subTitle: "Xem lại các phòng bạn đã tham gia gần đây",
    des: "Truy cập lịch sử phòng đã tham gia và có thể tham gia lại",
    btnContent: "Xem phòng gần đây",
    redirectUrl: "user-profile/recent-rooms",
  },
  {
    icon: <Clock />,
    title: "Tiến độ học tập",
    subTitle: "Theo dõi hành trình học tập của bạn",
    des: "Theo dõi thời gian học tập, hoàn thành bài tập, và đạt được mục tiêu học tập",
    btnContent: "Xem tiến độ",
    redirectUrl: "user-profile/study-progress",
  },
  {
    icon: <Trophy />,
    title: "Bảng xếp hạng",
    subTitle: "Xem những thứ hạng tích cực",
    des: "Xem thứ hạng theo thời gian học tập, hoàn thành nhiệm vụ, và điểm tích lũy",
    btnContent: "Xem thứ hạng",
    redirectUrl: "user-profile/leaderboard",
  },
  {
    icon: <Gift />,
    title: "Thành tích và phần thưởng",
    des: "Thu thập huy hiệu, danh hiệu và các phần thưởng khác dựa trên thành tích học tập của bạn.",
    btnContent: "Xem thành tích",
    redirectUrl: "user-profile/reward",
  },
];

export default function ProfileCommonFeature() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cardsData.map((item, index) => {
          return (
            <ProfileCommonCard
              icon={item.icon}
              title={item.title}
              subTitle={item.subTitle}
              des={item.des}
              btnContent={item.btnContent}
              redirectUrl={item.redirectUrl}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
