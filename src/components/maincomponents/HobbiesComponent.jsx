import { Separator } from "../Separator";
import { ListComponent } from "../ListComponent";
import { InfoHobbiesContainer } from "../InfoHobbiesContainer";

export const HobbiesComponent = ({hobbies, selectedHobbie, handleHobbie, handleCloseHobbie}) => {
    return(
        <>
            <Separator>Hobbies</Separator>

            <div className="list-container">
                {hobbies.map((hobby, index) => {
                    const iconLink = new URL(`../../assets/icons/${hobby.icon}`, import.meta.url).href;
                    return(
                    <ListComponent 
                        key={index} 
                        iconLink={iconLink}
                        onClick={() => handleHobbie(hobby)}
                    >
                        {hobby.title}
                    </ListComponent>)
                })}
            </div>
            <p className="note-text">* Click on each hobbie for more information</p>

            {selectedHobbie && (
                <div className="hobbies-info">
                    <InfoHobbiesContainer
                        title={selectedHobbie.title} 
                        text={selectedHobbie.details}
                        imgLink={new URL(`../../assets/img/${selectedHobbie.imgLink}`, import.meta.url).href}
                    />
                    <button className="close-button" onClick={handleCloseHobbie}>Close</button>
                </div>
            )

            }
        </>
    )
}