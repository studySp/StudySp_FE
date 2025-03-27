import React from "react";

const RightSidebar = ({ onFeatureChange }: { onFeatureChange: (feature: string) => void }) => {
    const menuItems = [
        { label: "View System Log", feature: "viewLog" },
        { label: "Manage User", feature: "manageUser" },
        { label: "Manage Room", feature: "manageRoom" },
        { label: "Manage Policy and Security", feature: "managePolicySecurity" },
        { label: "Handle Report", feature: "handleReport" },
    ];

    return (
        <div className="w-60 bg-gray-800 text-white p-4 space-y-2">
            {menuItems.map((item) => (
                <button
                    key={item.feature}
                    onClick={() => onFeatureChange(item.feature)}
                    className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700 transition"
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default RightSidebar;
