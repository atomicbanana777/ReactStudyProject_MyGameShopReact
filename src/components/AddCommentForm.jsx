import { useState } from "react";
import { useNavigate } from "react-router";

const AddCommentForm = ({onAddedComment}) => {

    const [content, setContent] = useState(null);
    const [name, setName] = useState("John Doe");
    const navigate = useNavigate();

    const submitComment = (e) => {
        e.preventDefault();
        const date = new Date();
        const newComment = {
            name,
            content,
            date: dateToISO8601(date)
        }

        postServer(newComment);
        onAddedComment();
        
    }

    const postServer = async (newComment) => {
        const apiUrl = '/api/comments';
        const res = await fetch(apiUrl, {
            method : 'POST',
            header : {'Content-Type' : 'application/json'},
            body : JSON.stringify(newComment)
        });
        return;
    }

    return (
        <div className="container">
            <form className="add-game-form" onSubmit={submitComment}>
                <h1>New Comment</h1>
                <textarea onChange={(e)=> setContent(e.target.value)} placeholder="Please enter your comment" required/>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

const dateToISO8601 = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
}

export {AddCommentForm as default, dateToISO8601};