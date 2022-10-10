/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import githubIcon from '../assets/icons/githubIcon.png'
import shareIcon from '../assets/icons/shareIcon.png'

function PreviewProjectCard(props) {
    const data = props.data
    const toggleModal = props.toggle
    console.log(data)

    return (
        <>{data.map(({ id, name, desc, pathBanner, urlGithub, urlHost, frontend, backend, type }) => (
            <Card key={id} className="card-custom">
                <Card.Img variant="top" src={pathBanner} alt={"preview of the project " + name} className="card-banner" />
                <Card.Body>
                    <a onClick={toggleModal} ><Card.Title>{name}</Card.Title></a>
                    <Card.Text>{desc}{frontend}{backend}{type}</Card.Text>
                    <a href={urlGithub} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="logo" width="24" height="24" className="mx-2" /></a>
                    {urlHost != '' ? (<a href={urlHost} target="_blank" rel="noopener noreferrer"><img src={shareIcon} alt="logo" width="24" height="24" className="mx-2" /></a>) : (<></>)}
                </Card.Body>
                <Card.Footer className="d-flex justify-content-around">
                    {frontend ? <p className="mb-0">Frontend</p> : null}
                    {backend ? <p className="mb-0">Backend</p> : null}
                </Card.Footer>
            </Card>
        ))
        }
        </>
    )
}

export default PreviewProjectCard;
