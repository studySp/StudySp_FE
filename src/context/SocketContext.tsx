"use client";
import { useAppSelector } from "@/hooks/redux-toolkit";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { io, Socket } from "socket.io-client";
interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
  roomsOnlines: { [key: string]: IRoomSocket };
}
interface IRoomSocket {
  title: string;
  author: string;
  isPrivate: boolean;
  allowCamera: boolean;
  allowMic: boolean;
  hasPassword: boolean;
  password: string;
  participants: string[];
  tag: string;
}
const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
  roomsOnlines: {},
});

export function useSocket(): SocketContextType {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
}

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const { userInfo } = useAppSelector((state) => state.auth);
  const [roomsOnlines, setRoomsOnlines] = useState<{
    [key: string]: IRoomSocket;
  }>({});

  useEffect(() => {
    if (!userInfo) return;
    // Kết nối tới server socket (thay đổi URL cho phù hợp)
    const socketInstance = io("http://localhost:6060", {
      query: {
        userId: userInfo.user._id,
      },
    });

    setSocket(socketInstance);
    socketInstance.on("getRoomOnlineUsers", async (data: any) => {
      console.log("getRoomOnlineUsers", data);
      setRoomsOnlines(data);
    });
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socketInstance.on("connect", onConnect);
    socketInstance.on("disconnect", onDisconnect);

    // Kết nối khi component mount
    socketInstance.connect();

    return () => {
      // Ngắt kết nối khi component unmount
      socketInstance.disconnect();
      socketInstance.off("connect", onConnect);
      socketInstance.off("disconnect", onDisconnect);
    };
  }, [userInfo]);

  const contextValue = useMemo(
    () => ({ socket, isConnected, roomsOnlines }),
    [socket, isConnected, roomsOnlines],
  );
  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  );
};
