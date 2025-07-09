
import { useNavigate } from 'react-router';
import {dateToISO8601} from '../components/AddCommentForm';
import {useState, createElement} from 'react';
import ContentsEditor from '../components/ContentsEditor';
import MyImgUpload from '../components/MyImgUpload';

const AddGuidePage = ({postGuide}) => {

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

    const onSubmitGuide = (e) => {
        e.preventDefault();
        const newGuides = {
            title,
            img,
            releaseDate : updateDateTime,
            subTitle,
            author,
            contents
        };
        postGuide(newGuides);
        navigate('/');
    }

    return (
        <div className="container">
            <form className="add-game-form" onSubmit={onSubmitGuide}>
                        <h1>Add Guide Form</h1>
                        <div className="add-game-label">
                            <label>Guide Title: </label>
                            <p className="required-label">required</p>
                        </div>
                        <textarea id="title" name="title" onChange={(e)=>setTitle(e.target.value)} placeholder="Please enter the guide title..." required></textarea>
                        
                        <div className="add-game-label">
                            <label>Guide Sub Title: </label>
                            <p className="required-label">required</p>
                        </div>
                        <textarea id="subTitle" name="subTitle" onChange={(e)=>setSubTitle(e.target.value)} placeholder="Please enter the guide sub title..." required></textarea>
                        
                        <div className="add-game-label">
                            <label>Guide Author: </label>
                            <p className="required-label">required</p>
                        </div>
                        <input id="author" name="author" onChange={(e)=>setAuthor(e.target.value)} type="text" placeholder="Please enter the guide author" required/>
                        
                        <div className="add-game-label">
                            <label>Guide Publish Datetime: </label>
                            <p className="required-label">required</p>
                        </div>
                        <input id="updateDateTime" name="updateDateTime" onChange={(e)=>setUpdateDateTime(e.target.value)} value={updateDateTime} type="datetime-local" required/>
                        
                        <div className="add-game-label">
                            <label>Guide Article: </label>
                            <p className="required-label">required</p>
                        </div>
                        
                        <ContentsEditor contents={contents} setContents={setContents}/>
                        
                        <label>Guide Cover Image: </label>
                        <MyImgUpload setImg={setImg} pathPrefix="/images/guide"/>

                        <input type="submit" value="Add guide" />
                    </form>
        </div>
        
    )
}

const encodeToBase64 = (input) => {
        const byteArray = new Uint8Array(input);
        const encoded = btoa(byteArray);
        return encoded;
    }

const decodeBase64ToByteArray = (encoded) => {
    const decoded = atob(encoded);
    const result = new Uint8Array(decoded.split(','));
    return result;
}

const byteToFile = (input, imgType) => {
    const blob = new Blob([input], {type: imgType});
    const url = URL.createObjectURL(blob);
    return url;
}

const dateWithoutSeconds = () => {
        const now = new Date();
        now.setSeconds(0);
        return now;
}

export {AddGuidePage as default, encodeToBase64, decodeBase64ToByteArray, byteToFile, dateWithoutSeconds};