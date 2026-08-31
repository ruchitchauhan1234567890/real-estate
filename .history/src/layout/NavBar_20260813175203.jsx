import React from "react";

export const NavBar = () => {

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  console.log(loggedUser)

  return (
    <div className="h-12 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">
        Welcome back, {loggedUser.name}
      </h1>

      <div className="flex items-center  gap-3">
        <div className=" font-bold text-center rounded-full bg-gray-300 ">
            <img src={loggedUser.photo} className="w-9 h-9 rounded-full"  />
        </div>
        <div className="flex flex-col">
        <span>{loggedUser.name}</span>
        <span className="text-[10px]">{loggedUser.isAdmin ? "Admin" : loggedUser.role }</span>
        </div>
      </div>
    </div>
  );
};
