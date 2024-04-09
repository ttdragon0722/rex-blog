import Container from "@/components/container/container";
import React, { useEffect } from "react";
import RankingBlock from "./components/rankingBlock";
import gsap from "gsap/dist/gsap";

const RankingPage = () => {
    // useEffect(()=>{
    //     gsap.to(".ranking",{opacity:1,scrollTrigger:{
    //         trigger:".ranking",
    //         markers: true,
    //         start: "top top"
    //     }})
    // },[]);

    return <section className="ranking h-screen relative px-10 py-5">
        <Container>
            <h1 className="font-extrabold my-5 px-12 text-5xl">一些超棒的東西</h1>
            <div className="flex h-[80vh] gap-5">
                <div className="w-2/3">
                    <RankingBlock
                        className="w-full h-full relative overflow-hidden rounded-2xl"
                        backgroundSrc="/ranking/camp.jpg"
                        alt="rank#1"
                    />
                </div>
                <div className="flex flex-col gap-3 w-1/3">
                    <RankingBlock
                        className="w-full h-1/2 relative overflow-hidden rounded-xl"
                        backgroundSrc="/ranking/sport.jpg"
                        alt="rank#1"
                    />
                    <RankingBlock
                        className="w-full h-1/2 relative overflow-hidden rounded-xl"
                        backgroundSrc="/ranking/maimai.jpg"
                        alt="rank#1"
                    />
                </div>
            </div>
        </Container>
    </section>
}

export default RankingPage;