import LoginPage from "@/pages/Login";
import { MainHookPage, useDebounceValuePage, useIntersectionObserverPage } from '@pages/Hooks';

const routerConfig = [
    {
        path: '/',
        private: false,
        element: <LoginPage />
    },
    {
        path: '/hooks',
        private: true,
        children: [
            { index: true, element: MainHookPage },
            { path: '/use-debounce-value', element: useDebounceValuePage },
            { path: '/use-intersection-observer', element: useIntersectionObserverPage },
        ]
    },
]

export default routerConfig;