import {useEffect, useState} from 'react';

const useScrollEnd = () => {
    const [isScrollEnd, setScrollEnd] = useState(false);

    const handleScroll = () => {
        setScrollEnd(false)
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    
        if (bottom) {
          setScrollEnd(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return {isScrollEnd};
}

export default useScrollEnd;