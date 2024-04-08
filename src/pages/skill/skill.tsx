import Container from "@/components/container/container";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/legacy/image";
import React, { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const SkillPage = () => {
    useLayoutEffect(() => {
        gsap.fromTo("#skillScreen", { display: "none", opacity: 0 }, {
            display: "block", opacity: 1,
            scrollTrigger: {
                trigger: "#skillPage",
                scrub: true,
                start: "-5% top",
                end: "top"
            }
        });
        gsap.fromTo("#skillScreen", { opacity: 1 }, {
            opacity: 0, display: "none",
            scrollTrigger: {
                trigger: "#skillPage",
                scrub: true,
                start: "95% 80%",
                end: "105% 80%",
            }
        });
    }, []);

    return <>
        <section id="skillPage" className="w-full h-[200vh] relative">
            <div className="w-full h-screen sticky top-0">
                <Image className="sticky top-0" src="/skillPage/skillBackground.jpg" layout="fill" alt="skillPageBackground" />
            </div>
        </section>
        <section id="skillScreen" className="hidden opacity-0 fixed w-full h-screen bg-white/30 top-0 z-[1000]">
            <Container className="flex justify-around items-center h-full">
                <div className="font-TaipeiBold text-3xl text-white drop-shadow-2xl">
                    技能樹 / 經驗
                </div>
                <div>
                    hhaa
                </div>
            </Container>
        </section>
    </>
}

export default SkillPage;