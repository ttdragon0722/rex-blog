"use client"
// 偵測視窗大小改變
import { useEffect, useState } from "react";

/**
 * 偵測視窗大小改變
 * @returns 視窗大小
 */ 
const useRWD = () => {
    const [view,setView] = useState<number>();
    useEffect(() => {
        const handleResize = () => {
            setView(window.innerWidth);
        };
        setView(window.innerWidth);

        window.addEventListener("resize",handleResize);
        return () => {
            window.removeEventListener("resize",handleResize);
        }
    },[]);
    return view;
}

export default useRWD;