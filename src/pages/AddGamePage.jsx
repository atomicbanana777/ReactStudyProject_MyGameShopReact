import { useState } from "react";
import MyImgUpload from "../components/MyImgUpload";
import { useNavigate } from "react-router";

const AddGamePage = ({postGameSubmit}) => {

    const navigate = useNavigate();
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [img, setImg] = useState(null);
    const [releaseDate, setReleaseDate] = useState(null);
    const [PS4, setPS4] = useState(false);
    const [XONE, setXONE] = useState(false);
    const [PC, setPC] = useState(false);
    const [PS5, setPS5] = useState(false);
    const [XBSX, setXBSX] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newGame = {
            title,
            description,
            img,
            releaseDate,
            platforms : {PS4, XONE, PC, PS5, XBSX}
        };

        console.log(newGame);
        postGameSubmit(newGame);
        navigate('/games');
    }

    return (
        <div className="container">
                <section>
                    <form className="add-game-form" onSubmit={(e) => handleSubmit(e)}>
                        <h1>Add Game Form</h1>
                        <div className="add-game-label">
                            <label>Game Title: </label>
                            <p className="required-label">required</p>
                        </div>
                        <input type="text" placeholder="Please enter the game title" required onChange={(e) => setTitle(e.target.value)}/>
                        
                        <div className="add-game-label">
                            <label>Game Description: </label>
                            <p className="required-label">required</p>
                        </div>
                        <textarea placeholder="Please write game description here..." required onChange={(e)=>setDescription(e.target.value)}></textarea>
                        
                        <div className="add-game-label">
                            <label>First Release Date: </label>
                            <p className="required-label">required</p>
                        </div>
                        <input type="date" required onChange={(e)=>setReleaseDate(e.target.value)}/>
                        
                        <label>Platform: </label>
                        <div className="select-platform">    
                            <div>PS4: <input type="checkbox" name="platform" value="PS4" onChange={(e)=>setPS4(e.target.checked)}/></div>
                            <div>XONE: <input type="checkbox" name="platform" value="XONE" onChange={(e)=>setXONE(e.target.checked)}/></div>
                            <div>PC: <input type="checkbox" name="platform" value="PC" onChange={(e)=>setPC(e.target.checked)}/></div>
                            <div>PS5: <input type="checkbox" name="platform" value="PS5" onChange={(e)=>setPS5(e.target.checked)}/></div>
                            <div>XBSX: <input type="checkbox" name="platform" value="XBSX" onChange={(e)=>setXBSX(e.target.checked)}/></div>
                        </div>
                        
                        <label>Game Cover Image: </label>
                        <MyImgUpload setImg={setImg} pathPrefix="/images"/>
                        <input type="submit" value="Add Game" />
                    </form>
                </section>
            </div>
    )
}

export default AddGamePage;