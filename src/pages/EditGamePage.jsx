import { useState } from "react";
import MyImgUpload from "../components/MyImgUpload";
import MyImg from "../components/MyImg";
import { useLoaderData, useNavigate } from "react-router";

const EditGamePage = ({updateGameSubmit, deleteGameSubmit}) => {

    const game = useLoaderData();
    const navigate = useNavigate();
    const [title, setTitle] = useState(game.title);
    const [description, setDescription] = useState(game.description);
    const [currentImg, setCurrentImg] = useState(game.img);
    const [newImg, setNewImg] = useState(null);
    const [releaseDate, setReleaseDate] = useState(game.releaseDate);
    const [PS4, setPS4] = useState(game.platforms.PS4);
    const [XONE, setXONE] = useState(game.platforms.XONE);
    const [PC, setPC] = useState(game.platforms.PC);
    const [PS5, setPS5] = useState(game.platforms.PS5);
    const [XBSX, setXBSX] = useState(game.platforms.XBSX);

    const handleSubmit = (e) => {
        e.preventDefault();

        const img = newImg !== null ? newImg : currentImg;

        const updatedGame = {
            id : game.id,
            title,
            description,
            img,
            releaseDate,
            platforms : {PS4, XONE, PC, PS5, XBSX}
        };

        updateGameSubmit(updatedGame);
        navigate('/games');
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteGameSubmit(game.id);
        navigate('/games');
    }

    return (
        <div className="container">
                <section>
                    <form className="add-game-form" onSubmit={(e) => handleSubmit(e)}>
                        <h1>Edit Game Form</h1>
                        <div className="add-game-label">
                            <label>Game Title: </label>
                            <p className="required-label">required</p>
                        </div>
                        <input type="text" placeholder="Please enter the game title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                        
                        <div className="add-game-label">
                            <label>Game Description: </label>
                            <p className="required-label">required</p>
                        </div>
                        <textarea placeholder="Please write game description here..." required value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                        
                        <div className="add-game-label">
                            <label>First Release Date: </label>
                            <p className="required-label">required</p>
                        </div>
                        <input type="date" required value={releaseDate} onChange={(e)=>setReleaseDate(e.target.value)}/>
                        
                        <label>Platform: </label>
                        <div className="select-platform">    
                            <div>PS4: <input type="checkbox" name="platform" checked={PS4} value="PS4" onChange={(e)=>setPS4(e.target.checked)}/></div>
                            <div>XONE: <input type="checkbox" name="platform" checked={XONE} value="XONE" onChange={(e)=>setXONE(e.target.checked)}/></div>
                            <div>PC: <input type="checkbox" name="platform" checked={PC} value="PC" onChange={(e)=>setPC(e.target.checked)}/></div>
                            <div>PS5: <input type="checkbox" name="platform" checked={PS5} value="PS5" onChange={(e)=>setPS5(e.target.checked)}/></div>
                            <div>XBSX: <input type="checkbox" name="platform" checked={XBSX} value="XBSX" onChange={(e)=>setXBSX(e.target.checked)}/></div>
                        </div>
                        
                        <label>Current Game Cover Image: </label>
                        <MyImg img={currentImg} width='50%'/>

                        <label>Update Game Cover Image: </label>
                        <MyImgUpload setImg={setNewImg} pathPrefix="/images"/>
                        <input type="submit" value="Edit Game" />

                        <button onClick={handleDelete}>Delete Game</button>
                    </form>
                </section>
            </div>
    )
}

export default EditGamePage;