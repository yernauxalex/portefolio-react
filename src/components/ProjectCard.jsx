import React, { useContext } from 'react'
import { LanguageContext } from "../Utils/LanguageContext";
import { Modal, Stack } from 'react-bootstrap'
import shareIcon from '../assets/icons/shareIcon.png'

function ProjectCard(props) {
    const { languageState } = useContext(LanguageContext)
    const data = props.data

    return (
        <Modal show={props.isOpen} onHide={props.toggle} size="lg" dialogClassName="modal-custom" aria-labelledby="contact us form"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    {languageState.lang === 'en-GB' ? (
                        <>{data.nameEN}</>
                    ) : languageState.lang === 'fr-FR' ? (
                        <>{data.nameFR}</>
                    ) : null}
                    {data.urlHost != '' ? (<a href={data.urlHost} target="_blank" rel="noopener noreferrer"><img src={shareIcon} alt="logo" width="20" height="20" className="mx-2" /></a>) : null}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {languageState.lang === 'en-GB' ? (<>
                    <p>Rich desc {data.descEN}</p>
                    {data.hostBy ? (<p>Hosted by {data.hostBy}</p>) : null}</>
                ) : languageState.lang === 'fr-FR' ? (<>
                    <p>Description détaillée {data.descFR}</p>
                    {data.hostBy ? (<p>Hébergé via {data.hostBy}</p>) : null}</>
                ) : null}


                {data.tech != null ? (
                    <>
                        {languageState.lang === 'en-GB' ? (
                            <h3>Tech used</h3>
                        ) : languageState.lang === 'fr-FR' ? (
                            <h3>Technos utilisées</h3>
                        ) : null}

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