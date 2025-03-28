import { useEffect, useRef, useState } from "react";
import Peer, { MediaConnection } from "peerjs";
import { GlobalOptions, VideoPlayer } from "../../VideoPlayer";
import { useSocket } from "@/context/SocketContext";
import { v4 as uuid } from "uuid";
import { useAppSelector } from "@/hooks/redux-toolkit";
import { usePathname } from "next/navigation";
import axios from "axios";
interface RoomProps {}

export const Room = ({}: RoomProps) => {
  const [initMediaStream, setInitMediaStream] = useState<boolean>(false);
  const [myStream, setMyStream] = useState<MediaStream | null>(null);
  const [peers, setPeers] = useState<Record<string, MediaStream>>({});
  const pathname = usePathname();
  const roomId = pathname.split("/")[2];
  const [globalOptions, setGlobalOptions] = useState<GlobalOptions>({
    isPrivate: false,
    allowCamera: true,
    allowMic: false,
    hasPassword: false,
    password: "",
  });
  const fetchRoomInfo = async () => {
    const res = await axios.get(`http://localhost:6061/api/v1/room/${roomId}`);
    setGlobalOptions(res.data);
  };
  const peersRef = useRef<Record<string, MediaConnection>>({});
  const { socket } = useSocket();
  const myPeerRef = useRef<Peer>();
  const videoGridRef = useRef<HTMLDivElement>(null);
  const handleStream = () => {
    if (initMediaStream || !socket) return;
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setMyStream(stream);
        setInitMediaStream(true);
        myPeerRef.current = new Peer({
          host: "/",
          port: 9000,
          path: "/peerjs",
        });

        myPeerRef.current.on("open", (id) => {
          socket?.emit("joinRoom", roomId, id);
        });

        myPeerRef.current.on("call", (call) => {
          console.log(`Incoming call from ${call.peer}`);

          call.answer(stream);
          call.on("stream", (userVideoStream) => {
            setPeers((prev) => ({ ...prev, [call.peer]: userVideoStream }));
          });
        });

        socket?.on("user-connected", (userId) => {
          console.log(`User connected: ${userId}`);

          const call = myPeerRef.current!.call(userId, stream);
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

    socket?.on("updateOptions", (options) => {
      setGlobalOptions({
        isPrivate: options.isPrivate,
        allowCamera: options.allowCamera,
        allowMic: options.allowMic,
        hasPassword: options.hasPassword,
        password: options.password,
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
  };
  useEffect(() => {
    fetchRoomInfo();
    handleStream();
    return () => {
      if (myStream) {
        myStream.getTracks().forEach((track) => {
          track.stop(); // Dừng tất cả các track của stream
          myStream.removeTrack(track); // Xóa track khỏi stream
        });
      }
      if (socket) {
        socket.off("user-connected");
        socket.off("user-disconnected");
        socket.off("updateOptions");
        socket.emit("user-disconnected", roomId, myPeerRef.current?.id);
      }

      if (myPeerRef.current) {
        myPeerRef.current.destroy();
      }

      peersRef.current = {};
      setPeers({});
    };
  }, [socket, roomId]);
  useEffect(() => {
    
  }, [myStream]);
  return (
    <div className="flex h-screen flex-col">
      <div className="flex-grow p-4">
        {myStream && (
          <div className="absolute bottom-4 right-4 z-[1] h-[30%] w-[20%]">
            <VideoPlayer
              stream={myStream}
              showControls
              globalOptions={globalOptions}
              authorName={"You"}
            />
          </div>
        )}
        <div
          ref={videoGridRef}
          className="absolute left-[35%] top-[15%] grid h-full grid-cols-1 gap-4 md:grid-cols-2"
        >
          {Object.entries(peers).map(([userId, stream]) => (
            <div
              key={userId}
              className="relative h-[25%] w-[200px] overflow-hidden rounded-lg bg-gray-800"
            >
              <VideoPlayer
                stream={stream}
                showControls={false}
                globalOptions={globalOptions}
                authorName={"Test"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
