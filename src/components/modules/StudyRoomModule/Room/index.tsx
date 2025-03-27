import { useEffect, useRef, useState } from "react";
import Peer, { MediaConnection } from "peerjs";
import { VideoPlayer } from "../../VideoPlayer";
import { useSocket } from "@/context/SocketContext";
import { v4 as uuid } from "uuid";
interface RoomProps {
  roomId: string;
}

export const Room = ({ roomId }: RoomProps) => {
  const [myStream, setMyStream] = useState<MediaStream | null>(null);
  const [peers, setPeers] = useState<Record<string, MediaStream>>({});
  const peersRef = useRef<Record<string, MediaConnection>>({});
  const { socket } = useSocket();
  const myPeerRef = useRef<Peer>();
  const videoGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!socket) return;
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setMyStream(stream);

        myPeerRef.current = new Peer({
          host: "/",
          port: 9000,
          path: "/peerjs",
        });

        myPeerRef.current.on("open", (id) => {
          socket.emit("joinRoom", roomId, id, (error: any) => {
            if (error) {
              console.error(error);
            }
          });
          socket.emit("test", "Hello from client");
        });

        myPeerRef.current.on("call", (call) => {
          call.answer(stream);
          call.on("stream", (userVideoStream) => {
            setPeers((prev) => ({ ...prev, [call.peer]: userVideoStream }));
          });
        });

        socket?.on("user-connected", (userId) => {
          console.log("User connected: ", userId);

          const call = myPeerRef.current?.call(userId, stream);
          if (call) {
            call.on("stream", (userVideoStream) => {
              setPeers((prev) => ({ ...prev, [userId]: userVideoStream }));
            });
            call.on("close", () => {
              setPeers((prev) => {
                const { [userId]: _, ...rest } = prev;
                return rest;
              });
            });
            peersRef.current[userId] = call;
          }
        });
      });

    socket?.on("user-disconnected", (userId) => {
      if (peersRef.current[userId]) {
        peersRef.current[userId].close();
      }
      setPeers((prev) => {
        const { [userId]: _, ...rest } = prev;
        return rest;
      });
    });

    return () => {
      if (myStream) {
        myStream.getTracks().forEach((track) => track.stop());
      }
      socket?.disconnect();
      if (myPeerRef.current) {
        myPeerRef.current.destroy();
      }
    };
  }, [roomId, socket]);

  return (
    <div className="flex h-screen flex-col">
      <div className="flex-grow p-4">
        {myStream && (
          <div className="absolute bottom-4 right-4 z-[1] h-[30%] w-[20%]">
            <VideoPlayer stream={myStream} isMuted showControls />
            <p className="p-2 text-center text-white">You</p>
          </div>
        )}
        <div
          ref={videoGridRef}
          className="absolute left-[30%] top-[15%] grid h-full grid-cols-1 gap-4 md:grid-cols-2"
        >
          {Object.entries(peers).map(([userId, stream]) => (
            <div
              key={userId}
              className="relative h-[25%] w-[200px] overflow-hidden rounded-lg bg-gray-800"
            >
              <VideoPlayer stream={stream} showControls={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
