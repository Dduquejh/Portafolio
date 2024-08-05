import { Separator } from "../Separator";
import { ListComponent } from "../ListComponent";
import { InfoContainer } from "../InfoContainer";

export const ProjectsComponent = ({projects, selectedProject, handleProject, handleCloseProject}) => {
    return(
        <>
            <Separator>Projects</Separator>
            <div className="list-container">
                {projects.map((project, index) => (
                    <ListComponent 
                        key={index} 
                        iconLink={project.icon}
                        onClick={() => handleProject(project)}
                    >
                        {project.title}
                    </ListComponent>
                ))}   
            </div>

            {selectedProject && (
                <div className="project-info">
                    <InfoContainer
                        title={selectedProject.title} 
                        text={selectedProject.details}
                        imgLink={selectedProject.imgLink}
                        additionalInfo={selectedProject.additionalInfo}
                    />
                        <button className="close-button" onClick={handleCloseProject}>Close</button>
                </div>
            )}
        </>
    )
}