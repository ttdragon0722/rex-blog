import React from "react";
import type { ImageProp } from "../marquee-interface";
import Image from "next/legacy/image";

const MarqueeImage: React.FC<ImageProp> = ({ id, className, marqueeTurn, src, alt }) => {
    return <div className={`${marqueeTurn} marquee-card absolute w-full h-full`} >
        <Image
            id={id}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={src} alt={alt} />
    </div>
}

export default MarqueeImage;