"use client";

import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ContributionData {
  date: Date;
  count: number;
  level: 0 | 1 | 2 | 3 | 4; // 0 = no contributions, 4 = most contributions
}

interface ContributionGraphProps {
  data?: ContributionData[];
  year?: number;
  className?: string;
}

export default function GitHubContributionGraph({
  data: providedData,
  year = new Date().getFullYear(),
  className = "",
}: ContributionGraphProps) {
  const [contributionData, setContributionData] = useState<ContributionData[]>(
    [],
  );

  useEffect(() => {
    if (providedData) {
      setContributionData(providedData);
      return;
    }

    // Generate sample data if none provided
    const sampleData: ContributionData[] = [];
    const startDate = new Date(year - 1, 2, 1); // Start from March of previous year
    const endDate = new Date(year, 2, 31); // End at March of current year

    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      // Generate random contribution level with more weight to lower values
      const random = Math.random();
      let level: 0 | 1 | 2 | 3 | 4 = 0;

      if (random > 0.6) level = 1;
      if (random > 0.8) level = 2;
      if (random > 0.9) level = 3;
      if (random > 0.95) level = 4;

      // Create patterns similar to the image
      // More contributions on certain days/months
      const month = currentDate.getMonth();
      const day = currentDate.getDay();

      // More contributions in May, Jul, Sep, Oct, Jan
      if ([4, 6, 8, 9, 0].includes(month)) {
        level = Math.min(4, level + 1) as 0 | 1 | 2 | 3 | 4;
      }

      // More contributions on Wednesdays and Fridays
      if (day === 3 || day === 5) {
        level = Math.min(4, level + 1) as 0 | 1 | 2 | 3 | 4;
      }

      sampleData.push({
        date: new Date(currentDate),
        count: level * 2, // Just a sample count based on level
        level,
      });

      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setContributionData(sampleData);
  }, [providedData, year]);

  // Get all days grouped by week
  const getWeeks = () => {
    const weeks: ContributionData[][] = [];
    let currentWeek: ContributionData[] = [];

    contributionData.forEach((day, index) => {
      const dayOfWeek = day.date.getDay();

      // Start a new week on Sunday (0) or if it's the first item
      if (dayOfWeek === 0 || index === 0) {
        if (currentWeek.length > 0) {
          weeks.push(currentWeek);
        }
        currentWeek = [];

        // Fill in missing days at the start of the first week
        if (index === 0 && dayOfWeek !== 0) {
          for (let i = 0; i < dayOfWeek; i++) {
            currentWeek.push(null as any);
          }
        }
      }

      currentWeek.push(day);

      // Push the last week
      if (index === contributionData.length - 1) {
        weeks.push(currentWeek);
      }
    });

    return weeks;
  };

  // Get unique months for labels
  const getMonths = () => {
    const months: { name: string; index: number; position: number }[] = [];

    contributionData.forEach((day, index) => {
      const monthName = day.date.toLocaleString("default", { month: "short" });
      const monthIndex = day.date.getMonth();

      if (!months.some((m) => m.index === monthIndex)) {
        // Calculate position based on week index
        const position = Math.floor(index / 7);
        months.push({ name: monthName, index: monthIndex, position });
      }
    });

    return months;
  };

  // Get level color based on contribution level
  const getLevelColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-gray-200";
      case 1:
        return "bg-orange-900";
      case 2:
        return "bg-orange-700";
      case 3:
        return "bg-orange-600";
      case 4:
        return "bg-orange-500";
      default:
        return "bg-gray-800";
    }
  };

  // Format date for tooltip
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const weeks = getWeeks();
  const months = getMonths();

  return (
    <div className={`flex justify-center w-fit rounded-lg bg-white p-4 text-gray-300 ${className}`}>
      <div className="flex justify-center">
        {/* Day labels */}
        <div className="mr-2 flex h-[120px] flex-col justify-around pt-6 text-xs text-gray-500">
          <div>Mon</div>
          <div>Wed</div>
          <div>Fri</div>
        </div>

        <div className="w-full overflow-x-auto">
          {/* Month labels */}
          <div className="mb-1 flex pl-1 text-xs text-gray-500">
            {months.map((month, i) => (
              <div
                key={month.name}
                className="flex-shrink-0"
                style={{
                  marginLeft:
                    i === 0
                      ? `${month.position * 16}px`
                      : `${(month.position - months[i - 1].position - 1) * 16}px`,
                }}
              >
                {month.name}
              </div>
            ))}
          </div>

          {/* Contribution grid */}
          <div className="flex">
            <div className="grid grid-flow-col gap-1">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-flow-row gap-1">
                  {week.map((day, dayIndex) => (
                    <TooltipProvider key={dayIndex}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            className={`h-3 w-3 rounded-sm ${day ? getLevelColor(day.level) : "bg-transparent"}`}
                          />
                        </TooltipTrigger>
                        {day && (
                          <TooltipContent side="top" className="text-xs">
                            <p>
                              {day.count} lần học tập{" "}
                              {formatDate(day.date)}
                            </p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-2 flex items-center justify-end text-xs text-gray-500">
            <span className="mr-1">Less</span>
            <div
              className={`h-3 w-3 rounded-sm ${getLevelColor(0)} mx-[2px]`}
            ></div>
            <div
              className={`h-3 w-3 rounded-sm ${getLevelColor(1)} mx-[2px]`}
            ></div>
            <div
              className={`h-3 w-3 rounded-sm ${getLevelColor(2)} mx-[2px]`}
            ></div>
            <div
              className={`h-3 w-3 rounded-sm ${getLevelColor(3)} mx-[2px]`}
            ></div>
            <div
              className={`h-3 w-3 rounded-sm ${getLevelColor(4)} mx-[2px]`}
            ></div>
            <span className="ml-1">More</span>
          </div>

        
        </div>
      </div>
    </div>
  );
}
