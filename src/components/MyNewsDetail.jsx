import { useState, useEffect } from "react";
import { timeDesc } from "./NewsCard";
import { contentToHTML } from "./MyGuideDetail";
import MyComment from "./MyComment";
import MyNewList from "./MyNewsList";
import { Link } from "react-router";

const MyNewsDetail = ({id}) => {

    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchJobs = async () => {
            setLoading(true);
            const apiUrl = `/api/newses/${id}`;
            const res = await fetch(apiUrl);
            const data = await res.json();
            setNews(data);
            setLoading(false);
        }

        fetchJobs();
    }, [])

    return (
        <div className="container">
            {loading ? <h3>Loading...</h3> :
                <>
                    <section>
                        <h1 className="news-title">{news.title}</h1>
                        <h3 className="news-sub-title">{news.subTitle}</h3>
                        <hr className="news-line" />
                        <p className="news-info">By {news.author} on {timeDesc(news.updateDateTime)}</p>
                        <Link className="news-btn"to={`/editnews/${news.id}`}>Edit News</Link>
                        <div className="news-content">
                            {news.contents.map(
                                (content) => contentToHTML(content)
                            )}
                        </div>
                    </section>
                    <MyComment />
                    <MyNewList />
                </>
                
            }
            </div>
    )
}

export default MyNewsDetail;