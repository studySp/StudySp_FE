"use client";
import React, { useEffect } from "react";

import { cardsData } from "@/data/study-area";

import Card, { CardType } from "./card";
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
              id={index}
              imgSrc={
                "https://wallpapers.com/images/hd/chill-anime-cloudy-sky-eif0wrbsj7tavmd0.jpg"
              }
              title={room.title}
              authorName={room.author}
              online={room.participants.length}
              isPrivate={room.isPrivate}
              tag={room.tag}
            />
          );
        })}

        {cardsData.map((card: CardType) => (
          <Card
            key={card.id}
            id={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            authorName={card.authorName}
            online={card.online}
            isPrivate={card.isPrivate}
            tag={card.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
