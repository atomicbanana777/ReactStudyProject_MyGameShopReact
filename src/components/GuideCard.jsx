import MyImg from "./MyImg";
import { timeDesc } from "./NewsCard";

const GuideCard = ({guide}) => {
    return (
        <li className="guideCard">
            <div className="guideHighlight">
                <MyImg img={guide.img}/>
                <div className="guideMessage">
                    <a href={`/guides/${guide.id}`}>{guide.title}</a>                                
                    <p>{guide.subTitle}</p>
                </div>    
            </div>
            <p className="l-grey">{timeDesc(guide.releaseDate)}</p>
            <hr/>
        </li>
    )
}

export default GuideCard;