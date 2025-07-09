import { useLoaderData } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
import ContentsEditor from "../components/ContentsEditor";
import MyImgUpload from "../components/MyImgUpload";
import MyImg from "../components/MyImg";

const EditNewsPage = ({updateNews, deleteNews}) => {
    const news = useLoaderData();
    const navigate = useNavigate();
    const [title, setTitle] = useState(news.title);
    const [img, setImg] = useState(news.img);
    const [updateDateTime, setUpdateDateTime] = useState(news.updateDateTime);
    const [subTitle, setSubTitle] = useState(news.subTitle);
    const [author, setAuthor] = useState(news.author);
    const [contents, setContents] = useState(news.contents);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNews = {
            id : news.id,
            title,
            subTitle,
            author,
            updateDateTime,
            img,
            contents
        }

        updateNews(newNews);
        navigate('/');
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteNews(news.id);
        navigate('/');
    }

    return (
        <div className="container">
                <form className="add-game-form" onSubmit={handleSubmit}>
                    <h1>Edit News Form</h1>
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

                    <label>Current News Cover Image: </label>
                    <MyImg img={img} />

                    <label>News Cover Image: </label>
                    <MyImgUpload setImg={setImg} pathPrefix="/images/news" />

                    <input type="submit" value="Edit News" />
                    <button onClick={handleDelete}>Delete News</button>
                </form>
            </div>
    )
}

export default EditNewsPage;