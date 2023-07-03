import dog_walk_image from '../dog_walk_image.avif'

function TitleBanner() {
    return(
        <div className="banner">
            <img type="image/avif" src={dog_walk_image} alt="A drawing of people in a park walking dogs and biking" className="bannerImage"></img>
            <div className="bannerText">
                <h1>DOG LOG</h1>
                <h2>AN APP FOR PROFESSIONAL DOG WALKERS</h2>
            </div>
        </div>
    )
}

export default TitleBanner;