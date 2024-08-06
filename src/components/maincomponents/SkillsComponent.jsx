import { InfoSkillContainer } from '../InfoSkillContainer';
import { Separator } from '../Separator';
import { SkillItem } from '../SkillItem';

export const SkillsComponent = ({ skills, changeTextOnHover, selectedSkill, handleSkill, handleCloseSkill }) => {
    return (
        <>
            
            <Separator>My Skills</Separator>
            <div className="list-container">
                {skills.map((skill, index) => {
                    return (
                        <SkillItem 
                            key={index} 
                            name={skill.name} 
                            level={skill.level}
                            changeTextOnHover={changeTextOnHover} 
                            onClick={() => handleSkill(skill)}
                        />
                    );
                })}
            </div>
            <p className="note-text">* Click on each skill for more information</p>

            {selectedSkill && (
                <div className="skill-info">
                    <InfoSkillContainer
                        title={selectedSkill.name}
                        text={selectedSkill.details}
                        imgLink={selectedSkill.imgLink}
                    />
                    <button className="close-button" onClick={handleCloseSkill}>Close</button>
                </div>

            )}
        </>
    );
}