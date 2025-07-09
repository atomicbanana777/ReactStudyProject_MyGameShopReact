import MyImg from '../components/MyImg';
import { encodeToBase64 } from '../pages/AddGuidePage';
import { FaTrashAlt, FaEdit, FaCopy, FaFileAlt, FaFileImage, FaAngleLeft} from "react-icons/fa";

const ContentsEditor = ({contents, setContents}) => {

    const handleChangeInputFile = (key, e) => {
        e.preventDefault();
        
        const file = e.target.files[0];
        const filePromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                resolve(e.target.result);
            };
            reader.readAsArrayBuffer(file);
        }).then((result) => {
                const encoded = encodeToBase64(result);
                const path = `/images/guide/${e.target.files[0].name}`;
                const imgType = e.target.files[0].type;

                const updateContents = contents.map((content) => {
                    if(content.key === key && content.tag === 'input-file') {
                        return {key : key, tag : 'input-file', path : path, imgBase64 : encoded, imgType : imgType}
                    }

                    return content;
                })
            setContents(updateContents);
        })

    }

    const handleChangeTextArea = (key, e) => {
        e.preventDefault();
        
        const updateContents = contents.map((content) => {
            if(content.key === key && content.tag === 'textarea') {
                return {key : key, tag : 'textarea', p : e.target.value}
            }

            return content;
        })
        setContents(updateContents);
    }

    const handleBackInputFile = (key, e) => {
        e.preventDefault();
        
        const updateContents = contents.map((content) => {
            if(content.key === key && content.tag === 'input-file') {
                return {key : key, tag : 'img', img : {path : content.path, imgBase64 : content.imgBase64, imgType : content.imgType}}
            }

            return content;
        })
        setContents(updateContents);
    }

    const handleBackTextArea = (key, e) => {
        e.preventDefault();
        
        const updateContents = contents.map((content) => {
            if(content.key === key && content.tag === 'textarea') {
                return {key : key, tag : 'p', p : content.p}
            }

            return content;
        })
        setContents(updateContents);
    }

    const handleEditP = (key, e) => {
        e.preventDefault();
        
        const updateContents = contents.map((content) => {
            if(content.key === key && content.tag === 'p') {
                return {key : key, tag : 'textarea', p : content.p}
            }

            return content;
        })
        setContents(updateContents);
    }

    const handleEditImg = (key, e) => {
        e.preventDefault();
        
        const updateContents = contents.map((content) => {
            if(content.key === key && content.tag === 'img') {
                return {key : key, tag : 'input-file', path : content.path, imgBase64 : content.imgBase64, imgType : content.imgType}
            }

            return content;
        })
        setContents(updateContents);
    }

    const handleDelete = (key, e) => {
        e.preventDefault();
        
        setContents(contents.filter((content)=> content.key!==key));
    }

    const handleAddAbove = (key, e) => {
        e.preventDefault();
        
        
        const index = contents.findIndex(content => content.key === key);

        

        const newContent = Object.assign({}, contents[index]);
        
        newContent.key = crypto.randomUUID();

        const newContents = Object.assign([], contents);
        newContents.splice(index, 0, newContent);
        setContents(newContents);

    }

    const handleAddImg = (key, e) => {
        e.preventDefault();
        
        
        const index = contents.findIndex(content => content.key === key);

        

        const newContent = {key : crypto.randomUUID(), tag : 'input-file', path : null, imgBase64 : null, imgType : null};
        const newContents = Object.assign([], contents);
        newContents.splice(index, 0, newContent);
        setContents(newContents);
    }

    const handleAddP = (key, e) => {
        e.preventDefault();
        
        
        const index = contents.findIndex(content => content.key === key);

        

        const newContent = {key : crypto.randomUUID(), tag : 'textarea', p : ''};
        const newContents = Object.assign([], contents);
        newContents.splice(index, 0, newContent);
        setContents(newContents)
    }

    return (
            <ul>
                {contents.map((content) => {
                    if (content.tag === 'p' ) {
                        return <li className="contentCard" key={content.key}>
                                    <p >{content.p}</p>
                                    <div className="contentCard-btns">
                                        <button onClick={(e) => handleEditP(content.key, e)}><FaEdit />Edit</button>
                                        <button onClick={(e) => handleDelete(content.key, e)}><FaTrashAlt />Delete</button>
                                        <button onClick={(e) => handleAddAbove(content.key, e)}><FaCopy />Duplicate</button>
                                        <button onClick={(e) => handleAddImg(content.key, e)}><FaFileImage />New Image</button>
                                    </div>
                                    
                                </li>
                    } else if (content.tag === 'img') {
                        return <li className="contentCard" key={content.key}>
                                    <MyImg img={content.img}/>
                                    <div className="contentCard-btns">
                                        
                                        <button onClick={(e) => handleEditImg(content.key, e)}><FaEdit />Edit</button>
                                        <button onClick={(e) => handleDelete(content.key, e)}><FaTrashAlt />Delete</button>
                                        <button onClick={(e) => handleAddAbove(content.key, e)}><FaCopy />Duplicate</button>
                                        <button onClick={(e) => handleAddP(content.key, e)}><FaFileAlt />New paragraph</button>
                                    </div>
                                    
                                </li>
                    } else if (content.tag === 'textarea') {
                        return <li className="contentCard" key={content.key}>
                                    <textarea value={content.p} onChange={(e) => handleChangeTextArea(content.key, e)}></textarea>
                                    <div className="contentCard-btns">
                                        <button onClick={(e) => handleBackTextArea(content.key, e)}><FaAngleLeft />Back</button>
                                    </div>
                                    
                                </li>
                    } else if (content.tag === 'input-file') {
                        return <li className="contentCard" key={content.key}>
                                    <input type="file" accept="image/*" onChange={(e) => handleChangeInputFile(content.key, e)}/>
                                    <div className="contentCard-btns">
                                        <button onClick={(e) => handleBackInputFile(content.key, e)}><FaAngleLeft />Back</button>
                                    </div>
                                </li>
                    }
                })}
            </ul>
        )
}

export default ContentsEditor;