import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import PreviewProjectCard from "../components/PreviewProjectCard";
import { project } from '../datas/project'
import profileIcon from '../assets/profileIcon.jpg'
import linkedinIcon from '../assets/icons/linkedinIcon.png'
import emailIcon from '../assets/icons/emailIcon.png'

function Home() {
    console.log(project)
    return (
        <>
            <Row className="mx-0">
                <Col lg="auto" className="ps-5  pe-0 d-flex justify-content-center align-items-center">
                    <Container className="profile">
                        <img src={profileIcon} alt="profile picture" width="200" height="200" className="img-rounded" />
                        <h1>Yernaux Alexis</h1>
                        <p>Junior Fullstack developer currently looking for a job on Paris or on remote</p>
                        <ul><h2>Technos</h2>
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
                        <PreviewProjectCard data={project} />
                    </Container>
                </Col>
            </Row>
        </>
    )
}
export default Home