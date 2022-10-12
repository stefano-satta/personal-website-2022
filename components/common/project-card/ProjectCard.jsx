import { Card, Badge } from "react-bootstrap"
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas, fab)

const ProjectCard = ({project}) => {

    return (
        <Card className="bg-less-dark project-card rounded-3 my-2">
            <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start">
                    <Card.Title as={'h4'}>
                        <FontAwesomeIcon icon={['fas', 'folder']}  className="me-3"/>
                        { project.name } 
                    </Card.Title>
                    {
                        !project.isCompleted &&
                        <Badge pill bg="transparent" className="badge-outline badge-success">
                            In Progress
                        </Badge>
                    }
                </div>
                <Card.Text className="mt-2 text-light-grey">{ project.description }</Card.Text>
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