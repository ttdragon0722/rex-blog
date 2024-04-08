import Marquee from "@/components/marquee/marquee";
import TopHeader from "./components/topHeader";
import React from "react";
import AsciiTitle from "./components/asciiTitle";
import Image from "next/image";
import Container from "@/components/container/container";
import Dots from "@/components/dots/dots";

const Home = () => {
    return <section className="relative h-screen flex flex-col">
        <Dots
            color="black"
            offsetY="8px"
            gap="15px" 
            className="absolute z-[1] top-0 left-0 w-[250px] h-full" 
        />
        <TopHeader />
        <Container className="flex flex-row-reverse justify-center items-center">
            <div className="relative font-TaipeiBold font-bold text-center">
                <AsciiTitle />
                <h2 className="text-xl font-normal">
                    早安你好，我是雷克斯。
                </h2>
            </div>
            <Marquee
                className="relative shadow-2xl w-[650px] h-[600px] rounded-3xl overflow-hidden"
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