import React from "react";
import ProjectCard from "../components/ProjectCard";
import { project } from '../datas/project'

function Home() {
    console.log(project)
    return (
        <>
            <ProjectCard data={project} />
        </>
    )
}
export default Home