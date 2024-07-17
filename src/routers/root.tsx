import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PrivateRoute from "./private";
import PublicRoute from "./public";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import ErrorPage from "@/pages/Error";
import { MainHookPage, UseDebounceValuePage, UseIntersectionObserverPage } from '@/pages/Hooks';

const rootRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={<ErrorPage />}>
            <Route path="/" element={<LoginPage />}/>
            <Route path="hooks" element={<PrivateRoute />}>
                <Route index element={<MainHookPage />}/>
                <Route path="use-debounce-value" element={<UseDebounceValuePage />}/>
                <Route path="use-intersection-observer" element={<UseIntersectionObserverPage />}/>
            </Route>
        </Route>
    )
);

export default rootRouter;