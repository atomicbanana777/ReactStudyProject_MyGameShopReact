import { byteToFile, decodeBase64ToByteArray } from "../pages/AddGuidePage";

const MyImg = ({img, width = "100px"}) => {


    const handleError= (e) => {
        //src.imgBase64 to Byte
        if(img.imgBase64 != null && img.imgBase64 != ''){
            const arrayByte = decodeBase64ToByteArray(img.imgBase64);

            //Byte to file
            const url = byteToFile(arrayByte, img.imgType);

            e.target.src = url;

        }
        
    }

    return (
            <img src={img.path} onError={handleError} width={width}/>
    )
}

export default MyImg;