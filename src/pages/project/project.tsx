import Container from "@/components/container/container";
import GithubRepositories from "./components/githubRepositories";


const Project = () => {

    return <section id="projectPage" className="relative">
        <Container id="githubList" className="flex relative">
            <div className="w-1/2 relative">
                <div id="githubTitle" className="sticky top-0 mx-28 py-20">
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
            <GithubRepositories className="w-1/2 ml-5 mr-32 py-20" />
        </Container>
    </section>

}

export default Project;