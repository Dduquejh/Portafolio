import { Separator } from "../Separator";
import { ListComponent } from "../ListComponent";
import { InfoProjectContainer } from "../InfoProjectContainer";

export const ProjectsComponent = ({projects, selectedProject, handleProject, handleCloseProject}) => {
    return(
        <>
            <Separator>Projects</Separator>
            <div className="list-container">
            {   projects.map((project, index) => {
                    const iconLink = new URL(`../../assets/icons/${project.icon}`, import.meta.url).href;
                    return (
                        <ListComponent 
                            key={index} 
                            iconLink={iconLink}
                            onClick={() => handleProject(project)}
                        >
                            {project.title}
                        </ListComponent>
                    );
                })}   
            </div>
            <p className="note-text">* Click on each project for more information</p>

            {selectedProject && (
                <div className="project-info">
                    <InfoProjectContainer
                        title={selectedProject.title} 
                        text={selectedProject.details}
                        imgLink={new URL(`../../assets/img/${selectedProject.imgLink}`, import.meta.url).href}
                        additonalInfo={selectedProject.additionalInfo}
                        repoLink={selectedProject.repoLink}
                    />
                        <button className="close-button" onClick={handleCloseProject}>Close</button>
                </div>
            )}
        </>
    )
}