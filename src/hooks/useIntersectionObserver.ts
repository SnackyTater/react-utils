import {RefObject, useEffect, useState} from "react";
const observerDefaultOption = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
}

const useIntersectionObserver = (componentRef: RefObject<HTMLElement>, options: IntersectionObserverInit = observerDefaultOption) => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), options);
        if(componentRef.current) observer.observe(componentRef.current);

        return () => observer.disconnect();
    }, [componentRef.current])

    return isIntersecting;
}

export default useIntersectionObserver;