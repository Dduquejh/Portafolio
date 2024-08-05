import { useState } from 'react';
import './App.css';
//import { NavBar } from './components/NavBar';
import { aboutME, projects, hobbies, contact } from './constants.js';
import { RouterR } from './components/menu/RouterR.jsx';

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

          <RouterR
                aboutME={aboutME}
                projects={projects}
                hobbies={hobbies}
                contact={contact}
                selectedProject={selectedProject}
                handleProject={handleProject}
                handleCloseProject={handleCloseProject}
                selectedHobbie={selectedHobbie}
                handleHobbie={handleHobbie}
                handleCloseHobbie={handleCloseHobbie}
            />
        </>
    );
}

export default App;
