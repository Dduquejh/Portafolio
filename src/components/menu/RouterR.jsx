import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Menu } from "./Menu";
import { AboutMeComponent } from "../maincomponents/AboutMeComponent";
import { ProjectsComponent } from "../maincomponents/ProjectsComponent";
import { HobbiesComponent } from "../maincomponents/HobbiesComponent";
import { ContactMeComponent } from "../maincomponents/ContactMeComponent";
import { ErrorComponent } from "./ErrorComponent";

export const RouterR = ({ aboutME, projects, hobbies, contact, selectedProject, handleProject, handleCloseProject, selectedHobbie, handleHobbie, handleCloseHobbie }) => {
    return(
        <Router>
            <Menu/>
            <Routes>
                <Route path="/" element={<AboutMeComponent title={aboutME.title} text={aboutME.text} imgLink={aboutME.imgLink}/>}/>
                <Route path="/about" element={<AboutMeComponent title={aboutME.title} text={aboutME.text} imgLink={aboutME.imgLink}/>}/>
                <Route path="/projects" element={<ProjectsComponent projects={projects} selectedProject={selectedProject} handleProject={handleProject} handleCloseProject={handleCloseProject}/>}/>
                <Route path="/hobbies" element={<HobbiesComponent hobbies={hobbies} selectedHobbie={selectedHobbie} handleHobbie={handleHobbie} handleCloseHobbie={handleCloseHobbie}/>}/>
                <Route path="/contact" element={<ContactMeComponent contact={contact}/>}/>
                <Route path="*" element={<ErrorComponent/>}/>
            </Routes>
        </Router>
    )
}