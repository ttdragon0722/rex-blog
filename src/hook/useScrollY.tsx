import { useEffect, useState } from "react"

const useScrollY = () => {
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const posY = window.scrollY || document.documentElement.scrollTop; // Get the current scroll position
            setScrollY(posY); // Update scrollY state
        };

        // Add event listener to listen for scroll events
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array to ensure effect runs only once

    return scrollY; // Return the current scrollY position 
}

export default useScrollY;