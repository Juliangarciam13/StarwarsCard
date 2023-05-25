import { datesStarwars } from "../Helpers/HelperStarwars";
import { useState } from "react";

const StarwarsCards = () => {
    const [characters, setCharacters] = useState([]);

    const fetchData = async () => {
        try {
            const starwarsData = await datesStarwars();
            setCharacters(starwarsData);
        } catch (error) {
            console.error(error);
        }
    };

    if (characters.length === 0) {
        fetchData();
        return null;
    }

    const getRandomCharacter = () => {
        if (characters.length > 0) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            return characters[randomIndex];
        }
        return null;
    };

    const randomCharacter = getRandomCharacter();

    return (
        <div>
            {randomCharacter && (
                <div>
                    <h1 style={{color: '#ABCD9C', fontSize: '50px'}}>{randomCharacter.name}</h1>
                    <p>Eye color: {randomCharacter.eye_color}</p>
                    <p>Hair color: {randomCharacter.hair_color}</p>
                    <p>Height: {randomCharacter.height}</p>
                    <p>Birth year: {randomCharacter.birth_year}</p>
                </div>
            )}
        </div>
    );
};

export default StarwarsCards;