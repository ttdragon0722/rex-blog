import Image from "next/image";
import React from "react";

interface RankingBlockProp {
    className?: string | undefined
    backgroundSrc: string,
    alt: string,
}

const RankingBlock: React.FC<RankingBlockProp> = ({ className, backgroundSrc, alt }) => {
    return <div className={`${className} overflow-hidden`}>
        <Image layout="fill" style={{objectFit:"cover",objectPosition:"center"}} src={backgroundSrc} alt={alt}></Image>
    </div>
}

export default RankingBlock;