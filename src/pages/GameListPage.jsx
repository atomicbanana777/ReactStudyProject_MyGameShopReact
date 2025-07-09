import MyGameList from "../components/MyGameList"
import { Link } from "react-router";

const GameListPage = () => {
    return (
        <div className="container">
            <MyGameList />
            <Link className="add-game-btn"to="/addgame">Add new game</Link>
        </div>
    )
}

export default GameListPage;