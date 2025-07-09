import MyGuideDetail from "../components/MyGuideDetail"
import { useParams } from "react-router";

const GudieDetailPage = () => {
    const params = useParams();
    return (
        <MyGuideDetail id={params.id}/>
    )
}

export default GudieDetailPage;