"use client";
import { useState, useEffect } from "react";

interface User {
    _id: string;
    username: string;
    email: string;
    role: string;
    status: boolean;
}

const ManageUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [editedUser, setEditedUser] = useState<Partial<User>>({});

    useEffect(() => {
        fetch("http://localhost:6060/api/v1/admin/userList")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch(() => setError("Lỗi khi tải danh sách người dùng"));
    }, []);

    const handleEditClick = (user: User) => {
        if (user.role === "admin" || user.role === "moderator") return; 
        setSelectedUser(user);
        setEditedUser(user);
    };

    const handleUpdateUser = () => {
        if (!selectedUser) return;

        fetch(`http://localhost:6060/api/v1/admin/user/${selectedUser._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedUser),
        })
            .then((res) => res.json())
            .then((updatedUser) => {
                setUsers(users.map((user) => (user._id === selectedUser._id ? updatedUser : user)));
                setSelectedUser(null);
            })
            .catch(() => setError("Lỗi khi cập nhật người dùng"));
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quản lý người dùng</h2>
            {error && <p className="text-red-600">{error}</p>}
            <table className="w-full bg-white shadow-md rounded-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-3 text-left">Tên</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">Vai trò</th>
                        <th className="p-3 text-left">Trạng thái</th>
                        <th className="p-3 text-left">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id} className="border-b">
                            <td className="p-3">{user.username}</td>
                            <td className="p-3">{user.email}</td>
                            <td className="p-3">{user.role}</td>
                            <td className="p-3">
                                <span className={user.status ? "text-green-600" : "text-red-600"}>
                                    {user.status ? "Hoạt động" : "Bị khóa"}
                                </span>
                            </td>
                            <td className="p-3 flex space-x-2">
                                {user.role !== "admin" && user.role !== "moderator" && (
                                    <>
                                        <button
                                            onClick={() => handleEditClick(user)}
                                            className="px-3 py-1 rounded bg-blue-500 text-white">
                                            Edit
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedUser && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-xl font-bold mb-4">Chỉnh sửa người dùng</h3>
                        <input
                            type="text"
                            value={editedUser.username || ""}
                            onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
                            className="w-full p-2 border rounded mb-3"
                            placeholder="Tên người dùng"
                        />
                        <input
                            type="email"
                            value={editedUser.email || ""}
                            onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                            className="w-full p-2 border rounded mb-3"
                            placeholder="Email"
                        />
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setSelectedUser(null)}
                                className="px-4 py-2 bg-gray-300 rounded">
                                Hủy
                            </button>
                            <button
                                onClick={handleUpdateUser}
                                className="px-4 py-2 bg-green-500 text-white rounded">
                                Cập nhật
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageUser;
