import { useState, useEffect } from 'react';
import './App.css';
import { aboutME, skills, projects, hobbies, accounts, email } from './constants.js';
import { AboutMeComponent } from './components/maincomponents/AboutMeComponent.jsx';
import { ProjectsComponent } from './components/maincomponents/ProjectsComponent.jsx';
import { HobbiesComponent } from './components/maincomponents/HobbiesComponent.jsx';
import { ContactMeComponent } from './components/maincomponents/ContactMeComponent.jsx';
import { Menu } from './components/menu/Menu.jsx';
import { SkillsComponent } from './components/maincomponents/SkillsComponent.jsx';

function App() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedHobbie, setSelectedHobbie] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState(null);

    useEffect(() => {
        if (projects.length > 0) {
            setSelectedProject(projects[0])
        }
    }, [])

    useEffect(() => {
        if (hobbies.length > 0) {
            setSelectedHobbie(hobbies[0]);
        }
    }, [])

    useEffect(() => {
        if (skills.length > 0) {
            setSelectedSkill(skills[0]);
        }
    }, [])

    const handleProject = (project) => {
        setSelectedProject(project);
    }

    const handleCloseProject = () => {
        setSelectedProject(null)
    }

    const handleHobbie = (hobbie) => {
        setSelectedHobbie(hobbie);
    }

    const handleCloseHobbie = () => {
        setSelectedHobbie(null)
    }

    const handleSkill = (skill) => {
        setSelectedSkill(skill)
    }

    const handleCloseSkill = () => {
        setSelectedSkill(null)
    }



    return (
        <div className='main-container'>
            <Menu />
            <div className="app-container">
                <section id="about-me">
                    <AboutMeComponent title={aboutME.title} text={aboutME.text} imgLink={aboutME.imgLink} />
                </section>

                <section id="skills">
                    <SkillsComponent skills={skills} changeTextOnHover={true} selectedSkill={selectedSkill} handleSkill={handleSkill} handleCloseSkill={handleCloseSkill}/>
                 </section>   

                <section id="projects">
                    <ProjectsComponent projects={projects} selectedProject={selectedProject} handleProject={handleProject} handleCloseProject={handleCloseProject}/>
                </section>

                <section id="hobbies">
                    <HobbiesComponent hobbies={hobbies} selectedHobbie={selectedHobbie} handleHobbie={handleHobbie} handleCloseHobbie={handleCloseHobbie}/>
                </section>

                <section id="contact-me">
                    <ContactMeComponent account={accounts} email={email}/>
                </section>
            </div>

        </div>
    );
}

export default App;
