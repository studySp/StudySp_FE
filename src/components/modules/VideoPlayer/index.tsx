import { useEffect, useRef, useState } from "react";
export interface GlobalOptions {
  isPrivate: boolean;
  allowCamera: boolean;
  allowMic: boolean;
  hasPassword: boolean;
  password: string;
}
interface VideoPlayerProps {
  stream: MediaStream;
  showControls?: boolean;
  globalOptions: GlobalOptions;
  onMicToggle?: (isMuted: boolean) => void;
  onVideoToggle?: (isDisabled: boolean) => void;
}

export const VideoPlayer = ({
  stream,
  showControls = true,
  globalOptions = {
    isPrivate: false,
    allowCamera: true,
    allowMic: true,
    hasPassword: false,
    password: "",
  },
  onMicToggle,
  onVideoToggle,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMicMuted, setIsMicMuted] = useState(true);
  const [isVideoDisabled, setIsVideoDisabled] = useState(
    !globalOptions.allowCamera,
  );

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
    if (isMicMuted) {
      stream.getAudioTracks().forEach((track) => {
        track.enabled = false; // Tắt âm thanh
      });
    }
    if (isVideoDisabled) {
      stream.getVideoTracks().forEach((track) => {
        track.enabled = false; // Tắt video
      });
    }
    return () => {
      if (stream) {
        // Dừng tất cả các track trong stream
        stream.getTracks().forEach((track) => {
          track.stop(); // Dừng track
          stream.removeTrack(track); // Xóa track khỏi stream
        });
      }

      // Xóa reference đến stream trong video element
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [stream]);

  const toggleMic = () => {
    if (stream) {
      if (!globalOptions.allowMic) {
        alert("Microphone is disabled in global options.");
        return;
      }
      const newState = !isMicMuted;
      stream.getAudioTracks().forEach((track) => {
        track.enabled = !newState; // Ngược lại vì isMicMuted thể hiện trạng thái mute
      });
      setIsMicMuted(newState);
      onMicToggle?.(newState);
    }
  };

  const toggleVideo = () => {
    if (stream) {
      if (!globalOptions.allowCamera) {
        alert("Camera is disabled in global options.");
        return;
      }
      const newState = !isVideoDisabled;
      stream.getVideoTracks().forEach((track) => {
        track.enabled = !newState; // Ngược lại vì isVideoDisabled thể hiện trạng thái tắt
      });
      setIsVideoDisabled(newState);
      onVideoToggle?.(newState);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <video
        ref={videoRef}
        autoPlay
        muted={false}
        playsInline
        className="h-full w-full rounded-lg object-cover"
      />

      {showControls && (
        <div className="absolute bottom-[-10%] right-[30%] z-[1] flex justify-between gap-2">
          <button
            onClick={toggleMic}
            className={`rounded-full p-2 ${
              isMicMuted ? "bg-red-500" : "bg-gray-200"
            }`}
            aria-label={isMicMuted ? "Unmute" : "Mute"}
          >
            {isMicMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          <button
            onClick={toggleVideo}
            className={`rounded-full p-2 ${
              isVideoDisabled ? "bg-red-500" : "bg-gray-200"
            }`}
            aria-label={isVideoDisabled ? "Enable video" : "Disable video"}
          >
            {isVideoDisabled ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                <path stroke="currentColor" strokeWidth="2" d="M1 1l18 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
