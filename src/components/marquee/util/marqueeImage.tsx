import React, { useState } from "react";
import type { ImageProp } from "../marquee-interface";
import Image from "next/legacy/image";

const MarqueeImage: React.FC<ImageProp> = ({ id, className, marqueeTurn, src, alt }) => {
    const [load, setLoad] = useState(true);
    const handleLoad: React.ReactEventHandler<HTMLImageElement> = () => {
        setLoad(false);
    }
    return <div className={`${marqueeTurn} marquee-card absolute w-full h-full`} >
        {load && <div className="absolute w-full h-full bg-gray-300 text-black/30 animate-pulse flex justify-center items-center ">loading...</div>}
        <Image
            id={id}
            onLoad={handleLoad}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            style={{ opacity: load ? 0 : 1 }}
            src={src} alt={alt} />
    </div>
}

export default MarqueeImage;