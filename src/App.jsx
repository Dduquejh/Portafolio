import { useState } from 'react';
import './App.css';
import { aboutME, projects, hobbies, contact } from './constants.js';
import { AboutMeComponent } from './components/maincomponents/AboutMeComponent.jsx';
import { ProjectsComponent } from './components/maincomponents/ProjectsComponent.jsx';
import { HobbiesComponent } from './components/maincomponents/HobbiesComponent.jsx';
import { ContactMeComponent } from './components/maincomponents/ContactMeComponent.jsx';
import { Menu } from './components/menu/Menu.jsx';

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
            <Menu />
            <div className="app-container">
                <section id="about-me">
                    <AboutMeComponent title={aboutME.title} text={aboutME.text} imgLink={aboutME.imgLink} />
                </section>

                <section id="projects">
                    <ProjectsComponent projects={projects} selectedProject={selectedProject} handleProject={handleProject} handleCloseProject={handleCloseProject}/>
                </section>

                <section id="hobbies">
                    <HobbiesComponent hobbies={hobbies} selectedHobbie={selectedHobbie} handleHobbie={handleHobbie} handleCloseHobbie={handleCloseHobbie}/>
                </section>

                <section id="contact-me">
                    <ContactMeComponent contact={contact}/>
                </section>
            </div>
        </>
    );
}

export default App;
