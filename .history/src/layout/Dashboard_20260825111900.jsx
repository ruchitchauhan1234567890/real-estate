import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";

export const Dashboard = () => {
    return (
        <div className="flex w-full h-screen overflow-hidden">

            <SideBar />

            <div className="flex-1 min-w-0 flex flex-col overflow-hidden">

                <NavBar />

                <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden p-2 sm:p-3">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

