import { create } from 'zustand';
import { AuthInfo } from '@/types/auth';

type AuthStore = {
    isLogin: boolean;
    setIsLogin: (value: boolean) => void;
    loginInfo: AuthInfo | undefined;
    setLoginInfo: (value: AuthInfo) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin: boolean) => set(() => ({isLogin})),
  loginInfo: undefined,
  setLoginInfo: (loginInfo: any) => set(() => ({loginInfo}))
}));

export default useAuthStore;