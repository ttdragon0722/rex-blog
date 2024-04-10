import Container from "@/components/container/container";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/legacy/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import SkillBlock from "./components/skillBlock";
import { SkillData } from "./skill-interface";
import { v4 } from "uuid";
import Link from "next/link";
import ArrowLink from "./components/arrowLink";
import useHeight from "@/hook/useHeight";
gsap.registerPlugin(ScrollTrigger);

const skillData: SkillData[] = [
    { imgSrc: "/skillPage/ironman.jpg", title: "《連我阿公都會-手把手教你架網站》", description: "2023鐵人賽完賽！" },
    { imgSrc: "/skillPage/calendar.jpg", title: "中科大場地租借系統", description: "2024/1~2024/2 使用 nextJS + FastAPI開發場地租借系統" },
    { imgSrc: "/skillPage/python.jpg", title: "Python", description: "三年編程式經驗，Fastapi/Flask/爬蟲/Pygame" },
    { imgSrc: "/skillPage/react.jpg", title: "Website / React / Nextjs", description: "三年網頁開發經驗：純前端/ReactJS/Next(Typescript)" },
];

const SkillPage = () => {
    const skillsRef = useRef<HTMLDivElement>(null);
    const height = useHeight({ ref: skillsRef });

    useLayoutEffect(() => {
        gsap.fromTo("#skillScreen", { display: "none", opacity: 0 }, {
            display: "block", opacity: 1,
            scrollTrigger: {
                trigger: "#skillPage",
                start: "-10% top",
                end: "top"
            }
        });
        // const skillBlockCom = document.querySelectorAll(".skillBlock");
        // gsap.fromTo(skillBlockCom, { opacity: 0 }, {
        //     opacity: 1, stagger: 0.2, duration: 0.8,
        //     scrollTrigger: {
        //         trigger: "#skillPage",
        //         start: "5% 5%",
        //         end: "15% 5%",
        //         refreshPriority: -1
        //     }
        // })
        gsap.fromTo("#skillTitle", { opacity: 0 }, {
            opacity: 1, duration: 0.8,
            scrollTrigger: {
                trigger: "#skillPage",
                start: "top 5%",
                end: "30% 5%",
            }
        });

        const leave = gsap.timeline({
            scrollTrigger: {
                trigger: "#skillPage",
                start: "bottom bottom"
            }
        });
        leave.set("#skillScreen", {
            position: "absolute"
        }).set("#skillPage", {
            height: height,
        });
        ScrollTrigger.refresh();
    }, [height]);

    return <>
        <section id="skillPage" className="w-full min-h-screen relative" style={{ height: height }}>
            <div className="w-full min-h-screen top-0" style={{ height: height }} >
                <Image style={{ height: height }} className="sticky top-0" src="/skillPage/skillBackground.jpg" layout="fill" objectFit="cover" alt="skillPageBackground" />
            </div>
            <section id="skillScreen" className="hidden opacity-0 fixed w-full min-h-screen bg-white/30 top-0 z-[1000]" style={{ height: height }}>
                <Container ref={skillsRef} className="flex flex-col gap-2 items-center h-full max-xl:h-fit my-5 max-md:items-start">
                    <div id="skillTitle" className="text-white opacity-0 w-full h-1/2 max-sm:h-[150px] flex flex-col items-center justify-center py-10  relative drop-shadow-2xl text-center">
                        <div className="mb-8 font-TaipeiBold text-5xl underline underline-offset-[10px]">技能樹 / 經驗</div>
                        <ArrowLink />
                    </div>
                    <div className="w-full flex flex-wrap gap-2 justify-center">
                        {
                            skillData.map((skillBlock) => {
                                return <SkillBlock key={v4()} {...skillBlock} />
                            })
                        }
                    </div>
                </Container>
            </section>
        </section>
    </>
}

export default SkillPage;