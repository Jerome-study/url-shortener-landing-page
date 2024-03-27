const cards = [
    {
        title: "Brand Recognition",
        description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help in still in confidence your content.",
        image: "/icon-brand-recognition.svg",
        css: null
    }, 
    {
        title: "Detailed Records",
        description: "Gain insights into two who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        image: "/icon-detailed-records.svg",
        css: "second"
    },
    {
        title: "Fully Customizable",
        description: "Improve brand awareness and content discoverability throught customizable links, supercharging audience engagement.",
        image: "/icon-fully-customizable.svg",
        css: "third"
    }
]

export const CardComponent = () => {
    return(
        <>
            <div className="grid-card  position-relative mb-4" style={{ gap: "4.75rem", zIndex: "999"}}>
                <div className="bg-cyan position-absolute line-card" style={{  marginInline: "auto", zIndex: "-1" }}>
                    
                </div>
                {cards.map((card, index) => {
                        return(
                            <div key={index} className={`${card?.css}`}>
                                <div className={`text-center text-lg-start px-3 px-lg-4 py-4 bg-white rounded-1`}>
                                    <div className="bg-dark-violet p-3 rounded-circle mx-auto" style={{ width: "fit-content", marginTop: "-3.5rem", marginBottom: "2.2rem"}}>
                                        <img width={40} src={card.image} alt="icons" />
                                    </div>
                                    <h4 className="mb-4 fw-700">{card.title}</h4>
                                    <p className="line-height display-6 fc-grayish-violet fw-500">{card.description}</p>
                                </div>
                            </div>
                        )
                })}
            </div>
        </>
    )
}