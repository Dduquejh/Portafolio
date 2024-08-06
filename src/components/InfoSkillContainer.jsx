export const InfoSkillContainer = ({title, text}) => {
    return(
        <>
            <main className="container">
                <section className="section-container">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </section>
            </main>
        </>
    )
}