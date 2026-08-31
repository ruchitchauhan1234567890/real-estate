import React from "react";

export const NavBar = () => {
  return (
    <div className="h-10 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">
        Real Estate Management
      </h1>

      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-medium">Admin</span>
      </div>
    </div>
  );
};
