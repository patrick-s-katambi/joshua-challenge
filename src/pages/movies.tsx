import React from "react";
import { SubHeader } from "~/components";
import { useGetMovies } from "~/hooks";

export const Movies: React.FC = function () {
    const { data, loading } = useGetMovies();

    return (
        <div className="flex flex-col gap-4 mb-4 ">
            <SubHeader title="Popular Movies" />

            {loading ? (
                <p>loading ...</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 gap-2 px-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                        {data?.entries.map((movie) => (
                            <div className="border p-4 rounded-md flex flex-col gap-1">
                                <img
                                    src={movie.images["Poster Art"].url}
                                    alt={`${movie.title} poster`}
                                    className="grow rounded-md"
                                    onError={(e) => {
                                        // @ts-ignore
                                        e.target.src = "";
                                    }}
                                />
                                <p className="text-sm">
                                    {movie.title} ({movie.releaseYear})
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
