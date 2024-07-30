export const InfoContainer = ({ title, text, imgLink }) => {
    const altImg = title + " image";
    return (
        <>
            <main className="container">
                <aside className="aside-container">
                    <img src={imgLink} alt={altImg} className="img-container"></img>
                </aside>
                <section className="section-container">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </section>
            </main>
        </>
    );
}
