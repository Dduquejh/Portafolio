export const ContactItem = ({ name, iconLink, link }) => {
    const altIcon = name + " contact";
    return (
        <div className="list-item contact-item" onClick={() => window.open(link.startsWith('http') ? link : `https://${link}`, "_blank")}>
            <img src={iconLink} alt={altIcon} className="icon-list" />
            <div className="text-content">
                <h2>{name}</h2>
            </div>
        </div>
    );
}
