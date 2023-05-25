import '../Styles/Card.css'
const backgroundImage = require('../Media/BackgroundCard.png');

const CardStarwars = () => {
    return (
        <div className="containerCard" style={{backgroundImage: `url(${backgroundImage})` }}>
            <div className="card">
                <div className="informationCharacter">

                </div>
                <div className="imageCharacters">

                </div>
                <div className="caontainerButton">
                    <div className="buttonContainer">

                    </div>
                    <div className="icons">

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardStarwars;