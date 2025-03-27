const TopNavbar = () => {
    return (
        <div className="w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
                <span className="font-semibold">👤 Admin Name</span>
                <button className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition">
                    🔒 Logout
                </button>
            </div>
        </div>
    );
};

export default TopNavbar;
