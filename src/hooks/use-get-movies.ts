import React from "react";
import { entriesT, getEntries } from "~/services";

export const useGetMovies = function () {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState<entriesT | undefined>(undefined);

    React.useEffect(() => {
        const call = async function () {
            setLoading(true);
            const response = await getEntries();
            setData((prev) => {
                prev = {
                    total: response.data.total,
                    entries: response.data.entries.filter((entry) => entry.programType === "movie"),
                };
                return prev;
            });
            setLoading(false);
        };

        call();
    }, []);

    return { loading, data };
};
