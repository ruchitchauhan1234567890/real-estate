import React from "react";

export const NavBar = () => {

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  console.log(loggedUser)

  return (
    <div className="h-12 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">
        Welcome back, {loggedUser.name}
      </h1>

      <div className="flex items-center gap-3">
        <div className=" w-8 text-center rounded-3xl  bg-amber-600 ">
            {loggedUser.name[0]}
        </div>
        <span className="font-medium">Admin</span>
      </div>
    </div>
  );
};
