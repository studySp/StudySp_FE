"use client"; 

import { useState, useEffect } from "react";

const LogViewer = () => {
    const [logEntries, setLogEntries] = useState<{ timestamp: string, level: string, message: string }[]>([]);
    const [file, setFile] = useState("log20240327.txt");
    const [error, setError] = useState<string>("");

    useEffect(() => {
        fetch(`/api/getLog?file=${file}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.logs && Array.isArray(data.logs)) {
                    setLogEntries(data.logs);
                    setError("");
                } else {
                    setError("Dữ liệu log không hợp lệ!");
                    setLogEntries([]);
                }
            })
            .catch((err) => {
                setError(`Lỗi tải log: ${err.message}`);
                setLogEntries([]);
            });
    }, [file]);    

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Log File: <span className="text-blue-600">{file}</span></h2>

            {error ? (
                <p className="text-red-600 bg-red-100 p-3 rounded-lg">{error}</p>
            ) : (
                <ul className="border bg-white shadow-inner rounded-lg p-3 h-80 overflow-y-auto custom-scrollbar">
                    {logEntries.length > 0 ? (
                        logEntries.map((entry, index) => (
                            <li 
                                key={index} 
                                className="p-3 border-b flex items-center gap-2 transition duration-200 hover:bg-gray-100 rounded-lg"
                            >
                                <span className="font-mono text-gray-600">{entry.timestamp}</span> 
                                <span className={`px-2 py-1 rounded font-bold text-white text-sm 
                                    ${entry.level === "ERROR" ? "bg-red-500" 
                                    : entry.level === "WARNING" ? "bg-yellow-500" 
                                    : "bg-green-600"}`}>
                                    {entry.level}
                                </span> 
                                <span className="text-gray-700">{entry.message}</span>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center py-5">Không có dữ liệu log</p>
                    )}
                </ul>
            )}

            <button 
                onClick={() => setFile("log20240328.txt")}
                className="mt-6 px-5 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:bg-blue-600 transition"
            >
                Xem log ngày khác
            </button>
        </div>
    );
};

export default LogViewer;
