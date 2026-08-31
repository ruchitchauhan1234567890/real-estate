import React from "react";

export const NavBar = () => {

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  return (
    <div className="
      h-12
      w-full
      bg-white
      border-b
      border-gray-200
      shadow-sm
      flex
      items-center
      justify-between
      px-5
    ">

      {/* Left */}
      <div>
        <h1 className="
          text-[13px]
          font-semibold
          text-gray-800
        ">
          Welcome back,{" "}
          <span className="text-blue-600">
            {loggedUser.name}
          </span>
        </h1>

        <p className="
          text-[9px]
          text-gray-400
          mt-0.5
        ">
          Here's what's happening with your CRM today.
        </p>
      </div>


      {/* Right - User */}
      <div className="
        flex
        items-center
        gap-2.5
        px-2
        py-1
        rounded-lg
        hover:bg-gray-50
        transition
        cursor-pointer
      ">

        {/* Profile Image */}
        <div className="
          w-7
          h-7
          rounded-full
          overflow-hidden
          border
          border-gray-200
          bg-gray-100
          flex
          items-center
          justify-center
        ">
          {loggedUser.photo ? (
            <img
              src={loggedUser.photo}
              alt={loggedUser.name}
              className="
                w-full
                h-full
                object-cover
              "
            />
          ) : (
            <span className="
              text-[10px]
              font-semibold
              text-gray-600
            ">
              {loggedUser.name?.charAt(0)?.toUpperCase()}
            </span>
          )}
        </div>


        {/* User Details */}
        <div className="leading-tight">

          <p className="
            text-[11px]
            font-semibold
            text-gray-800
          ">
            {loggedUser.name}
          </p>

          <p className="
            text-[9px]
            text-gray-500
            mt-0.5
          ">
            {loggedUser.isAdmin
              ? "Admin"
              : loggedUser.role}
          </p>

        </div>


        {/* Status */}
        <span className="
          w-1.5
          h-1.5
          rounded-full
          bg-green-500
          ml-1
        " />

      </div>

    </div>
  );
};