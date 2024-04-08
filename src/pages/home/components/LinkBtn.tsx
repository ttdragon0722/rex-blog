import React from "react";

interface LinkBtnProp {
    icon: React.ReactNode;
    href: string,
}

const LinkBtn: React.FC<LinkBtnProp> = ({icon,href}) => {
    const handleClick = () => {
        location.href = href;
    }
    return <button className="w-15 h-15 p-2 rounded-full bg-white shadow-xl flex justify-center items-center" onClick={handleClick}>
        {icon}
    </button>
}

export default LinkBtn;