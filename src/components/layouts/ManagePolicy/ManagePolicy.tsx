"use client";
import { useState, useEffect } from "react";
import Notification from "@/components/Notification/Notification"; 

const ManagePolicySecurity = () => {
    const [policy, setPolicy] = useState<string>("");
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState<string>("");
    const [notification, setNotification] = useState<{ message: string; type?: "success" | "error" } | null>(null);

    useEffect(() => {
        fetch("http://localhost:6061/api/v1/admin/policy")
            .then((res) => res.json())
            .then((data) => setPolicy(data.policy || ""))
            .catch(() => setError("Lỗi khi tải chính sách"));
    }, []);

    const showNotification = (message: string, type: "success" | "error") => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const savePolicy = () => {
        fetch("http://localhost:6061/api/v1/admin/policy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ policy }),
        })
            .then(() => {
                setIsEditing(false);
                showNotification("Lưu chính sách thành công!", "success");
            })
            .catch(() => showNotification("Lỗi khi lưu chính sách", "error"));
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
            <Notification message={notification?.message || ""} type={notification?.type} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Policy and Security</h2>
                <div className="flex justify-end mt-4 gap-3">
                    {isEditing ? (
                        <button onClick={savePolicy} className="px-4 py-2 bg-green-500 text-white rounded-md">
                            Save
                        </button>
                    ) : (
                        <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                            Edit
                        </button>
                    )}
                </div>
            </div>

            {error ? (
                <p className="text-red-600">{error}</p>
            ) : (
                <>
                    {isEditing ? (
                        <textarea
                            className="w-full h-64 p-2 border rounded-md"
                            value={policy}
                            onChange={(e) => setPolicy(e.target.value)}
                        />
                    ) : (
                        <pre className="bg-gray-100 p-4 border rounded-md overflow-auto">{policy}</pre>
                    )}
                </>
            )}
        </div>
    );
};

export default ManagePolicySecurity;
