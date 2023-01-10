import {useEffect, useState} from 'react';

const useScrollToTop = () => {
    const [isScrollToTop, setScrollToTop] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;

        if (position > 300) {
            setScrollToTop(true);
        } else if (position < 300) {
            setScrollToTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return {isScrollToTop};
}

export default useScrollToTop;