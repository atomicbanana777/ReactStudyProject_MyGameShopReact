import { useEffect, useState } from 'react';
import GameCard from './GameCard';

const MyGameList = ({isHomePage = false}) => {

    const [games, setGames] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(
        () => {
            const fetchJobs = async () => {
                setLoading(true);
                const apiUrl = isHomePage ? '/api/games?_limit=2' : '/api/games';
                const res = await fetch(apiUrl);
                const data = await res.json();
                setGames(data);
                setLoading(false);
            }

            fetchJobs();
        }
        , []);

    return(
        <section className={isHomePage? 'upComing' : 'game-list'}>
            {isHomePage? <h2>Upcoming Games</h2> : <h2>Game List</h2>}
            {loading ? <h3>Loading...</h3> : 
                <ul>
                    {games.map((game) => (
                        <GameCard key={game.id} game={game} isHomePage={isHomePage}/>
                    ))}
                </ul>
            }
            
        </section>
    )
}

export default MyGameList;