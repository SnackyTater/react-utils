import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PrivateRoute from "./private";
// import LoginPage from '@/modules/login/page';
import ErrorPage from "@/pages/Error";
import LandingPage from "@/pages/Landing";
import SelectPage from "@/pages/Select";
import SecurityPage from "@/pages/Security";

const rootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}>
      {/* <Route path="/" element={<LoginPage />}/> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="select" element={<SelectPage />} />
      <Route path="hooks" element={<PrivateRoute />} />
      <Route path="security" element={<SecurityPage />} />
    </Route>
  )
);

export default rootRouter;
