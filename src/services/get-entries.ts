import axios from "axios";

export type entriesT = {
    total: number;
    entries: {
        title: string;
        description: string;
        programType: "series" | "movie";
        images: {
            "Poster Art": {
                url: string;
                width: number;
                height: number;
            };
        };
        releaseYear: number;
    }[];
};

export const getEntries = function () {
    const url = "https://raw.githubusercontent.com/amawalla/js-coding-challenge/master/feed/sample.json";
    return axios.get<entriesT>(url);
};
