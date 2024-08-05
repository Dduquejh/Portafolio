export const InfoProjectContainer = ({ title, text, imgLink, additonalInfo, repoLink}) => {
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
                <section className="section-container">
                    <h2>Technologies</h2>
                    <ul>
                        {additonalInfo.map((info, index) => {
                            return <li key={index}>{info}</li>
                        })}
                    </ul>
                </section>

            </main>
                <a className="close-button" href={repoLink} target="__blank">Visit the repositorio</a>
        </>
    );
}
