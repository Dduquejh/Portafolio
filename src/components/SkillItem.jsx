import { useState } from 'react';

export const SkillItem = ({ name, level, changeTextOnHover, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const imgLink = new URL(`../assets/icons/${name}.png`, import.meta.url).href;

    return (
        <div 
            className="list-item skill-item"
            onMouseEnter={() => changeTextOnHover && setIsHovered(true)}
            onMouseLeave={() => changeTextOnHover && setIsHovered(false)}
            onClick={onClick}
        >
            <img src={imgLink} alt={`${name} icon`} className="icon-list" />
            <div className="text-content">
                <h2>{isHovered && changeTextOnHover ? level : name}</h2>
            </div>
        </div>
    );
}
