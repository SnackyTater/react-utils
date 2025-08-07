import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => navigate('/login');

    return <div>LandingPage
        <button onClick={handleLogin}>login</button>
    </div>
};

export default LandingPage;