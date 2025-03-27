"use client";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";

import ButtonArrow from "@public/svgr/ButtonArrow";
import ArrowSubcribe from "@public/svgr/ArrowSubcribe";
import { actionLogin, actionSetIsAuth } from "@/store/slices/auth";

import Link from "next/link";
import { useAppDispatch } from "@/hooks/redux-toolkit";

function LandingpageModule() {
  const dispatch = useAppDispatch();

  const ref = useRef(null);
  useEffect(() => {
    dispatch(actionLogin(resFirebase?.user));
    dispatch(actionSetIsAuth(true));
  }, []);
  return (
    <section className="w-full" id="home">
      <div className="mx-auto max-w-[1400px] overflow-hidden">
        <motion.div
          ref={ref}
          id="#"
          className="container relative flex flex-col items-center pt-48"
        >
          <motion.div className="flex flex-col items-center">
            <motion.div style={{}} className="flex flex-col items-center">
              <h3 className="mb-3 text-center font-title text-3xl font-bold leading-tight sm:mb-4 sm:w-[500px] sm:text-4xl md:mb-5 md:w-[650px] md:text-5xl md:leading-tight lg:mb-8 lg:w-[815px] lg:text-6xl lg:leading-tight xl:w-[1024px] xl:text-7xl xl:leading-tight">
                <div>
                  <strong className="text-primary">Kết nối</strong> tri thức
                </div>
                <div>
                  <strong className="text-primary"> Chinh phục</strong> thử
                  thách
                </div>
              </h3>
              <p className="mb-3 w-2/3 text-center text-xs font-medium sm:mb-4 sm:text-base sm:leading-4 md:mb-5 md:w-1/2 md:text-lg md:leading-6 lg:mb-8 lg:text-xl lg:leading-7 xl:leading-8">
                Study Space - Môi trường nơi bạn có thể kết nối và tham gia vào
                các phòng học để học cùng tất cả mọi người trên thế giới với
              </p>
            </motion.div>
            <div className="flex gap-2 md:gap-3 lg:gap-5">
              <Link href={"/study-area"}>
                <Button variant="outline" className="flex gap-1" haveOverlay>
                  <p className="text-xs md:text-base">Phòng học</p>
                  <ButtonArrow />
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default LandingpageModule;
