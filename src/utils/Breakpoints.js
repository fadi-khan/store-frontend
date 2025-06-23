import {useEffect, useState} from "react";


export const screenSize = {
    sm:  640,
    md:  768,
    lg:  1024,
    xl:  1280,
    '2xl': 1536,
};
export function useBreakpoint() {
    const [bp, setBp] = useState(1024);

    useEffect(() => {
        function onResize() {
            const w = window.innerWidth;
            if      (w >= screenSize['2xl']) setBp(screenSize["2xl"]);
            else if (w >= screenSize.xl)    setBp(screenSize.xl);
            else if (w >= screenSize.lg)   setBp(screenSize.lg);
            else if (w >= screenSize.md)    setBp(screenSize.md);
            else                                    setBp(screenSize.sm);
        }

        window.addEventListener('resize', onResize);
        onResize(); // init
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return bp;
}