import { useEffect, useState } from 'react';
import MyComment from './MyComment';
import MyGameReview from './MyGameReview';
import MyGudieList from './MyGuideList';
import MyNewsList from './MyNewsList';
import MyImg from './MyImg';
import { Link } from 'react-router';

const MyGameDetail = ({gameid}) => {

    const [game, setGame] = useState(null);
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingReview, setLoadingReview] = useState(true);
    
    useEffect(()=> {
        const fetchJobs = async () => {
            setLoading(true);
            const apiUrl = `/api/games/${gameid}`;
            const res = await fetch(apiUrl);
            const data = await res.json();
            setGame(data);
            setLoading(false);
        }

        const fetchReviews = async () => {
            try {
                setLoadingReview(true);
                const apiUrl = `/api/reviews/${gameid}`;
                const res = await fetch(apiUrl);
                if(res.ok){
                    const data = await res.json();
                    setReview(data);
                }
            } catch (error) {
                console.log("something went wrong when fetching reviews"+error);
            } finally {
                setLoadingReview(false);
            }
            
        }

        fetchJobs();
        fetchReviews();
    }, []);

    return (
        <div className="container">

            {loading ? <h3>Loading...</h3> : 
                <>
                    <section className="gameInfo">
                        <MyImg img={game.img} width = "25%"/>
                        <div>
                            <h1>{game.title}</h1>
                            <p>First Release {dateDesc(game.releaseDate)}</p>
                            <p>{platformToString(game.platforms)}</p>
                            {loadingReview ? <p>Score: Loading</p> : 
                                review === null ? <p>Score: N/A</p> : 
                                <p>Score: {review.score}</p>}
                            <Link className="editgame-btn" to={`/editgame/${game.id}`}>Edit Game</Link>
                        </div>
                        
                    </section>
                    <MyGameReview id={game.id}/>
                    <MyGudieList />
                    <MyComment id={game.id}/>
                    <MyNewsList />
                </>
                }
                
        </div>
    )
}

const platformToString = (platforms) => {
    const avaliablePlatforms = Object.entries(platforms).filter(([key, value], index) => value === true)
                                                            .map(([key, value], index) => key);
    return avaliablePlatforms.join(", ");
}

const dateDesc = (updateDateTime) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const d = new Date(updateDateTime);
        return `${monthNames[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}, ${d.getFullYear()}`
    };

export {MyGameDetail as default, dateDesc};