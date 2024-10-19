// import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import rootRouter from './routers/root';
// import useAuthStore from './states/auth';
// import { getAuthSession } from './utils/session';
import './global.css';
// import LoginPage from './pages/login/login';

function App() {
  // const { setIsLogin } = useAuthStore();

  // useEffect(() => {
  //   const value = getAuthSession();
  //   setIsLogin(value);
  // }, [])

  return <RouterProvider router={rootRouter}/>

  // return <LoginPage />
}

export default App
