import React, { useState } from 'react'
import '../file-upload/file-upload.css';
import Gallery from '../../img/bc-gallery.svg';

const FileUpload = () => {
    const [image, setImage] = useState(null);

    const imageHandler = (e) => {
        if (e.target.value.length !== 0) {
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    return (
        <div className="br--file-upload">
            <input
                onChange={imageHandler}
                id="img"
                type="file"
                accept='image/*'
            ></input>
            <label className="br--file-upload__label"
                htmlFor="img">
                <img className="br--file-upload__image"
                    src={Gallery}
                    alt="gallery icon"
                />הוספת תמונה
            </label>
            {image ? <img src={image} height="100" width="100" alt="user file upload" /> : ""}
        </div>
    );
}

export default FileUpload;