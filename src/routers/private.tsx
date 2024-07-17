import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@/states/auth";

const PrivateRoute = () => {
    const {isLogin} = useAuthStore();

    console.log('isLogin', isLogin)

    if(!isLogin) return <Navigate to='/' replace/>

    return <Outlet />
};

export default PrivateRoute;