import Marquee from "@/components/marquee/marquee";
import TopHeader from "./components/topHeader";
import React, { useEffect } from "react";
import AsciiTitle from "./components/asciiTitle";
import Container from "@/components/container/container";
import Dots from "@/components/dots/dots";
import LinkBtn from "./components/LinkBtn";
import gsap from "gsap/dist/gsap";

const LinkIcon = {
    "facebook": <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
    "github": <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>,
    "ig": <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
}

const Home = () => {
    const dotAnimation = () => {
        gsap.fromTo(".homeDot",{opacity:0},{
            opacity:1,stagger:0.5,duration:1
        });
    };
    useEffect(()=>{
        dotAnimation();
    },[]);

    return <section className="relative h-screen flex flex-col max-lg:h-fit max-lg:min-h-screen">
        <Dots
            color="black"
            dotClass="homeDot"
            offsetY="8px"
            gap="15px"
            className="
                absolute z-[1] top-0 left-0 w-[250px] h-full 
                max-lg:w-full max-lg:h-[250px] max-lg:top-[calc(100%-250px)]"
        />
        <TopHeader />
        <Container className="
            max-xl:max-w-screen-xl flex flex-row-reverse justify-center items-center
            max-lg:flex-col max-lg:pb-10
        ">
            <div className="
                relative font-TaipeiBold font-bold text-center my-10 min-h-[125px]
                max-[550px]:flex max-[550px]:items-center max-[550px]:mb-0
            ">
                <AsciiTitle className="
                    leading-4 text-lg font-black
                    max-xl:text-base max-xl:leading-4 
                    max-md:text-xs max-md:leading-3 max-md:font-TaipeiBold
                " />
                <div>
                    <h2 className="text-xl font-normal">
                        早安你好，我是雷克斯。
                    </h2>
                    <div className="flex justify-center gap-2 my-5">
                        <LinkBtn href="https://www.facebook.com/profile.php?id=100013759479543" icon={LinkIcon.facebook} />
                        <LinkBtn href="https://www.instagram.com/ttdragon_0722/" icon={LinkIcon.ig} />
                        <LinkBtn href="https://github.com/ttdragon0722" icon={LinkIcon.github} />
                    </div>
                </div>
            </div>
            <Marquee
                rounded="rounded-3xl"
                className="
                    relative shadow-2xl w-[650px] h-[600px] overflow-hidden 
                    max-md:w-full max-md:h-full max-md:aspect-square
                "
                offset="-15%"
                speed={5}
                images={[
                    { src: "/大頭貼.jpg", alt: "大頭照" },
                    { src: "/雷克斯.png", alt: "test" },
                    { src: "/cat.jpg", alt: "test" },
                    { src: "/pic.jpg", alt: "test" },
                ]}
            />
        </Container>
    </section>
}



export default Home;