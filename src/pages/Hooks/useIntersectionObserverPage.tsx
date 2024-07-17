import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const useIntersectionObserverHookPage = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isIntersecting = useIntersectionObserver(sectionRef);

    return <div>
        <div className="h-[100px] bg-[gray]" ref={sectionRef}>header</div>
        <div className="h-screen">
            isIntersecting: {`${isIntersecting}`}
        </div>
    </div>
};

export default useIntersectionObserverHookPage;