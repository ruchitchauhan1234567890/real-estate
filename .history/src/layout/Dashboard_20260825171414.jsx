import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";

export const Dashboard = () => {
    return (
        <div
            className="
                flex
                w-full
                h-screen
                overflow-hidden
                bg-white
                dark:bg-[#181824]
                transition-colors
                duration-200
            "
        >

            <SideBar />

            <div
                className="
                    flex-1
                    min-w-0
                    flex
                    flex-col
                    overflow-hidden
                    bg-white
                    dark:bg-[#181824]
                    transition-colors
                    duration-200
                "
            >

                <NavBar />

                <main
                    className="
                        flex-1
                        min-w-0
                        overflow-y-auto
                        overflow-x-hidden
                        p-2
                        sm:p-3
                        bg-white
                        dark:bg-[#181824]
                        transition-colors
                        duration-200
                    "
                >
                    <Outlet />
                </main>

            </div>

        </div>
    );
};