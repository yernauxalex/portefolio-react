import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import ProjectCard from "../components/ProjectCard";
import { project } from '../datas/project'

function Home() {
    console.log(project)
    return (
        <>
            <Row className="mx-0">
                <Col lg="auto" className="ps-5  pe-0 d-flex justify-content-center align-items-center">
                    <Container className="profile">
                        <img src="https://picsum.photos/100/100" alt="profile picture" className="img-rounded" />
                        <h1>Yernaux Alexis</h1>
                        <p>Junior Fullstack developer currently looking for a job on Paris or on remote</p>
                        <ul><h2>Technos</h2>
                            <li>ReactJs</li>
                            <li>NodeJs</li>
                            <li>Bootstrap</li>
                        </ul>
                    </Container>
                </Col>
                <Col className="px-0">
                    <Container className="px-0 d-flex justify-content-center flex-wrap">
                        <ProjectCard data={project} />
                    </Container>
                </Col>
            </Row>
        </>
    )
}
export default Home