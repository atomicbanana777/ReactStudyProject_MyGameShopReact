import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import AddCommentForm from "./AddCommentForm";

const MyComment = ({id}) => {

    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(true);
    const [addComment, setAddComment] = useState(false);

    const fetchJobs = async () => {
        setLoading(true);
        const apiUrl = '/api/comments';
        const res = await fetch(apiUrl);
        const data = await res.json();
        setComments(data);
        setLoading(false);
    }

    const onAddedComment = () => {
        fetchJobs();
        setAddComment(false);
    }

    const onDeleteComment = () => {
        fetchJobs();
    }

    useEffect(() => {
        fetchJobs();
    }, [])

    return (
        <section className="gameComments">
            <h2>Comments</h2>
            {loading ? <h3>Loading...</h3> : 
                <ul>
                    {
                        comments.map((comment) => (
                            <CommentCard key={comment.id} comment={comment} refreshComments={onDeleteComment}/>
                        ))
                    }
                </ul>
            }

            {addComment != true ? <button className="add-comment-btn" onClick={() => setAddComment(true)}>Add Comment</button> :
                <AddCommentForm onAddedComment={onAddedComment}/>
            }
        </section>
    )
}

export default MyComment;