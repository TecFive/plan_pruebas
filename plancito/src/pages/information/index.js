import React, { useState, useEffect } from 'react';
import './Information.css';

const Information = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const heroNames = ['iron man', 'captain america', 'thor', 'hulk', 'black widow', 'hawkeye', 'scarlet witch', 'vision', 'black panther', 'falcon'];
                const heroData = await Promise.all(heroNames.map(name => fetch(`https://www.superheroapi.com/api.php/2644435039038470/search/${name}`).then(response => response.json())));
                setHeroes(heroData.map(hero => hero.results[0]));
            } catch (error) {
                console.error('Error fetching hero data:', error);
            }
        };

        fetchHeroes();
    }, []);

    return (
        <div className="hero-grid">
            {heroes.map(hero => (
                <div key={hero.id} className="hero-card">
                    <h2>{hero.name}</h2>
                    <img src={hero.image.url} alt={hero.name} />
                    <p/>
                    <p>Height: {hero.appearance.height[1]}</p>
                    <p>Weight: {hero.appearance.weight[1]}</p>
                    <p>Race: {hero.appearance.race}</p>
                    <p>Gender: {hero.appearance.gender}</p>
                </div>
            ))}
        </div>
    );
};

export default Information;