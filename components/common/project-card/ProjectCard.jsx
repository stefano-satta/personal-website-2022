import { Card } from "react-bootstrap"
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas, fab)

const ProjectCard = ({project}) => {

    return (
        <Card className="bg-less-dark project-card rounded-3">
            <Card.Body className="d-flex flex-column">
                <Card.Title as={'h4'}>
                    <FontAwesomeIcon icon={['fas', 'folder']}  className="me-3"/>
                    { project.name } 
                </Card.Title>
                <Card.Text className="text-light-grey">{ project.description }</Card.Text>
                <div className="mt-3 d-flex justify-content-between mt-auto">
                    <div>
                        <FontAwesomeIcon icon={['fas', 'circle']} 
                            className={`${project.bgIconColor} me-2`}/>
                        <small>{ project.language }</small>
                    </div>
                    <div>
                        { 
                            project.github &&
                            <Link href={project.github} passHref>
                                <Card.Link target={'_blank'} className="link-icon me-2">
                                    <FontAwesomeIcon icon={['fas', 'code-branch']} />
                                </Card.Link>
                            </Link>
                            
                        }
                        {
                            project.siteUrl &&
                            <Link href={project.siteUrl} passHref>
                                <Card.Link target={'_blank'} className="link-icon">
                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                </Card.Link>
                            </Link>
                        }   
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;