import { useEffect, useState } from "react";
import { timeDesc } from "./NewsCard";
import { Link } from "react-router";
import MyComment from "./MyComment";
import MyGuideList from "./MyGuideList";
import MyImg from "./MyImg";

const MyGuideDetail = ({id}) => {
    
    const [guide, setGuide] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            const apiUrl = `/api/guides/${id}`;
            const res = await fetch(apiUrl);
            const data = await res.json();
            setGuide(data);
            setLoading(false);
        }

        fetchJobs();
    }, [])

    return (
        <div className="container">
            {loading ? <h3>Loading...</h3> : 
                <>
                    <section>
                        <h1 className="news-title">{guide.title}</h1>
                        <h3 className="news-sub-title">{guide.subTitle}</h3>
                        <hr className="news-line"/>
                        <p className="news-info">By {guide.author} on {timeDesc(guide.releaseDate)}</p>
                        <Link className="news-btn"to={`/editguides/${guide.id}`}>Edit Guide</Link>
                        <br/>
                        <div className="news-content">
                            {guide.contents.map(
                                (content) => contentToHTML(content)
                            )}
                        </div>
                    </section>
                    
                    <MyComment />

                    <MyGuideList />
                </>
            }
        </div>
    )
}

const contentToHTML = (content) => {
        try {
            const key = content.key;
            if(content.tag === "p"){
                return <div key={key}>
                            <p>{content.p}</p>
                            <br/>
                        </div>;
            }
            if(content.tag === "img"){
                return <div key={key}>
                            <MyImg img={content.img} width="50%"/>
                            <br/>
                        </div>;
            }
        } catch (error) {
            console.log("something wrong " + error);
        }
        
    }

export {MyGuideDetail as default, contentToHTML};