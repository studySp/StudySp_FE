"use client";
import React, { useEffect } from "react";

import { cardsData, type ICard } from "@/data/study-area";

import Card from "./card";
import Toolbar from "./toolbar";
import { useSocket } from "@/context/SocketContext";
import { keys } from "lodash";

const Rooms: React.FC = () => {
  const { roomsOnlines } = useSocket();
  console.log("roomsOnlines2", roomsOnlines);

  return (
    <div className="flex w-full flex-col gap-6">
      <Toolbar />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {keys(roomsOnlines).map((key, index) => {
          const room = roomsOnlines[key];
          return (
            <Card
              key={key}
              id={key}
              imgSrc={
                "https://wallpapers.com/images/hd/chill-anime-cloudy-sky-eif0wrbsj7tavmd0.jpg"
              }
              title={room.title}
              authorName={room.author}
              online={room.participants.length}
              isPrivate={room.isPrivate}
              tag={room.tag}
              subTitle={""}
              participantsNo={0}
              type={"JOIN"}
            />
          );
        })}

        {cardsData.map((card: ICard) => (
          <Card
            key={card.id}
            id={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            authorName={card.authorName}
            online={card.online}
            isPrivate={card.isPrivate}
            tag={card.tag}
            subTitle={card.subTitle}
            participantsNo={card.participantsNo}
            type={card.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
