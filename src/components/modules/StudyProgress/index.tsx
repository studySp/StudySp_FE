"use client";
import React, { useEffect, useState } from "react";
import GitHubContributionGraph from "./StudyGragh";
import { BookOpenText, CircleCheckBig, Clock, Goal } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const progress: ProgressCardProps[] = [
  {
    icon: <Clock />,
    title: "Thời gian học tập",
    progress: 80,
    total: "120 giờ",
  },
  {
    icon: <CircleCheckBig />,
    title: "Hoàn thành nhiệm vụ",
    progress: 78,
    total: "90",
  },
  {
    icon: <Goal />,
    title: "Mục tiêu đạt được",
    progress: 60,
    total: "12",
  },
];

const subjectProgress: ProgressBarTabsProps[] = [
  {
    label: (
      <div className="flex flex-row items-center gap-2">
        <BookOpenText size={16} />
        <p>MAD291</p>
      </div>
    ),
    progress: 80,
    progressSubLabel: "80%",
  },
  {
    label: (
      <div className="flex flex-row items-center gap-2">
        <BookOpenText size={16} />
        <p>PRO192</p>
      </div>
    ),
    progress: 50,
    progressSubLabel: "50%",
  },
  {
    label: (
      <div className="flex flex-row items-center gap-2">
        <BookOpenText size={16} />
        <p>WEB201c</p>
      </div>
    ),
    progress: 62,
    progressSubLabel: "62%",
  },
];

const weeklyStats: ProgressBarTabsProps[] = [
  {
    label: "Thời gian học",
    progress: 80,
    progressSubLabel: "23 giờ",
  },
  {
    label: "Hoàn thành nhiệm vụ",
    progress: 70,
    progressSubLabel: "15 nhiệm vụ",
  },
  {
    label: "Mục tiêu đạt được",
    progress: 20,
    progressSubLabel: "2 mục tiêu",
  },
];

const daylyStats: ProgressBarTabsProps[] = [
  {
    label: "Thời gian học",
    progress: 80,
    progressSubLabel: "12 giờ",
  },
  {
    label: "Hoàn thành nhiệm vụ",
    progress: 40,
    progressSubLabel: "5 nhiệm vụ",
  },
];

export default function StudyProgress() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      {isMounted && (
        <div className="container flex flex-col gap-5 py-[120px]">
          <div>
            <h4 className="font-title text-3xl font-bold">Tiến độ học tập</h4>
          </div>
          <div>
            <p className="font-title">Tiến độ được ghi lại</p>
          </div>
          <div className="flex w-full justify-center">
            <GitHubContributionGraph />
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-title">Mục tiêu của bạn</p>

            <div className="gird-cols-1 grid gap-5 md:grid-cols-3">
              {progress.map((item, index) => (
                <ProgressCard key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Tabs defaultValue="weeklystat">
              <TabsList>
                {/* <TabsTrigger value="subject">Môn học</TabsTrigger> */}
                <TabsTrigger value="weeklystat">Hằng tuần</TabsTrigger>
                <TabsTrigger value="dailystat">Hằng ngày</TabsTrigger>
              </TabsList>
              {/* <TabsContent value="subject" className="mt-5">
                <div className="flex flex-col rounded-[12px] border-2 border-black bg-white p-5 shadow-3d transition-all hover:shadow-3d-hover">
                  <div className="flex flex-col gap-5">
                    <div>
                      <p className="font-title text-3xl font-semibold">
                        Tiến độ môn học
                      </p>
                      <p>Tiến độ các môn học của bạn</p>
                    </div>
                    <div className="flex flex-col gap-6">
                      {subjectProgress.map((item, index) => (
                        <ProgressBarForTabs key={index} {...item} />
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent> */}
              <TabsContent value="weeklystat" className="mt-5">
                <div className="flex flex-col rounded-[12px] border-2 border-black bg-white p-5 shadow-3d transition-all hover:shadow-3d-hover">
                  <div className="flex flex-col gap-5">
                    <div>
                      <p className="font-title text-3xl font-semibold">
                        Thống kê trong tuần
                      </p>
                      <p>Tiến độ học tập của bạn trong tuần</p>
                    </div>
                    <div className="flex flex-col gap-6">
                      {weeklyStats.map((item, index) => (
                        <ProgressBarForTabs key={index} {...item} />
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="dailystat" className="mt-5">
                <div className="flex flex-col rounded-[12px] border-2 border-black bg-white p-5 shadow-3d transition-all hover:shadow-3d-hover">
                  <div className="flex flex-col gap-5">
                    <div>
                      <p className="font-title text-3xl font-semibold">
                        Thống kê trong ngày
                      </p>
                      <p>Tiến độ học tập của bạn trong hôm nay</p>
                    </div>
                    <div className="flex flex-col gap-6">
                      {daylyStats.map((item, index) => (
                        <ProgressBarForTabs key={index} {...item} />
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </>
  );
}

export type ProgressCardProps = {
  title?: string;
  total?: string;
  progress?: number;
  icon?: React.ReactNode;
};

export const ProgressCard = ({
  icon,
  title,
  total,
  progress = 0,
}: ProgressCardProps) => {
  return (
    <div className="flex flex-col rounded-[12px] border-2 border-black bg-white shadow-3d transition-all hover:shadow-3d-hover">
      <div className="flex flex-col gap-2 p-5">
        <div className="flex flex-row justify-between">
          <p className="text-xl font-bold">{title}</p>
          <div>{icon}</div>
        </div>
        <div>
          <p className="text-3xl font-bold">{total}</p>
        </div>
        <div>
          <ProgressBar progress={progress} showLabel />
        </div>
      </div>
    </div>
  );
};

``;
export const ProgressBar = ({
  progress,
  color = "bg-blue-500",
  showLabel = true,
}: {
  progress: number;
  color?: string;
  showLabel?: boolean;
}) => {
  return (
    <div>
      {showLabel && (
        <p className="text-sm text-black text-opacity-70">
          {progress}% mục tiêu
        </p>
      )}
      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 shadow-md">
        <div
          className={`h-full ${color} flex items-center justify-center text-sm font-bold text-white transition-all duration-300 ease-in-out`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export type ProgressBarTabsProps = {
  progress?: number;
  label?: React.ReactNode;
  progressSubLabel?: React.ReactNode;
  showLabel?: boolean;
  color?: string;
};

export const ProgressBarForTabs = ({
  progress,
  label,
  progressSubLabel,
  color = "bg-blue-500",
}: ProgressBarTabsProps) => {
  return (
    <div>
      <div className="mb-1 flex justify-between">
        <p className="text-sm text-black text-opacity-70">{label}</p>
        <p className="text-sm text-black text-opacity-70">{progressSubLabel}</p>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 shadow-md">
        <div
          className={`h-full ${color} flex items-center justify-center text-sm font-bold text-white transition-all duration-300 ease-in-out`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
