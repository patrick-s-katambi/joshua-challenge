import React from "react";

export const SubHeader: React.FC<{ title: string }> = function ({ title }) {
    return (
        <div className="px-4 w-full bg-gray-700 text-white py-3">
            <p className="">{title}</p>
        </div>
    );
};
