import { encodeToBase64 } from '../pages/AddGuidePage';
import { useState } from 'react';

const MyImgUpload = ({setImg, pathPrefix}) => {

    const [previewImg, setPreviewImg] = useState(null);

    const onFileUpload = (e) => {
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
                const cachURL = URL.createObjectURL(e.target.files[0]);
                const path = (`${pathPrefix}/${e.target.files[0].name}`);
                const imgType = (e.target.files[0].type);
                setPreviewImg(cachURL);
                const newImg = {
                    path : path,
                    imgType,
                    imgBase64 : encoded
                };
                setImg(newImg);
            })
        }

    return (
        <div className="img-upload">
            <input type="file" id="img" name="img" onChange={onFileUpload} accept="image/*" />
            {previewImg != null && <img src={previewImg} width="60%"/> }
        </div>
        
    )
}

export default MyImgUpload;