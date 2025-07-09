import { useEffect, useState } from "react";
import { dateWithoutSeconds } from "./AddGuidePage";
import {dateToISO8601} from '../components/AddCommentForm';
import ContentsEditor from '../components/ContentsEditor';
import { useNavigate, useParams } from "react-router";

const AddReviewPage = ({updateReviewSubmit}) => {

    const params = useParams();
    const navigate = useNavigate();
    const [author, setAuthor] = useState('');
    const [releaseDate, setReleaseDate] = useState(dateToISO8601(dateWithoutSeconds()));
    const [contents, setContents] = useState([{key : crypto.randomUUID(), tag : 'p', p : 'this a demo content'},
                                                    {key : crypto.randomUUID(), tag : 'p', p : 'this a demo content2'},
                                                     {key : crypto.randomUUID(), tag : 'img', img: {path : '/images/news/422a538cbb40d21e4344d749e45d911f.JPG', imgBase64 : '', imgType : ''}}
                                                ]);
    const [score, setScore] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            id: params.id,
            author,
            releaseDate,
            score,
            contents
        };

        updateReviewSubmit(newReview);

        navigate(`/games/${params.id}`);
    }

    return (
        <div className="container">
                <form className="add-game-form"  onSubmit={(e)=>handleSubmit(e)}>
                    <h1>Add Review Form</h1>
                    <div className="add-game-label">
                        <label>Review Author: </label>
                        <p className="required-label">required</p>
                    </div>
                    <input type="text" placeholder="Please enter the author name" required onChange={(e)=>setAuthor(e.target.value)}/>
                    
                    <div className="add-game-label">
                        <label>Review Publish Datetime: </label>
                        <p className="required-label">required</p>
                    </div>
                    <input type="datetime-local" required value={releaseDate} onChange={(e)=>setReleaseDate(e.target.value)}/>
                    
                    <div className="add-game-label">
                        <label>Score: </label>
                        <p className="required-label">required</p>
                    </div>
                    <select
                        id="score"
                        name="score"
                        required
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <div className="add-game-label">
                        <label>Review Article: </label>
                        <p className="required-label">required</p>
                    </div>
                    <ContentsEditor contents={contents} setContents={setContents}/>
                    
                    <input type="submit" value="Add Review"/>
                </form>
            </div>
    )
}

export default AddReviewPage;