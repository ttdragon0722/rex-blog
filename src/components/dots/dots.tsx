
import React, { useEffect, useRef, useState } from "react";
import Dot from "./util/dot";
import { v4 } from "uuid";

import type { DotsProp } from "./dots-interface";

const Dots: React.FC<DotsProp> = ({
        gap, gapX, gapY, 
        className, style, color, dotClass,
        offsetX = "0px", offsetY = "0px", accX = "0px", accY = "0px"
    }) => {
    const dotsRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>();
    const [height, setHeight] = useState<number>();

    useEffect(() => {
        const currentRef = dotsRef.current;
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                setWidth(width);
                setHeight(height);
            }
        });

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const generateDots = (w: number, h: number) => {
        const dots = [];
        const dotWidth = parseInt(gapX ? gapX : gap);
        const dotHeight = parseInt(gapY ? gapY : gap);

        const containerWidth = w;
        const containerHeight = h;

        const rows = Math.floor(containerHeight / dotHeight);
        const columns = Math.floor(containerWidth / dotWidth);

        let addX = 0;
        let addY = 0;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                const x = parseInt(offsetX) + addX + col * dotWidth + "px";
                const y = parseInt(offsetY) + addY + row * dotHeight + "px";
                dots.push(<Dot key={v4()} x={x} y={y} color={color} dotClass={dotClass} />);
                addX -= parseInt(accX);
                addY -= parseInt(accY);
            }
            addX = 0;
            addY = 0;
        }

        return dots;

    };

    return <div ref={dotsRef} style={{ ...style }} className={`${className}`}>
        {width && height && generateDots(width, height)}
    </div>
}


export default Dots;