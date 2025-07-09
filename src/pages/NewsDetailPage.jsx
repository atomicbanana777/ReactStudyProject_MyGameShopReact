import { useParams } from "react-router";
import MyNewsDetail from "../components/MyNewsDetail"

const NewsDetailPage = () => {
    const param = useParams();
    return (
        <MyNewsDetail id={param.id} />
    )
}

export default NewsDetailPage;