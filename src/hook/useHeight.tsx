import { useEffect, useState } from "react";

interface useHeightProp {
    ref: React.RefObject<HTMLElement>;
}

const useHeight = ({ ref }: useHeightProp) => {
    const [height, setHeight] = useState<number>(0);
    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.offsetHeight);
        }
    }, [ref, setHeight]);

    useEffect(() => {
        const currentRef = ref.current;
        const handleResize = () => {
            if (currentRef) {
                const { height } = currentRef.getBoundingClientRect();
                setHeight(height);
            }
        }
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const { height } = entry.contentRect;
                setHeight(height);
                console.log(height);
            }
        });

        if (currentRef) {
            observer.observe(currentRef);
            window.addEventListener("resize", handleResize);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
                window.removeEventListener('resize', handleResize);
            }
        }

    }, [ref, setHeight]);

    return height;
}

export default useHeight;