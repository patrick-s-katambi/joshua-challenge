import React from "react";
import { Card, SubHeader } from "~/components";
import { routePaths } from "~/router";

export const Home: React.FC = function () {
    return (
        <div className="flex flex-col gap-4">
            <SubHeader title="Popular Titles" />

            <div className="px-4 flex items-center gap-4">
                <Card label="Movies" description="Popular Movies" path={routePaths.movies} />
                <Card label="Series" description="Popular Series" path={routePaths.series} />
            </div>
        </div>
    );
};
