import React from "react";

interface DotProp {
    x: string;
    y: string;
    color?: string | undefined;
}

const Dot: React.FC<DotProp> = ({ x, y, color }) => {
    return <div style={{ top: y, left: x}} className="absolute bg-black w-1 h-1 rounded-full"></div>
}

export default Dot;