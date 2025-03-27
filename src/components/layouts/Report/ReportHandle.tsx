"use client";
import { useState, useEffect } from "react";

interface Report {
    _id: string;
    userReport: { _id: string; username: string; email: string } | null;
    userReported?: { _id: string; username: string; email: string } | null;
    title: string;
    detail: string;
    status: "Open" | "Review" | "Resolve" | "Cancel";
    result?: string;
}

const HandleReport = () => {
    const [reports, setReports] = useState<Report[]>([]);
    const [error, setError] = useState("");
    const [selectedReport, setSelectedReport] = useState<Report | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<Report["status"]>("Open");
    const [resultText, setResultText] = useState("");

    useEffect(() => {
        fetch("http://localhost:6060/api/v1/admin/reportList")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setReports(data);
                } else {
                    setError("Dữ liệu không hợp lệ");
                }
            })
            .catch(() => setError("Lỗi khi tải danh sách báo cáo"));
    }, []);

    const updateReportStatus = (id: string) => {
        fetch(`http://localhost:6060/api/v1/admin/report/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: selectedStatus, result: resultText }),
        })
            .then(res => res.json())
            .then(() => {
                setReports(reports.map(report =>
                    report._id === id ? { ...report, status: selectedStatus, result: resultText } : report
                ));
                setSelectedReport(null);
                setResultText("");
            })
            .catch(() => setError("Lỗi khi cập nhật trạng thái báo cáo"));
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quản lý Báo Cáo</h2>
            {error && <p className="text-red-600">{error}</p>}
            <table className="w-full bg-white shadow-md rounded-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-3 text-left">Người Báo Cáo</th>
                        <th className="p-3 text-left">Người Bị Báo Cáo</th>
                        <th className="p-3 text-left">Tiêu Đề</th>
                        <th className="p-3 text-left">Trạng Thái</th>
                        <th className="p-3 text-left">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report => (
                        <tr key={report._id} className="border-b">
                            <td className="p-3">
                                <button 
                                    onClick={() => setSelectedReport(report)} 
                                    className="text-blue-500 underline">
                                    {report.userReport?.username || "Ẩn danh"}
                                </button>
                            </td>
                            <td className="p-3">{report.userReported?.username || "Hệ Thống"}</td>
                            <td className="p-3">{report.title}</td>
                            <td className="p-3">
                                <span className={`font-bold ${report.status === "Open" ? "text-red-500" : "text-green-500"}`}>
                                    {report.status}
                                </span>
                            </td>
                            <td className="p-3">
                                {report.status !== "Resolve" && report.status !== "Cancel" && (
                                    <button 
                                        onClick={() => {
                                            setSelectedReport(report);
                                            setSelectedStatus(report.status);
                                            setResultText(report.result || "");
                                        }}
                                        className="px-3 py-1 bg-blue-500 text-white rounded">
                                        Xử lý
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Popup xử lý báo cáo */}
            {selectedReport && (
                <div className="mt-4 p-4 bg-white shadow-md rounded">
                    <h3 className="font-bold text-lg">Chi tiết báo cáo</h3>
                    <p><strong>Người báo cáo:</strong> {selectedReport.userReport?.username || "Ẩn danh"}</p>
                    <p><strong>Tiêu đề:</strong> {selectedReport.title}</p>
                    <p><strong>Chi tiết:</strong> {selectedReport.detail}</p>
                    <p><strong>Trạng thái:</strong></p>
                    <select 
                        value={selectedStatus} 
                        onChange={e => setSelectedStatus(e.target.value as Report["status"])}
                        className="block w-full p-2 border rounded">
                        <option value="Open">Open</option>
                        <option value="Review">Review</option>
                        <option value="Resolve">Resolve</option>
                        <option value="Cancel">Cancel</option>
                    </select>

                    {/* Chỉ hiển thị textarea nếu chọn Resolve hoặc Cancel */}
                    {(selectedStatus === "Resolve" || selectedStatus === "Cancel") && (
                        <div className="mt-2">
                            <label className="block text-gray-700">Kết quả xử lý:</label>
                            <textarea 
                                value={resultText} 
                                onChange={e => setResultText(e.target.value)} 
                                className="w-full p-2 border rounded"
                                rows={3}
                                placeholder="Nhập kết quả xử lý..." />
                        </div>
                    )}

                    {/* Nút cập nhật */}
                    <div className="mt-4 flex justify-end">
                        <button 
                            onClick={() => updateReportStatus(selectedReport._id)}
                            className="px-4 py-2 bg-green-500 text-white rounded">
                            Cập nhật
                        </button>
                        <button 
                            onClick={() => setSelectedReport(null)}
                            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded">
                            Hủy
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HandleReport;
