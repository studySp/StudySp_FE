"use client";
import { useState, useEffect } from "react";

interface NotificationProps {
    message: string;
    type?: "success" | "error"; 
}

const Notification: React.FC<NotificationProps> = ({ message, type = "success" }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);
            setTimeout(() => setVisible(false), 3000);
        }
    }, [message]);

    return (
        <div
            className={`fixed top-5 right-0 transform transition-transform duration-500 ${
                visible ? "translate-x-0" : "translate-x-full"
            } px-4 py-2 rounded-md shadow-md text-white ${
                type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
            style={{ minWidth: "200px", textAlign: "center" }}
        >
            {message}
        </div>
    );
};

export default Notification;
