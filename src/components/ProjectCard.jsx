import React from 'react'
import { Modal, Stack } from 'react-bootstrap'
function ProjectCard(props) {
    const data = props.data

    return (
        <Modal show={props.isOpen} onHide={props.toggle} size="lg" dialogClassName="modal-custom" aria-labelledby="contact us form"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>{data.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Description détaillée {data.desc}</p>
                {data.tech != null ? (
                    <>
                        <h3>Technos utilisées</h3>
                        <Stack gap={1}>
                            {data.tech.map(({ name, icon }) =>
                                <div key={name}><img src={icon} alt={"logo " + name} /><p>{name}</p></div>)}
                        </Stack>
                    </>
                ) : null}
            </Modal.Body>
        </Modal>
    )
}
export default ProjectCard