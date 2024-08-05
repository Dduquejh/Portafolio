import { Separator } from "../Separator";
import { ListComponent } from "../ListComponent";
import { InfoContainer } from "../InfoContainer";

export const HobbiesComponent = ({hobbies, selectedHobbie, handleHobbie, handleCloseHobbie}) => {
    return(
        <>
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
                <div className="hobbies-info">
                    <InfoContainer
                        title={selectedHobbie.title} 
                        text={selectedHobbie.details}
                        imgLink={selectedHobbie.imgLink}
                    />
                    <button className="close-button" onClick={handleCloseHobbie}>Close</button>
                </div>
            )

            }
        </>
    )
}