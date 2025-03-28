"use client";
import { useState, useEffect } from "react";
import Notification from "@/components/Notification/Notification";

interface Room {
    _id: string;
    title: string;
    isPrivate: boolean;
    allowCamera: boolean;
    allowMic: boolean;
    hasPassword: boolean;
    password: string;
}

const ManageRoom = () => {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [error, setError] = useState("");
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
    const [notification, setNotification] = useState<{ message: string; type?: "success" | "error" } | null>(null);
    const [updatedRoom, setUpdatedRoom] = useState<Partial<Room>>({});

    useEffect(() => {
        fetch("http://localhost:6061/api/v1/admin/roomList")
            .then(res => res.json())
            .then(data => setRooms(data))
            .catch(() => setError("Lỗi khi tải danh sách phòng"));
    }, []);

    const updateRoom = (id: string, updatedData: Partial<Room>) => {
        fetch(`http://localhost:6061/api/v1/admin/room/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
        })
            .then(res => res.json())
            .then(updatedData => {
                setRooms(rooms.map(room => (room._id === id ? updatedData : room)));
                setSelectedRoom(null);
                setNotification({ message: "Lưu thành công!", type: "success" });
            })
            .catch(() => setError("Lỗi khi cập nhật phòng"));
    };

    const handleEditClick = (room: Room) => {
        setSelectedRoom(room);
        setUpdatedRoom(room);
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quản lý Phòng</h2>
            {error && <p className="text-red-600">{error}</p>}
            <table className="w-full bg-white shadow-md rounded-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-3 text-left">Tên Phòng</th>
                        <th className="p-3 text-left">Riêng tư</th>
                        <th className="p-3 text-left">Camera</th>
                        <th className="p-3 text-left">Mic</th>
                        <th className="p-3 text-left">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map(room => (
                        <tr key={room._id} className="border-b">
                            <td className="p-3">
                                <button 
                                    onClick={() => handleEditClick(room)}
                                    className="text-blue-500 underline"
                                >
                                    {room.title}
                                </button>
                            </td>
                            <td className="p-3">
                                <input
                                    type="checkbox"
                                    checked={room.isPrivate}
                                    onChange={() =>
                                        updateRoom(room._id, { isPrivate: !room.isPrivate })
                                    }
                                />
                            </td>
                            <td className="p-3">
                                <input
                                    type="checkbox"
                                    checked={room.allowCamera}
                                    onChange={() =>
                                        updateRoom(room._id, { allowCamera: !room.allowCamera })
                                    }
                                />
                            </td>
                            <td className="p-3">
                                <input
                                    type="checkbox"
                                    checked={room.allowMic}
                                    onChange={() =>
                                        updateRoom(room._id, { allowMic: !room.allowMic })
                                    }
                                />
                            </td>
                            <td className="p-3">
                                <button
                                    onClick={() => handleEditClick(room)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                >
                                    Chỉnh sửa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedRoom && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-xl font-bold mb-4">Chỉnh sửa phòng</h3>
                        <label className="block mb-2">Tên phòng:</label>
                        <input
                            type="text"
                            value={updatedRoom.title || ""}
                            onChange={(e) => setUpdatedRoom({ ...updatedRoom, title: e.target.value })}
                            className="border p-2 w-full rounded mb-3"
                        />
                        
                        <label className="block mb-2">
                            <input
                                type="checkbox"
                                checked={updatedRoom.isPrivate || false}
                                onChange={() =>
                                    setUpdatedRoom({ ...updatedRoom, isPrivate: !updatedRoom.isPrivate })
                                }
                            />
                            <span className="ml-2">Phòng riêng tư</span>
                        </label>

                        <label className="block mb-2">
                            <input
                                type="checkbox"
                                checked={updatedRoom.allowCamera || false}
                                onChange={() =>
                                    setUpdatedRoom({ ...updatedRoom, allowCamera: !updatedRoom.allowCamera })
                                }
                            />
                            <span className="ml-2">Cho phép Camera</span>
                        </label>

                        <label className="block mb-2">
                            <input
                                type="checkbox"
                                checked={updatedRoom.allowMic || false}
                                onChange={() =>
                                    setUpdatedRoom({ ...updatedRoom, allowMic: !updatedRoom.allowMic })
                                }
                            />
                            <span className="ml-2">Cho phép Mic</span>
                        </label>

                        <label className="block mb-2">
                            <input
                                type="checkbox"
                                checked={updatedRoom.hasPassword || false}
                                onChange={() =>
                                    setUpdatedRoom({ ...updatedRoom, hasPassword: !updatedRoom.hasPassword })
                                }
                            />
                            <span className="ml-2">Bảo vệ bằng mật khẩu</span>
                        </label>

                        {updatedRoom.hasPassword && (
                            <input
                                type="text"
                                value={updatedRoom.password || ""}
                                onChange={(e) =>
                                    setUpdatedRoom({ ...updatedRoom, password: e.target.value })
                                }
                                className="border p-2 w-full rounded mb-3"
                            />
                        )}

                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => updateRoom(selectedRoom._id, updatedRoom)}
                                className="bg-green-500 text-white px-3 py-2 rounded"
                            >
                                Cập nhật
                            </button>
                            <button
                                onClick={() => setSelectedRoom(null)}
                                className="bg-gray-500 text-white px-3 py-2 rounded"
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {notification && (
                <Notification message={notification.message} type={notification.type} />
            )}
        </div>
    );
};

export default ManageRoom;
