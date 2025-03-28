"use client";

import { useState, useEffect } from "react";

const LogViewer = () => {
    const [logFiles, setLogFiles] = useState<string[]>([]);
    const [selectedFile, setSelectedFile] = useState<string>("");
    const [logEntries, setLogEntries] = useState<{ timestamp: string, level: string, message: string }[]>([]);
    const [error, setError] = useState<string>("");

    // Fetch danh sách file log khi component mount
    useEffect(() => {
        fetch("http://localhost:6061/api/v1/admin/logs")
            .then(res => res.json())
            .then(data => {
                if (data.files && Array.isArray(data.files)) {
                    setLogFiles(data.files);
                    setSelectedFile(data.files[0] || ""); // Chọn file đầu tiên nếu có
                } else {
                    setError("Không thể lấy danh sách file log!");
                }
            })
            .catch(err => setError(`Lỗi tải danh sách file: ${err.message}`));
    }, []);

    // Fetch dữ liệu log khi chọn file
    useEffect(() => {
        if (!selectedFile) return;
        fetch(`http://localhost:6061/api/v1/admin/logs/${selectedFile}`)
            .then(res => res.json())
            .then(data => {
                if (data.logs && Array.isArray(data.logs)) {
                    setLogEntries(data.logs);
                    setError("");
                } else {
                    setError("Dữ liệu log không hợp lệ!");
                    setLogEntries([]);
                }
            })
            .catch(err => {
                setError(`Lỗi tải log: ${err.message}`);
                setLogEntries([]);
            });
    }, [selectedFile]);

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">System Log</h2>

            {/* Chọn file log */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Chọn file log:</label>
                <select
                    value={selectedFile}
                    onChange={(e) => setSelectedFile(e.target.value)}
                    className="w-full p-2 border rounded bg-white shadow-sm"
                >
                    {logFiles.map((file, index) => (
                        <option key={index} value={file}>{file}</option>
                    ))}
                </select>
            </div>

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
                                    ${entry.level.trim() === "ERROR" ? "bg-red-500"
                                        : entry.level.trim() === "WARNING" ? "bg-yellow-500"
                                            : "bg-green-600"}`}>
                                    {entry.level.trim()}
                                </span>
                                <span className="text-gray-700">{entry.message}</span>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center py-5">📭 Không có dữ liệu log</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default LogViewer;
