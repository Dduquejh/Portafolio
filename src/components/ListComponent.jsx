export const ListComponent = ({ iconLink, children, className, onClick }) => {
    const altIcon = children + " icon";
    return (
        <div className={`list-item ${className}`} onClick={onClick}>
            <img src={iconLink} alt={altIcon} className="icon-list" />
            <div className="text-content">
                <h2>{children}</h2>
            </div>
        </div>
    );
};
