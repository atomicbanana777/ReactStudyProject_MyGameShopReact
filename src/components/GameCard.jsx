import { useState } from "react";
import { Link } from "react-router";
import MyImg from "./MyImg";

const GameCard = ({game, isHomePage = false}) => {

    const [showFulldesc, setShowFulldesc] = useState(false);

    const desc = (description) => {
        if(description.length > 90 && !showFulldesc) {
            return description.substring(0, 90) + '...';
        } else {
            return description;
        }
    }

    return (
        <li className={isHomePage? 'gameCard' : 'game-list-card'}>
            <Link to={`/games/${game.id}`}>
                <MyImg img={game.img}/>
            </Link>
            <div className="gameCardDis">
                <h3>{game.title}</h3>
                <p>{desc(game.description)}
                    {game.description.length > 90 && <button onClick={() => setShowFulldesc((preState) => !preState)}>{showFulldesc ? 'less' : 'more'}</button>}
                </p>
            </div>
        </li>
        )
}

export default GameCard;