import { useState, useEffect } from "react";
import { dateDesc } from "./MyGameDetail";
import { Link } from "react-router";
import {contentToHTML} from "../components/MyGuideDetail"

const MyGameReview = ({id}) => {

    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(()=> {
        const fetchJobs = async () => {
            try {
                setLoading(true);
                const apiUrl = `/api/reviews/${id}`;
                const res = await fetch(apiUrl);
                if(res.ok) {
                    const data = await res.json();
                    setReview(data);
                }
            } catch (error) {
                console.log("something with wrong " + error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);

    return (
        <section className="gameReview">
            
            <h2>Review</h2>
            {loading ? <h3>Loading...</h3> :
                error || review === null ?
                <>
                    <p>no review yet</p>
                    <Link className="add-review-btn" to={`/addreviews/${id}`}>Add Review</Link>
                </>
                : 
                <>
                    <p>by {review.author}</p>
                    <p>Review Date: {dateDesc(review.releaseDate)}</p>
                    <hr/>
                    {review.contents.map(
                        (content) => contentToHTML(content)
                    )}
                    <Link className="add-review-btn" to={`/editreviews/${id}`}>Edit Review</Link>
                </>
            }
            
        </section>
    )
}

export default MyGameReview;