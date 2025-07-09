import { timeDesc } from "./NewsCard";
import { FaTrashAlt } from "react-icons/fa";

const CommentCard = ({comment, refreshComments}) => {
    
    const deleteComment = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = `/api/comments/${comment.id}`;
            const res = await fetch(apiUrl, {
                method : 'DELETE'
            })
            if(res.ok){
                refreshComments();
            }
        } catch (error) {
            console.log("something went wrong " + error);
        }
        return;
    }
    
    return (
        <li>
            <div className="userComment">
                <p className="userBlock">{comment.name}</p>
                <p className="commentBlock">{comment.content}</p>
                <button className="commentDel" onClick={(e) => deleteComment(e)}><FaTrashAlt/></button>
            </div>
            <p className="l-grey">{timeDesc(comment.date)}</p>
        </li>
    )
}

export default CommentCard;