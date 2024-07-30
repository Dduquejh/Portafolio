import { useState } from 'react';
import './App.css';
import { InfoContainer } from './components/InfoContainer';
import { Separator } from './components/Separator';
import { ListComponent } from './components/ListComponent.jsx';
import { aboutME, projects, hobbies } from './constants.js';

function App() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedHobbie, setSelectedHobbie] = useState(null);

    const handleProject = (project) => {
        setSelectedProject(project);
    };

    const handleCloseProject = () => {
        setSelectedProject(null);
    };

    const handleHobbie = (hobbie) => {
        setSelectedHobbie(hobbie);
    };

    const handleCloseHobbie = () => {
        setSelectedHobbie(null);
    }


    return (
        <>  
            <Separator>About me</Separator>
            <InfoContainer 
                title={aboutME.title} 
                text={aboutME.text}
                imgLink={aboutME.imgLink}
            />

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
                    />
                        <button className="close-button" onClick={handleCloseProject}>Close</button>
                </div>
            )}

            <Separator>Hobbies</Separator>

            <div className="list-container">
                {hobbies.map((hobby, index) => (
                    <ListComponent 
                        key={index} 
                        iconLink={hobby.icon}
                        onClick={() => handleHobbie(hobby)}
                    >
                        {hobby.title}
                    </ListComponent>
                ))}
            </div>

            {selectedHobbie && (
                <div className="project-info">
                    <InfoContainer
                        title={selectedHobbie.title} 
                        text={selectedHobbie.details}
                        imgLink={selectedHobbie.imgLink}
                    />
                    <button className="close-button" onClick={handleCloseHobbie}>Close</button>
                </div>
            )

            }



            <Separator>Contact me</Separator>
        </>
    );
}

export default App;
