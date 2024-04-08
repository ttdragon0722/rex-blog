import React, { useEffect, useLayoutEffect, useState } from "react";
import type { MarqueeProp, marqueeTurn } from "./marquee-interface";
import MarqueeImage from "./util/marqueeImage";
import { v4 } from "uuid";

import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
gsap.registerPlugin(CustomEase);

import "./css/styles.css"
import { percent } from "./lib/percent";

CustomEase.create("marquee-ease", "M0,500C63,309,170.5,324,250,250,345.5,160,409,-0.5,500,0")

/**
 * at least need **3** picture.
 */
const Marquee: React.FC<MarqueeProp> = ({ className, style, images, speed, ease, offset = "0%", rounded }) => {
    const [nowPlaying, setNowPlaying] = useState(1);

    useLayoutEffect(() => {
        gsap.fromTo(".marquee-prev", { x: percent("0%", offset) }, {
            x: percent("-100%", offset), duration: speed, ease: "marquee-ease"
        });
        gsap.fromTo(".marquee-playing", { x: percent("100%", offset) }, {
            x: percent("0%", offset), duration: speed, ease: "marquee-ease"
        });
        gsap.fromTo(".marquee-next", {
            x: percent("198%", offset)
        }, {
            duration: speed, ease: "marquee-ease", x: percent("100%", offset), onComplete: () => {
                setNowPlaying(prev => {
                    if (nowPlaying + 1 >= images.length) {
                        return 0;
                    }
                    return prev + 1
                });
            }
        });
    }, [speed, ease, nowPlaying, images, offset]);

    return (
        <div style={{ ...style }} className={`${className} ${rounded ? rounded : ""} bg-gray-100/80 z-20`}>
            <div className={`absolute z-20 inset-2 overflow-hidden ${rounded ? rounded : ""}`}>
                {images.map((Image, ImageIdx) => {
                    let marqueeTurn: marqueeTurn = "";
                    // 判斷是否要設置為 "marquee-next"
                    if (nowPlaying + 1 >= images.length && ImageIdx === 0) {
                        marqueeTurn = "marquee-next";
                    }
                    if (nowPlaying === 0 && ImageIdx === images.length - 1) {
                        marqueeTurn = "marquee-prev";
                    }

                    // 根據條件設置 marqueeTurn
                    if (ImageIdx === nowPlaying) {
                        marqueeTurn = "marquee-playing";
                    }
                    if (ImageIdx === nowPlaying + 1) {
                        marqueeTurn = "marquee-next";
                    }
                    if (ImageIdx === nowPlaying - 1) {
                        marqueeTurn = "marquee-prev";
                    }

                    return (
                        <MarqueeImage key={v4()}
                            marqueeTurn={marqueeTurn}
                            {...Image}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Marquee;
