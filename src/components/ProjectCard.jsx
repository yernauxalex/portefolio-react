/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import githubIcon from '../assets/icons/githubIcon.png'
import shareIcon from '../assets/icons/shareIcon.png'
import soapagencyBanner from '../assets/projectBanner/soapagencyBanner.JPG'

function ProjectCard(props) {
    const data = props.data
    console.log(data)
    return (
        <>{data.map(({ id, name, desc, pathBanner, urlGithub, urlHost, frontend, backend, type }) => (
            <Card style={{ witdh: '25rem' }} key={id}>
                <Card.Img variant="top" src={pathBanner} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{desc}{frontend}{backend}{type}</Card.Text>
                    <a href={urlGithub}><img src={githubIcon} alt="logo" width="24" height="24" className="mx-2" /></a>
                    {urlHost != '' ? (<a href={urlHost}><img src={shareIcon} alt="logo" width="24" height="24" className="mx-2" /></a>) : (<></>)}
                </Card.Body>
                <Card.Footer>
                    {frontend ? 'Frontend' : null}
                    {' '}
                    {backend ? 'Backend' : null}
                </Card.Footer>
            </Card>
        ))}
        </>
    )
}

export default ProjectCard;
