export const Separator = ({children}) => {
    return (
        <>
            <div className="separator-container">
                <hr className="separator-line"></hr>
                <h2 className="separator-title">{children}</h2>
                <hr className="separator-line"></hr>
            </div>
        </>
    );
}