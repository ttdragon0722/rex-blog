import React from "react";
import type { DotProp } from "../dots-interface";

const Dot: React.FC<DotProp> = ({ x, y, color, dotClass }) => {
    return <div style={{ top: y, left: x, backgroundColor: color }} className={`${dotClass?dotClass:""} ADot absolute w-1 h-1 rounded-full`} />
}

export default Dot;