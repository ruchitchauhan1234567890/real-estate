import React from "react";
import { Outlet } from "react-router-dom";
import {SideBar} from "./SideBar";
import {NavBar } from "./NavBar";

export const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="flex flex-col flex-1">
                <NavBar />
                <main className="flex-1 p-5 bg-gray-100 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

