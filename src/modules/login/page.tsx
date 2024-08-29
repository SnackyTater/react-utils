import AuthService from './services/auth-service';

const LoginPage = () => {
    const handleLogin = async() => {
        const res = await AuthService.login({
            username: 'abc',
            password: '123'
        });
        console.log('res', res);
    };

    const handleTest = () => {
        console.log("key")
    }

    return <div style={{padding: 20}}>
        <p>login page</p>
        <div onClick={handleLogin}>login button</div>
        <button onClick={handleTest}>test API</button>
    </div>
};

export default LoginPage;