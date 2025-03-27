"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import TopNavbar from "@/components/layouts/Navbar/TopNavbar";
import RightSidebar from "@/components/layouts/Navbar/RightBar";
import LogViewer from "@/components/layouts/LogViewer/LogViewer";
import ManageUser from "@/components/layouts/ManageUser/ManageUser";
import ManageRoom from "@/components/layouts/ManageRoom/ManageRoom";
import ManagePolicySecurity from "@/components/layouts/ManagePolicy/ManagePolicy";
import HandleReport from "@/components/layouts/Report/ReportHandle";

const HomePageAdmin = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [activeFeature, setActiveFeature] = useState<string>("viewLog");

    useEffect(() => {
        const path = pathname.replace("/features/", "") || "viewLog";
        setActiveFeature(path);
    }, [pathname]);

    const handleFeatureChange = (feature: string) => {
        setActiveFeature(feature);
        window.history.pushState(null, "", `/features/${feature}`);
    };

    const renderFeature = () => {
        switch (activeFeature) {
            case "viewLog":
                return <LogViewer />;
            case "manageUser":
                return <ManageUser />;
            case "manageRoom":
                return <ManageRoom />;
            case "managePolicySecurity":
                return <ManagePolicySecurity />;
            case "handleReport":
                return <HandleReport />;
            default:
                return <p className="text-gray-500 text-center">Chọn một chức năng từ menu</p>;
        }
    };

    return (
        <div className="h-screen flex flex-col">
            <TopNavbar />
            <div className="flex flex-grow">
                <RightSidebar onFeatureChange={handleFeatureChange} />
                <div className="flex-grow p-6 bg-gray-100">{renderFeature()}</div>
            </div>
        </div>
    );
};

export default HomePageAdmin;