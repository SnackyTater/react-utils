import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    console.log(error);

    return <div>Error Page here</div>
};

export default ErrorPage;