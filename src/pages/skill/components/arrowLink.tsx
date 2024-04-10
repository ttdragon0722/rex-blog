import gsap from "gsap/dist/gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const ArrowLink = () => {
    const linkRef = useRef<HTMLAnchorElement>(null);

    
    useEffect(() => {
        const arrowAnim = gsap.timeline();
        const arrows = document.getElementsByClassName("arrow");
        arrowAnim.fromTo(arrows,{opacity:0},{opacity:1,duration:0.2});


        const currentRef = linkRef.current;
        const handleEnter = () => {
            console.log("enter");
            arrowAnim.play();
        }
        const handleOut = () => {
            console.log("out");
            arrowAnim.reverse();
        }
        currentRef?.addEventListener("mouseenter", handleEnter);
        currentRef?.addEventListener("mouseout", handleOut);

        return () => {
            if (currentRef) {
                currentRef?.removeEventListener("mouseenter", handleEnter);
                currentRef?.removeEventListener("mouseout", handleOut);
            }
        }
    }, [linkRef]);

    return <div className="relative flex items-center gap-2">
        <FaRegArrowAltCircleDown className="arrow opacity-0" />
        <Link ref={linkRef} href="#projectPage" className="text-base hover:underline underline-offset-2">看看我的github專案</Link>
        <FaRegArrowAltCircleDown className="arrow opacity-0" />
    </div>
}
export default ArrowLink;