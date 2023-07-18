import CardsReact from "./CardsReact"

const CardsCollection = () => {
    const cards = [
        {
            id: 0,
            title: "Crazy cloud",
            text: "This is a collection of very cool clouds",
            buttonText: "CLICK ME",
            imgsrc: "https://img.freepik.com/free-photo/dramatic-white-clouds-blue-sky-from-airplane-window-view-colorful-sunset-cloudscape-background_90220-1208.jpg"
        },
        {
            id: 1,
            title: "Waves",
            text: "Colorful waves, crazy",
            buttonText: "DO NOT CLICK ME",
            imgsrc: "https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg"
        },
        {
            id: 2,
            title: "Nature",
            text: "Nice",
            buttonText: "To be Continued",
            imgsrc: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000"
        }

    ]
    return(
        <div className="CardsGallery">
            {//Basically loops over the cards Array and renderes each item using the template 
            cards.map((card) => (
                    <CardsReact key={card.id} cardTemplate={card}/>
            ))}
        </div>
    )
}

export default CardsCollection