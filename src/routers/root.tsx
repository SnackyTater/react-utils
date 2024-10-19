import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PrivateRoute from "./private";
// import LoginPage from '@/modules/login/page';
import ErrorPage from "@/pages/Error";
import LandingPage from "@/pages/Landing";

const rootRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={<ErrorPage />}>
            {/* <Route path="/" element={<LoginPage />}/> */}
            <Route path="/" element={<LandingPage />} />
            <Route path="hooks" element={<PrivateRoute />}>
            </Route>
            
        </Route>
    )
);

export default rootRouter;