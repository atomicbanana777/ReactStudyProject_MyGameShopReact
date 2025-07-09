import { useState, useEffect } from "react";
import GuideCard from "./GuideCard";
import { Link } from "react-router";

    const MyGuideList = () => {
        const [guides, setGuides] = useState(null);
        const [loading, setLoading] = useState(true);
            
            useEffect(()=> {
                const fetchJobs = async () => {
                    setLoading(true);
                    const apiUrl = '/api/guides';
                    const res = await fetch(apiUrl);
                    const data = await res.json();
                    setGuides(data);
                    setLoading(false);
                }
        
                fetchJobs();
            }, []);
        return (
            <section className="gameGuide">
                <h2>Guide</h2>
                <hr/>
                {loading ? <h3>Loading...</h3> :
                    <ul>
                        {guides.map((guide) => (
                                <GuideCard key={guide.id} guide={guide} />
                        ))}
                    </ul>
                }
                <Link className="add-guide-btn" to="/addguides">Add Guide</Link>
            </section>
        )
    }

    export default MyGuideList;