import MyGameList from "../components/MyGameList";
import MyNewList from "../components/MyNewsList";

const HomePage = () => {
    return (
        <div className="container">
            <div className="myPanel">
            <MyGameList isHomePage='true'/>
            <MyNewList />
            </div>
        </div>
        
    )
}

export default HomePage;