export const datesStarwars = async () => {
    
    const apiUrl = 'https://swapi.py4e.com/api/people'
    try {
        const databaseStarwars = await fetch(apiUrl,
            { method: 'GET' });
        const jsonDataStarwars = await databaseStarwars.json();
        const results = jsonDataStarwars.results;

        const newArrayPeople = results.map((result) => {
            return {
                'name': result.name,
                'eye_color': result['eye_color'],
                'hair_color': result['hair_color'],
                'height': result.height,
                'gender': result.gender,
                'birth_year': result['birth_year'],
            }
        });
        console.log(newArrayPeople);
        return newArrayPeople;

    } catch (error) {
        console.error(error);
    }
}

datesStarwars();