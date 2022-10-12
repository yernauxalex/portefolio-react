import React from 'react'
import { Modal, Stack } from 'react-bootstrap'
import shareIcon from '../assets/icons/shareIcon.png'

function ProjectCard(props) {
    const data = props.data

    return (
        <Modal show={props.isOpen} onHide={props.toggle} size="lg" dialogClassName="modal-custom" aria-labelledby="contact us form"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    {data.name}
                    {data.urlHost != '' ? (<a href={data.urlHost} target="_blank" rel="noopener noreferrer"><img src={shareIcon} alt="logo" width="20" height="20" className="mx-2" /></a>) : null}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Description détaillée {data.desc}</p>
                {data.hostBy ? (<p>Hébergé via {data.hostBy}</p>) : null}
                {data.tech != null ? (
                    <>
                        <h3>Technos utilisées</h3>
                        <Stack gap={1}>
                            {data.tech.map(({ name, icon }) =>
                                <div key={name} className="d-flex">
                                    {icon ? (<img src={icon} alt={"logo " + name} width="24" height="24" className="mx-2" />) : (<div style={{ width: 40 }}></div>)}
                                    <p>{name}</p>
                                </div>
                            )}
                        </Stack>
                    </>
                ) : null}
            </Modal.Body>
        </Modal>
    )
}
export default ProjectCard