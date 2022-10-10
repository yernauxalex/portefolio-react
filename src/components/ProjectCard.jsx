import React from 'react'
import { Card, Modal } from 'react-bootstrap'
function ProjectCard(props) {
    const data = props
    console.log(props)
    return (
        <Modal show={props.isOpen} onHide={props.toggle} aria-labelledby="contact us form"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Contact Us</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card key={data.id} className="card-custom">
                    <Card.Img variant="top" src={data.pathBanner} alt={"preview of the project " + data.name} className="card-banner" />
                    <Card.Body>
                        <a onClick={data.handleShow}><Card.Title>{data.name}</Card.Title></a>
                        <Card.Text>{data.desc}{data.frontend}{data.backend}{data.type}</Card.Text>
                        {/* <a href={urlGithub} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="logo" width="24" height="24" className="mx-2" /></a>
                {urlHost != '' ? (<a href={urlHost} target="_blank" rel="noopener noreferrer"><img src={shareIcon} alt="logo" width="24" height="24" className="mx-2" /></a>) : (<></>)} */}
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-around">
                        {data.frontend ? <p className="mb-0">Frontend</p> : null}
                        {data.backend ? <p className="mb-0">Backend</p> : null}
                    </Card.Footer></Card>
            </Modal.Body>
        </Modal>
    )
}
export default ProjectCard