import Image from "next/legacy/image";
import React from "react";

import type { SkillBlockProp } from "../skill-interface"

const SkillBlock: React.FC<SkillBlockProp> = ({ imgSrc, title, description, debug = false }) => {
    return <div className="skillBlock flex sm:w-fit w-full shadow-lg bg-white/60 p-2 rounded-lg" style={{ opacity: debug ? 1 : 0 }}>
        <div className="aspect-square w-28 relative rounded-lg overflow-hidden">
            <Image src={imgSrc} layout="fill" objectFit="cover" objectPosition="center" alt={title} />
        </div>
        <div className="flex-1 flex flex-col px-6 py-4">
            <h1 className="font-TaipeiBold text-xl">{title}</h1>
            <p>{description}</p>
        </div>
    </div>
}

export default SkillBlock;