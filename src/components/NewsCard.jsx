import MyImg from "./MyImg";

const NewsCard = ({news}) => {

    return (
        <li className="newsCard">
            <div className="newsHighlight">
                <a href={`/newses/${news.id}`}>
                    <h3>{news.title}</h3>
                </a>
                
                <MyImg img={news.img} />
            </div>
            <p>{timeDesc(news.updateDateTime)}</p>
            <hr/>
        </li>
    )
}

const timeDesc = (updateDateTime) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date(updateDateTime);
        const current = new Date();
        const diff = current - d;
        const diff_weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
        const diff_days = Math.round(diff / (1000 * 60 * 60 * 24));
        const diff_hour = Math.round(diff / (1000 * 60 * 60));
        const diff_min = Math.round(diff / (1000 * 60));

        if(diff_weeks != 0 && diff_weeks < 4){
        return diff_weeks === 1 ? `${diff_weeks} week ago` : `${diff_weeks} weeks ago`;
        } else if(diff_days != 0 && diff_days < 7){
            return diff_days === 1 ? `${diff_days} day ago` : `${diff_days} days ago`;
        } else if(diff_hour != 0 && diff_hour < 24){
            return diff_hour === 1 ? `${diff_hour} hour ago` : `${diff_hour} hours ago`;
        } else if(diff_min != 0 && diff_min < 60){
            return  diff_min === 1 ? `${diff_min} minute ago` : `${diff_min} minutes ago`;
        } else if(diff_min === 0) {
            return 'just now';
        } else {
            return `${String(d.getDate()).padStart(2, '0')}-${monthNames[d.getMonth()]}-${d.getFullYear()}
             ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
        }
    };

export {NewsCard as default, timeDesc};