import React, { useState, useContext } from "react";
import { LanguageContext } from "../Utils/LanguageContext";
import { Container, Col, Row } from 'react-bootstrap';
import PreviewProjectCard from "../components/PreviewProjectCard";
import ProjectCard from '../components/ProjectCard'
import { project } from '../datas/project'
import profileIcon from '../assets/profileIcon.jpg'
import linkedinIcon from '../assets/icons/linkedinIcon.png'
import emailIcon from '../assets/icons/emailIcon.png'

function Home() {
    const { languageState } = useContext(LanguageContext)
    console.log(languageState.lang)
    const [show, setShow] = useState(false);
    const [projectData, setProjectData] = useState([])
    const toggleModal = () => setShow(prevShow => !prevShow)

    function getDataModal(project_id) {
        const newData = [...project]
        const seekId = (data) => data.id === project_id
        const projectIndex = newData.findIndex(seekId)
        setProjectData(newData[projectIndex])
    }
    return (
        <>
            <Row className="mx-0">
                <Col lg="auto" className="ps-5  pe-0 d-flex justify-content-center align-items-center">
                    <Container className="profile">
                        <img src={profileIcon} alt="profile picture" width="200" height="200" className="img-rounded" />
                        <h1>Yernaux Alexis</h1>
                        {languageState.lang === 'fr-FR' ? (<p>Développeur fullstack junior cherchant un emploi en région Parisienne ou en remote</p>) :
                            (<p>Junior Fullstack developer currently looking for a job on Paris or on remote</p>)}

                        <ul><h2>Tech</h2>
                            <li>ReactJs</li>
                            <li>NodeJs</li>
                            <li>Bootstrap</li>
                        </ul>
                        <a href="https://www.linkedin.com/in/yernauxalexis/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="logo" width="24" height="24" className="mx-2" /></a>
                        <a href="mailto: yernauxalex@gmail.com"><img src={emailIcon} alt="logo" width="24" height="24" className="mx-2" /></a>
                    </Container>
                </Col>
                <Col className="px-0">
                    <Container className="px-0 d-flex justify-content-center flex-wrap">
                        <PreviewProjectCard data={project} toggle={toggleModal} fc={getDataModal} />
                        <ProjectCard data={projectData} isOpen={show} toggle={toggleModal} />
                    </Container>
                </Col>
            </Row>
        </>
    )
}
export default Home