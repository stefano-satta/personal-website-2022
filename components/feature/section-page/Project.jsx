import {Row, Col} from 'react-bootstrap'
import ProjectCard from '../../common/project-card/ProjectCard'
import { PROJECTS } from "../../../utility/project-list";


const Project = () => {

    return (
        <Row className="mt-5" id="project">
            <Col>
                <h2 className="text-primary mb-4 fw-bold fs-title-section">Projects</h2>
                <p className="fs-4">A small list of projects chosen by me.</p>
                <div className="mt-3 d-flex flex-wrap justify-content-between">
                    {
                        PROJECTS.map( (project, index) => (
                            <ProjectCard project={project} key={`${project.name}-${index}`}/>
                        )) 
                    }
                </div>
            </Col>
        </Row>
    )
}

export default Project;