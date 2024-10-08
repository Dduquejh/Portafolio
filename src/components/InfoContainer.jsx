export const InfoContainer = ({ title, text, imgLink}) => {
    const altImg = title + " image";
    const linkImg = new URL(`../assets/img/${imgLink}`, import.meta.url).href;
    return (
        <>
            <main className="container">
                <aside className="aside-container">
                    <img src={linkImg} alt={altImg} className="img-container"></img>
                </aside>
                <section className="section-container">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </section>
            </main>
        </>
    );
}
