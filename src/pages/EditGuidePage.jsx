import { useNavigate, useLoaderData } from "react-router";
import { useState } from "react";
import ContentsEditor from "../components/ContentsEditor";
import MyImgUpload from "../components/MyImgUpload";
import MyImg from "../components/MyImg";

const EditGuidePage = ({updateGuide, deleteGuide}) => {

    const guide = useLoaderData();
    const navigate = useNavigate();
    const [title, setTitle] = useState(guide.title);
    const [img, setImg] = useState(guide.img);
    const [releaseDate, setReleaseDate] = useState(guide.releaseDate);
    const [subTitle, setSubTitle] = useState(guide.subTitle);
    const [author, setAuthor] = useState(guide.author);
    const [contents, setContents] = useState(guide.contents);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newGuide = {
            id : guide.id,
            title,
            subTitle,
            author,
            releaseDate,
            img,
            contents
        }
        updateGuide(newGuide);
        navigate('/');
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteGuide(guide.id);
        navigate('/');
    }

    return (
        <div className="container">
                <form className="add-game-form" onSubmit={handleSubmit}>
                    <h1>Edit Guide Form</h1>
                    <div className="add-game-label">
                        <label>Guide Title: </label>
                        <p className="required-label">required</p>
                    </div>
                    <textarea id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}placeholder="Please enter the guide title..." required></textarea>
                    
                    <div className="add-game-label">
                        <label>Guide Sub Title: </label>
                        <p className="required-label">required</p>
                    </div>
                    <textarea id="subTitle" name="subTitle" value={subTitle} onChange={(e)=>setSubTitle(e.target.value)} placeholder="Please enter the guide sub title..." required></textarea>
                    
                    <div className="add-game-label">
                        <label>Guide Author: </label>
                        <p className="required-label">required</p>
                    </div>
                    <input id="author" name="author" type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="Please enter the guide author" required/>
                    
                    <div className="add-game-label">
                        <label>Guide Publish Datetime: </label>
                        <p className="required-label">required</p>
                    </div>
                    <input id="releaseDate" name="releaseDate" type="datetime-local" value={releaseDate} onChange={(e)=>setReleaseDate(e.target.value)} required/>
                    
                    <div className="add-game-label">
                        <label>Guide Article: </label>
                        <p className="required-label">required</p>
                    </div>
                    <ContentsEditor contents={contents} setContents={setContents}/>

                    <label>Current Guide Cover Image: </label>
                    <MyImg img={img} />

                    <label>Guide Cover Image: </label>
                    <MyImgUpload setImg={setImg} pathPrefix="/images/guide" />

                    <input type="submit" value="Edit Guide" />
                    <button onClick={handleDelete}>Delete Guide</button>
                </form>
            </div>
    )
}

export default EditGuidePage;