import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import * as pages from "~/pages";
import { routePaths } from "./route-paths";
import { MainLayout } from "~/layouts";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={routePaths.home} element={<MainLayout />}>
                <Route index element={<pages.Home />} />
                <Route path={routePaths.movies} element={<pages.Movies />} />
                <Route path={routePaths.series} element={<pages.Series />} />
            </Route>
        </>
    )
);
