import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@/states/auth";

const PublicRoute = () => {
    const {isLogin} = useAuthStore();

    if(isLogin) return <Navigate to='/home' replace/>

    return <Outlet />
};

export default PublicRoute;