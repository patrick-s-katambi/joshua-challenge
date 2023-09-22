import React from "react";
import { Link } from "react-router-dom";

export const Card: React.FC<{ label: string; description: string; path: string }> = function (props) {
    return (
        <Link to={props.path}>
            <div>
                <div className="w-[100px] rounded-md h-[120px] uppercase bg-gray-600 text-white flex items-center justify-center">
                    {props.label}
                </div>
                <p className="text-xs">{props.description}</p>
            </div>
        </Link>
    );
};
