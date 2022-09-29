import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import ProjectCard from "../components/ProjectCard";
import { project } from '../datas/project'

function Home() {
    console.log(project)
    return (
        <>
            <Row>
                <Col>
                    <Container>
                        <img src="" alt="profile picture" />
                        <h1>Yernaux Alexis</h1>
                        <p>desc</p>
                        <ul><h2>Technos</h2>
                            <li>ReactJs</li>
                            <li>NodeJs</li>
                            <li>Bootstrap</li>
                        </ul>
                    </Container>
                </Col>
                <Col md="auto">
                    <Container className="d-flex justify-content-center flex-wrap">
                        <ProjectCard data={project} />
                    </Container>
                </Col>
            </Row>
        </>
    )
}
export default Home