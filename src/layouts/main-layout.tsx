import clsx from "clsx";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { routePaths } from "~/router";

type linkT = { label: string; path: string };

export const MainLayout: React.FC = function () {
    const links: linkT[] = [
        { label: "Home", path: routePaths.home },
        { label: "Movies", path: routePaths.movies },
        { label: "Series", path: routePaths.series },
    ];

    const linkMapper = function (link: linkT, linkIndex: number): React.ReactNode {
        return (
            <NavLink
                to={link.path}
                key={linkIndex}
                className={(props) => clsx("text-xs", props.isActive && "border-b border-b-white")}
            >
                {link.label}
            </NavLink>
        );
    };

    return (
        <div className="w-full">
            <nav className="w-full bg-blue-500 flex items-center justify-between gap-4 px-4 h-[50px] text-white">
                <h1>DEMO Streaming</h1>
                <ul className="flex items-center gap-4">{links.map(linkMapper)}</ul>
                <div className="flex items-center gap-4">
                    <button>Login</button>
                    <button className="bg-gray-700 px-4 py-1 rounded">Start your free trial</button>
                </div>
            </nav>

            <div className="min-h-[80vh]">
                <Outlet />
            </div>

            <footer className="h-[20vh] bg-gray-200 w-full p-4">
                <p>this is my footer</p>
            </footer>
        </div>
    );
};
