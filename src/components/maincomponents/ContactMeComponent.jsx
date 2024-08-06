import { Separator } from "../Separator";
import { AccountItem } from "../AccountItem";

export const ContactMeComponent = ({account, email}) => {
    const subject = "Query from the portfolio";
    const body = "Hola, me gustaría saber más sobre...";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return(
        <>
            <Separator>Contact me</Separator>
            <div className="list-container">
                {account.map((account, index) => (
                    <AccountItem 
                        key={index} 
                        name={account.name}
                        iconLink={account.iconLink}
                        link={account.link}
                    />
                ))}
            </div>
            <p className="note-text">* Click on each account for see more about me</p>

            <div className="contact-info">
                <p>For inquiries, you can reach me at: <a href={`mailto:${email}`}>{email}</a></p>
                <a href={mailtoLink} className="contact-button">
                    Send Email
                </a>
            </div>
        </>
    )
}