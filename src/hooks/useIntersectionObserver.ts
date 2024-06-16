import {RefObject, useEffect, useState} from "react";

const useIntersectionObserver = (componentRef: RefObject<HTMLElement>) => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

    useEffect(() => {
        if(componentRef.current){
            const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting))
            observer.observe(componentRef.current);

            return () => observer.disconnect();
        };
    }, [componentRef])

    return isIntersecting;
}

export default useIntersectionObserver;