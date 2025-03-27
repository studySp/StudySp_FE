"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import { headerUser } from "@/data/headerItems";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ChevRight from "@public/svgr/ChevRight";
import Image from "next/image";
import { Plus } from "lucide-react";
import Nav from "@/components/modules/Header/Nav";
import Header from "@/components/modules/Header";
import { useRouter } from "next-nprogress-bar";

function UserHeader() {
  const [isHambugerClicked, setIsHambugerClicked] = useState(false);

  const router = useRouter();

  const handleResize = useCallback(() => {
    setIsHambugerClicked(false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleHiddenHeader = () => {
    setIsHambugerClicked(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHiddenHeader);
    return () => {
      window.removeEventListener("scroll", handleHiddenHeader);
    };
  }, [isHambugerClicked]);

  return (
    <>
      <Header isHambugerClicked={isHambugerClicked}>
        <div className="container flex items-center justify-between gap-[50px] px-5 sm:px-8 md:px-10 lg:px-[60px]">
          <div className="flex lg:hidden">
            <Button
              variant={!isHambugerClicked ? "outline" : "default"}
              haveOverlay
              onClick={() => setIsHambugerClicked((prev) => !prev)}
            >
              <div className="flex flex-col gap-1">
                <div className="h-[2px] w-6 rounded-full bg-black" />
                <div className="h-[2px] w-6 rounded-full bg-black" />
                <div className="h-[2px] w-6 rounded-full bg-black" />
              </div>
            </Button>
          </div>
          {/* <Logo onClick={()=> router.push("/")}/> */}
          <h1 className="font-title text-4xl" onClick={() => router.push("/")}>
            STUDY SPACE
          </h1>
          <Nav headerItems={headerUser} />

          <div className="gap:3 flex w-[116px] items-center gap-4 md:gap-4 lg:w-auto lg:gap-6">
            <Link href="/create-room">
              <Button className="flex gap-1" haveOverlay>
                <Plus className="h-4 w-4 lg:h-6 lg:w-6" />
                <span className="hidden lg:block">Tạo phòng</span>
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                className="outline-none"
                onClick={() => router.push("/user-profile")}
              >
                <Image
                  src={"/images/avatar.webp"}
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-black"
                />
              </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </div>
      </Header>
      <div
        className={cn(
          "fixed left-0 right-0 top-0 z-40 block h-full overflow-y-hidden bg-background transition-all lg:hidden",
          !isHambugerClicked ? "translate-y-[-100%]" : "translate-y-[0]",
        )}
      >
        <span className="absolute -bottom-2 left-0 z-10 h-2 w-full">
          <Image
            src="/wave.svg"
            alt=""
            width={1440}
            height={8}
            className="h-full w-full object-cover"
          />
        </span>
        <ul className="container px-5 pt-24 sm:px-8 md:px-10 lg:px-[60px]">
          {headerUser?.map((item) => (
            <Link
              href={item.href}
              key={item?.label}
              className="flex cursor-pointer items-center justify-between gap-4 rounded-md px-5 py-4 text-xs transition-all hover:bg-[#DCDAD3]"
              onClick={() => {
                setIsHambugerClicked(false);
              }}
            >
              <span>{item?.label}</span>
              <ChevRight />
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UserHeader;
