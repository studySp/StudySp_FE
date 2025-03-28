"use client";
import { useRouter } from "next/navigation";

const useLogout = () => {
    const router = useRouter();

    const logout = async () => {
        try {
            localStorage.removeItem("token"); 
            router.push("/");
        } catch (error) {
            console.error("Lỗi khi đăng xuất:", error);
        }
    };

    return logout;
};

export default useLogout;
