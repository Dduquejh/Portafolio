import { Separator } from "../Separator";
import { ContactItem } from "../ContactItem";

export const ContactMeComponent = ({contact}) => {
    return(
        <>
            <Separator>Contact me</Separator>
            <div className="list-container">
                {contact.map((contact, index) => (
                    <ContactItem 
                        key={index} 
                        name={contact.name}
                        iconLink={contact.iconLink}
                        link={contact.link}
                    />
                ))}
            </div>
        </>
    )
}