"use client";
import React from "react";
import ManageProfile from "@/components/modules/ManageFriend";

export default function FriendsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Quản lý hồ sơ</h1>
      <ManageProfile />
    </div>
  );
}
