"use client"
import Home from "@/pages/home/home";
import NonePage from "@/pages/none";
import Project from "@/pages/project/project";
import RankingPage from "@/pages/ranking/ranking";
import SkillPage from "@/pages/skill/skill";


export default function Site() {
  return (
    <>
      <Home />
      <SkillPage />
      <Project />
      <RankingPage />
    </>
  );
}
