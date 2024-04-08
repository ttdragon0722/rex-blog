import React, { useEffect, useRef } from "react";
import Dot from "./util/dot";
import { v4 } from "uuid";

import type { DotsProp } from "./dots-interface";

const Dots: React.FC<DotsProp> = ({ className, style, gap, gapX, gapY, offsetX = "0px", offsetY = "0px",color }) => {
    const dotsRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (dotsRef.current) {
            console.log("width", dotsRef.current.offsetWidth);
            console.log("height", dotsRef.current.offsetHeight);
        }
    }, [dotsRef]);

    const generateDots = () => {
        if (dotsRef.current) {
            const dots = [];
            const dotWidth = parseInt(gapX ? gapX : gap);
            const dotHeight = parseInt(gapY ? gapY : gap);

            const containerWidth = dotsRef.current.offsetWidth;
            const containerHeight = dotsRef.current.offsetHeight;

            const rows = Math.floor(containerHeight / dotHeight);
            const columns = Math.floor(containerWidth / dotWidth);

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < columns; col++) {
                    const x = parseInt(offsetX) + col * dotWidth + "px";
                    const y = parseInt(offsetY) + row * dotHeight + "px";
                    dots.push(<Dot key={v4()} x={x} y={y} color={color} />);
                }
            }

            return dots;
        }
        return null;
    };

    return <div ref={dotsRef} style={{ ...style }} className={`${className}`}>
        {dotsRef && generateDots()}
    </div>
}


export default Dots;