import { useState } from "react";
import ContentsEditor from "../components/ContentsEditor";
import MyImgUpload from "../components/MyImgUpload";
import { dateWithoutSeconds } from "./AddGuidePage";
import { dateToISO8601 } from "../components/AddCommentForm";
import { useNavigate } from "react-router";

const AddNewsPage = ({postNewsSubmit}) => {

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [img, setImg] = useState(null);
    const [updateDateTime, setUpdateDateTime] = useState(dateToISO8601(dateWithoutSeconds()));
    const [subTitle, setSubTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [contents, setContents] = useState([{key : crypto.randomUUID(), tag : 'p', p : 'this a demo content'},
                                                    {key : crypto.randomUUID(), tag : 'p', p : 'this a demo content2'},
                                                     {key : crypto.randomUUID(), tag : 'img', img : {path : '/images/news/422a538cbb40d21e4344d749e45d911f.JPG', imgBase64 : '', imgType : ''} }
                                                ]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const newNews = {
            title,
            subTitle,
            author,
            updateDateTime,
            img,
            contents
        }
        postNewsSubmit(newNews);
        navigate('/');
    }

    return (
        <div className="container">
                <form className="add-game-form" onSubmit={handleSubmit}>
                    <h1>Add News Form</h1>
                    <div className="add-game-label">
                        <label>News Title: </label>
                        <p className="required-label">required</p>
                    </div>
                    <textarea id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}placeholder="Please enter the news title..." required></textarea>
                    
                    <div className="add-game-label">
                        <label>News Sub Title: </label>
                        <p className="required-label">required</p>
                    </div>
                    <textarea id="subTitle" name="subTitle" value={subTitle} onChange={(e)=>setSubTitle(e.target.value)} placeholder="Please enter the news sub title..." required></textarea>
                    
                    <div className="add-game-label">
                        <label>News Author: </label>
                        <p className="required-label">required</p>
                    </div>
                    <input id="author" name="author" type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="Please enter the news author" required/>
                    
                    <div className="add-game-label">
                        <label>News Publish Datetime: </label>
                        <p className="required-label">required</p>
                    </div>
                    <input id="updateDateTime" name="updateDateTime" type="datetime-local" value={updateDateTime} onChange={(e)=>setUpdateDateTime(e.target.value)} required/>
                    
                    <div className="add-game-label">
                        <label>News Article: </label>
                        <p className="required-label">required</p>
                    </div>
                    <ContentsEditor contents={contents} setContents={setContents}/>
                    
                    <label>News Cover Image: </label>
                    <MyImgUpload setImg={setImg} pathPrefix="/images/news" />

                    <input type="submit" value="Add News" />
                </form>
            </div>
    )
}

export default AddNewsPage;