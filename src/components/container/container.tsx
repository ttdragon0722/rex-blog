import React, { forwardRef } from "react";
import type { ContainerProp } from "./container-interface";

const Container: React.ForwardRefRenderFunction<HTMLDivElement, ContainerProp> = ({ id, style, children, className }, ref) => {
    return (
        <div
            id={id}
            style={{ ...style }}
            className={`${className} w-full 2xl:max-w-screen-2xl max-2xl:max-w-screen-xl max-xl:max-w-screen-lg max-lg:max-w-screen-md max-md:max-w-screen-sm px-2 m-auto relative`}
            ref={ref} // 將ref屬性傳遞到內部的div元素
        >
            {children}
        </div>
    );
}

export default forwardRef(Container);
