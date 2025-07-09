import { useEffect, useState } from 'react';
import NewsCard from "./NewsCard";

const MyNewList = () => {

    const [loading, setLoading] = useState(true);
    const [newses, setNewses] = useState(null);

    useEffect(
        () => {
            const fetchJobs = async () => {
                setLoading(true);
                const apiUrl = '/api/newses';
                const res = await fetch(apiUrl);
                const data = await res.json();
                setNewses(data);
                setLoading(false);
            }

            fetchJobs();  
        }
        , []);

    return (
        <section id="latestNews">
            <h2>Latest News</h2>
            <hr/>
            {loading? <h3>Loading...</h3> :
                <ul>
                    {newses.map((news) => (
                        <NewsCard key={news.id} news={news} />
                    ))}  
                </ul>
            }
            
        </section>
    )
}

export default MyNewList;