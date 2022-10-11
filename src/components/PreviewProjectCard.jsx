import React from 'react';
import { Card } from 'react-bootstrap';
import githubIcon from '../assets/icons/githubIcon.png'
import shareIcon from '../assets/icons/shareIcon.png'

function PreviewProjectCard(props) {
    const data = props.data
    const handleClick = (event, id) => {
        props.toggle()
        props.fc(id)
    }
    return (
        <>{data.map(({ id, name, desc, pathBanner, urlGithub, urlHost, frontend, backend, type }) => (
            <Card key={id} className="card-custom">
                <a onClick={event => handleClick(event, id)}>
                    <Card.Img variant="top" src={pathBanner} alt={"preview of the project " + name} className="card-banner" />
                </a>
                <Card.Body className="d-flex flex-column justify-content-evenly">
                    <a onClick={event => handleClick(event, id)}>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{desc}</Card.Text>
                    </a>
                    <Card.Text className="mb-0">
                        <a href={urlGithub} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="logo" width="24" height="24" className="mx-2" /></a>
                        {urlHost != '' ? (<a href={urlHost} target="_blank" rel="noopener noreferrer"><img src={shareIcon} alt="logo" width="24" height="24" className="mx-2" /></a>) : null}
                    </Card.Text>
                    {type === 'perso' ? (<Card.Text>Projet personnel</Card.Text>) : type === 'OC' ? (<Card.Text>Projet OpenClassrooms</Card.Text>) : null}
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
