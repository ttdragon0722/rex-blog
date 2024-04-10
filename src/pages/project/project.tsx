import Container from "@/components/container/container";
import GithubRepositories from "./components/githubRepositories";
import { useEffect, useState } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


const Project = () => {
    const [height, setHeight] = useState<number>(0);
    useEffect(()=>{
        ScrollTrigger.refresh();
    },[height]);

    useEffect(() => {
        const gsapMedia = gsap.matchMedia();
        gsapMedia.add("(max-width: 767.5px)", () => {
            const projectLeave = gsap.timeline();
            projectLeave.fromTo("#githubTitle", { opacity: 1 }, {
                opacity: 0, scrollTrigger: {
                    trigger: "#projectPage",
                    start: "100px top",
                    end: "200px top",
                    scrub: true,
                }
            });
            projectLeave.scrollTrigger?.refresh();
        });
        gsapMedia.add("(min-width:768px)", () => {
            const projectLeave = gsap.timeline();
            projectLeave.fromTo("#githubTitle", { opacity: 1 }, {
                opacity: 0, scrollTrigger: {
                    trigger: "#projectPage",
                    start: "bottom 70%",
                    end: "bottom 50%",
                    scrub: true,
                }
            });
            projectLeave.scrollTrigger?.refresh();
        })
    }, []);

    return <>
        <section id="projectPage" className="relative" >
            <Container id="githubList" className="flex relative max-md:flex-col">
                <div className="w-1/2 max-md:w-full relative">
                    <div id="githubTitle" className="sticky max-md:relative top-0 lg:mx-24 mx-0 px-2 py-20 max-md:pb-0">
                        <h1 className="font-black text-3xl">
                            Github 倉庫專案
                        </h1>
                        <hr className="my-5" />
                        <div>
                            2021/9 ~ 今天
                        </div>
                        <div>
                            紀錄一些github倉庫上的專案
                        </div>
                        <div className="my-5">
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">
                                Github 倉庫
                            </button>
                        </div>
                    </div>
                </div>
                <GithubRepositories setHeight={setHeight} className="w-1/2 max-md:w-full ml-5 mr-28 max-lg:m-0" />
            </Container>
        </section>
    </>

}

export default Project;