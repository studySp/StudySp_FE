"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { truncate } from "fs/promises";
import { Award, Gift, Ticket, Trophy } from "lucide-react";
import React from "react";

const badges: BadgeCardProps[] = [
  {
    title: "Dậy sớm",
    process: 100,
    isEarned: true,
    processLabel: "Tiến độ: 10/10",
    subtitle: "Hoàn thành 10 buổi học trước 9 giờ sáng",
    processSubLabel: "100%",
  },
  {
    title: "Chuyên cần",
    process: 80,
    isEarned: false,
    processLabel: "Tiến độ: 8/10",
    subtitle: "Tham gia 10 buổi học liên tiếp không vắng mặt",
    processSubLabel: "80%",
  },
  {
    title: "Tích cực",
    process: 60,
    isEarned: false,
    processLabel: "Tiến độ: 6/10",
    subtitle: "Phát biểu ít nhất 10 lần trong lớp học",
    processSubLabel: "60%",
  },
  {
    title: "Hoàn thành xuất sắc",
    process: 50,
    isEarned: false,
    processLabel: "Tiến độ: 5/10",
    subtitle: "Đạt điểm tối đa trong 10 bài kiểm tra",
    processSubLabel: "50%",
  },
  {
    title: "Chuyên gia thảo luận",
    process: 30,
    isEarned: false,
    processLabel: "Tiến độ: 3/10",
    subtitle: "Tham gia 10 buổi thảo luận nhóm",
    processSubLabel: "30%",
  },
  {
    title: "Người hoàn thành nhiệm vụ",
    process: 90,
    isEarned: true,
    processLabel: "Tiến độ: 9/10",
    subtitle: "Hoàn thành 10 bài tập đúng hạn",
    processSubLabel: "90%",
  },
  {
    title: "Học viên gương mẫu",
    process: 100,
    isEarned: true,
    processLabel: "Tiến độ: 10/10",
    subtitle: "Đạt tất cả các huy hiệu khác",
    processSubLabel: "100%",
  },
];

const titles: TitleCardProps[] = [
  {
    icon: <Trophy />,
    title: "Học sinh gương mẫu",
    subtitle: "Danh hiệu học tập",
    isEarned: true,
    isLock: false,
  },
  {
    icon: <Trophy />,
    title: "Chuyên cần",
    subtitle: "Đi học đầy đủ và đúng giờ",
    isEarned: true,
    isLock: false,
  },
  {
    icon: <Trophy />,
    title: "Học bá",
    subtitle: "Đạt điểm xuất sắc trong tất cả các bài kiểm tra",
    isEarned: false,
    isLock: false,
  },
  {
    icon: <Trophy />,
    title: "Nhà hùng biện",
    subtitle: "Tham gia tích cực vào các buổi thảo luận nhóm",
    isEarned: false,
    isLock: false,
  },
  {
    icon: <Trophy />,
    title: "Hoàn thành xuất sắc",
    subtitle: "Hoàn thành tất cả các bài tập đúng hạn",
    isEarned: true,
    isLock: true,
  },
  {
    icon: <Trophy />,
    title: "Người kiên trì",
    subtitle: "Không bỏ lỡ buổi học nào trong 1 tháng",
    isEarned: true,
    isLock: true,
  },
  {
    icon: <Trophy />,
    title: "Nhà vô địch thử thách",
    subtitle: "Chiến thắng trong các cuộc thi học thuật",
    isEarned: false,
    isLock: true,
  },
];

const gifts: TitleCardProps[] = [
  {
    icon: <Gift />,
    title: "Tùy chỉnh avatar",
    subtitle: "Bật tính năng điều chỉnh avatar",
    isEarned: true,
    isLock: false,
    btnContent: "Nhận thưởng",
  },
  {
    icon: <Gift />,
    title: "Giao diện tối",
    subtitle: "Mở khóa chế độ giao diện tối",
    isEarned: false,
    isLock: true,
    btnContent: "Nhận thưởng",
  },
  {
    icon: <Gift />,
    title: "Hiệu ứng đặc biệt",
    subtitle: "Bật hiệu ứng sinh động trên giao diện",
    isEarned: false,
    isLock: true,
    btnContent: "Nhận thưởng",
  },
  {
    icon: <Gift />,
    title: "Hình nền tuỳ chỉnh",
    subtitle: "Chọn hình nền giao diện theo sở thích",
    isEarned: true,
    isLock: false,
    btnContent: "Nhận thưởng",
  },
  {
    icon: <Gift />,
    title: "Huy hiệu đặc biệt",
    subtitle: "Mở khóa huy hiệu độc quyền",
    isEarned: true,
    isLock: false,
    btnContent: "Nhận thưởng",
  },
  {
    icon: <Gift />,
    title: "Danh hiệu VIP",
    subtitle: "Nhận danh hiệu đặc biệt trong hồ sơ",
    isEarned: false,
    isLock: true,
    btnContent: "Nhận thưởng",
  },
  {
    icon: <Gift />,
    title: "Emoji phản hồi",
    subtitle: "Sử dụng emoji khi phản hồi bài học",
    isEarned: true,
    isLock: false,
    btnContent: "Nhận thưởng",
  },
];

const vouchers: VoucherCardProps[] = [
  {
    title: "Tặng Premium",
    subtitle: "Nhận quyền truy cập Premium miễn phí trong 1 tháng",
    isEarned: false,
    isLock: false,
  },
  {
    title: "Giảm giá 20%",
    subtitle: "Áp dụng cho lần mua gói tiếp theo",
    isEarned: true,
    isLock: true,
  },
];

export default function Rewards() {
  return (
    <div className="container flex flex-col gap-5 py-[120px]">
      <div>
        <h4 className="font-title text-3xl font-bold">
          Thành tích và phần thưởng của bạn
        </h4>
      </div>
      <div className="">
        <Tabs defaultValue="badges">
          <TabsList>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="title">Danh hiệu</TabsTrigger>
            <TabsTrigger value="gifts">Quà tặng</TabsTrigger>
            <TabsTrigger value="voucher">Voucher</TabsTrigger>
          </TabsList>
          <TabsContent value="badges" className="mt-5">
            <div className="">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {badges.map((item, index) => (
                  <BadgeCard key={index} {...item} />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="title" className="mt-5">
            <div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {titles.map((item, index) => (
                  <TitleCard key={index} {...item} />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="gifts" className="mt-5">
            <div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {gifts.map((item, index) => (
                  <TitleCard key={index} {...item} />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="voucher" className="mt-5">
            <div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {vouchers.map((item, index) => (
                  <VoucherCard key={index} {...item} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export type BadgeCardProps = {
  title?: string;
  isEarned?: boolean;
  subtitle?: string;
  process?: number;
  processLabel?: string;
  processSubLabel?: string;
};

export const BadgeCard = ({
  isEarned,
  process,
  processLabel,
  processSubLabel,
  subtitle,
  title,
}: BadgeCardProps) => {
  return (
    <div className="flex flex-col rounded-[12px] border-2 border-black bg-white p-5 shadow-3d transition-all hover:shadow-3d-hover">
      <div className="flex h-full flex-col justify-between gap-5">
        <div className="flex flex-row justify-between">
          <div>
            <div className="flex flex-row items-center gap-2">
              <Award size={24} />
              <p className="max-w-[280px] text-2xl font-bold">{title}</p>
            </div>
            <div>
              <p>{subtitle} </p>
            </div>
          </div>
          {isEarned && (
            <div className="h-fit rounded-lg bg-primary px-2 py-1 text-center text-sm">
              Đã có
            </div>
          )}
        </div>
        <div>
          <ProgressBar
            progress={process}
            label={processLabel}
            progressSubLabel={processSubLabel}
          />
        </div>
      </div>
    </div>
  );
};
export type ProgressBarProps = {
  progress?: number;
  label?: React.ReactNode;
  progressSubLabel?: React.ReactNode;
  showLabel?: boolean;
  color?: string;
};

export const ProgressBar = ({
  progress,
  label,
  progressSubLabel,
  showLabel = true,
  color = "bg-blue-500",
}: ProgressBarProps) => {
  return (
    <div>
      <div className="mb-1 flex justify-between">
        <p className="text-md text-black text-opacity-70">{label}</p>
        <p className="text-md text-black text-opacity-70">{progressSubLabel}</p>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 shadow-md">
        <div
          className={`h-full ${color} flex items-center justify-center text-sm font-bold text-white transition-all duration-300 ease-in-out`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export type TitleCardProps = {
  title?: string;
  isEarned?: boolean;
  subtitle?: string;
  isLock?: boolean;
  icon?: React.ReactNode;
  btnContent?: string;
};

export const TitleCard = ({
  isEarned,
  subtitle,
  title,
  isLock,
  icon,
  btnContent = "Hoạt động danh hiệu",
}: TitleCardProps) => {
  return (
    <div className="flex flex-col rounded-[12px] border-2 border-black bg-white p-5 shadow-3d transition-all hover:shadow-3d-hover">
      <div className="flex h-full flex-col justify-between gap-5">
        <div className="flex flex-row justify-between">
          <div>
            <div className="flex flex-row items-center gap-2">
              {icon}
              <p className="max-w-[280px] text-2xl font-bold">{title}</p>
            </div>
            <div>
              <p>{subtitle} </p>
            </div>
          </div>
          {isEarned && (
            <div className="h-fit rounded-lg bg-primary px-2 py-1 text-center text-sm">
              Đã có
            </div>
          )}
        </div>
        <div>
          {isLock && (
            <Button className="w-full" disabled>
              Chưa đủ điểm để nhận
            </Button>
          )}
          {!isLock && <Button className="w-full">{btnContent}</Button>}
        </div>
      </div>
    </div>
  );
};

export type VoucherCardProps = {
  title?: string;
  subtitle?: string;
  isEarned?: boolean;
  isLock?: boolean;
};

export const VoucherCard = ({
  subtitle,
  title,
  isEarned,
  isLock,
}: VoucherCardProps) => {
  return (
    <div className="flex flex-col rounded-[12px] border-2 border-black bg-white p-5 shadow-3d transition-all hover:shadow-3d-hover">
      <div className="flex h-full flex-col justify-between gap-5">
        <div className="flex flex-row justify-between">
          <div>
            <div className="flex flex-row items-center gap-2">
              <Ticket />
              <p className="max-w-[280px] text-2xl font-bold">{title}</p>
            </div>
            <div>
              <p>{subtitle} </p>
            </div>
          </div>
          {isEarned && (
            <div className="h-fit rounded-lg bg-primary px-2 py-1 text-center text-sm">
              Đã có
            </div>
          )}
        </div>
        {isLock ? (
          <>
            <div>
              <Button className="w-full bg-white" disabled>
                Đã bị khóa
              </Button>
            </div>
          </>
        ) : (
          <>
            <div>
              <Button className="w-full bg-white" disabled>
                PREMIUM7
              </Button>
            </div>
            <div>
              <Button className="w-full">Sử dụng voucher</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
