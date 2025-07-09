import MyGameDetail from "../components/MyGameDetail";
import { useParams } from "react-router";

const GameDetailPage = () => {
    const params = useParams();
    return (
        <MyGameDetail gameid={params.id}/>
    )
}

export default GameDetailPage;