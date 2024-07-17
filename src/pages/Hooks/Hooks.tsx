import { Link } from "react-router-dom";

const HooksPage = () => {
    return <div>
        <h1>Hook main page</h1>
        <Link
            className="block" 
            to={'use-debounce-value'}
        >
            useDebounceValue
        </Link>
        <Link
            className="block" 
            to={'use-intersection-observer'}
        >
            useIntersectionObserver
        </Link>
    </div>
};

export default HooksPage;