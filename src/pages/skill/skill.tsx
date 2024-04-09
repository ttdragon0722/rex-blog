import Container from "@/components/container/container";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/legacy/image";
import React, { useLayoutEffect } from "react";
import SkillBlock from "./components/skillBlock";
import { SkillData } from "./skill-interface";
import { v4 } from "uuid";
gsap.registerPlugin(ScrollTrigger);

const skillData: SkillData[] = [
    { imgSrc: "/skillPage/ironman.jpg", title: "《連我阿公都會-手把手教你架網站》", description: "2023鐵人賽完賽！" },
    { imgSrc: "/skillPage/calendar.jpg", title: "中科大場地租借系統", description: "2024/1~2024/2 使用 nextJS + FastAPI開發場地租借系統" },
    { imgSrc: "/skillPage/python.jpg", title: "Python", description: "三年編程式經驗，Fastapi/Flask/爬蟲/Pygame" },
    { imgSrc: "/skillPage/react.jpg", title: "Website / React / Nextjs", description: "三年網頁開發經驗：純前端/ReactJS/Next(Typescript)" },
];

const SkillPage = () => {

    useLayoutEffect(() => {
        gsap.fromTo("#skillScreen", { display: "none", opacity: 0 }, {
            display: "block", opacity: 1,
            scrollTrigger: {
                trigger: "#skillPage",
                start: "-10% top",
                end: "top"
            }
        });
        // gsap.fromTo("#skillScreen", { opacity: 1 }, {
        //     opacity: 0, display: "none",
        //     scrollTrigger: {
        //         trigger: "#skillPage",
        //         start: "95% 80%",
        //         scrub: true,
        //         end: "105% 80%",
        //     }
        // });
        const skillBlockCom = document.querySelectorAll(".skillBlock");
        gsap.fromTo(skillBlockCom, { opacity: 0 }, {
            opacity: 1, stagger: 0.2, duration: 0.8,
            scrollTrigger: {
                trigger: "#skillPage",
                start: "5% 5%",
                end: "15% 5%",
            }
        })
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
            height: "100vh",
        });

    }, []);

    return <>
        <section id="skillPage" className="w-full h-screen relative">
            <div className="w-full h-screen top-0">
                <Image className="sticky top-0" src="/skillPage/skillBackground.jpg" layout="fill" objectFit="cover" alt="skillPageBackground" />
            </div>
            <section id="skillScreen" className="hidden opacity-0 fixed w-full h-screen bg-white/30 top-0 z-[1000]">
                <Container className="flex flex-col gap-2 items-center h-full max-xl:h-fit my-5 max-md:items-start">
                    <div id="skillTitle" className="opacity-0 w-full h-1/2 max-sm:h-[150px] flex items-center justify-center font-TaipeiBold py-10 text-5xl relative text-white drop-shadow-2xl text-center underline underline-offset-[10px]">
                        技能樹 / 經驗
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