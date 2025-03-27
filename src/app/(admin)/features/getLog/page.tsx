"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ViewLogRedirect = () => {
    const router = useRouter();

    useEffect(() => {
        // Chuyển hướng đến dashboard kèm query params
        router.push("/dashboard?feature=viewLog");
    }, []);

    return null; // Không cần render gì cả
};

export default ViewLogRedirect;