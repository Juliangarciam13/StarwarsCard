import '../Styles/Card.css'
import StarwarsCards from './Characters';
import buttonImage from '../Media/buttonImg.png';
import shareIcon from '../Media/shareImg.png';
import moreIcon from '../Media/+Img.png';
import likeIcon from '../Media/likeImg.png';
import imgRobot from '../Media/robotImg.png';

const CardStarwars = () => {

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className='container'>
            <div className="containerCard">
                <div className="card">
                    <div className="informationCharacter">
                        <StarwarsCards />
                    </div>
                    <div className="buttons" style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className="buttonContainer">
                            <button onClick={handleReload}>
                                <img src={buttonImage} alt='button' style={{ width: '100%', height: '100%' }} />
                            </button>
                        </div>
                        <div className="icons" >
                            <img src={shareIcon} alt='share' />
                            <img src={moreIcon} alt='share' />
                            <img src={likeIcon} alt='share' />
                        </div>
                    </div>
                    <div className="imageCharacters">
                        <img src={imgRobot} alt='imgRobot' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardStarwars;