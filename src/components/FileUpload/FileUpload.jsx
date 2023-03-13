import React from 'react'
import '../FileUpload/FileUpload.css'
import Gallery from '../../img/bc-gallery.svg';

const FileUpload = () => {
    return (
        <div className="br--file-upload">
            <input
                id="img"
                type="file"
                accept='image/*'
            ></input>
            <label className="br--file-upload__label" htmlFor="img">
                <img className="br--file-upload__image" src={Gallery} alt="gallery icon"
                />הוספת תמונה
            </label>
        </div>
    );
}

export default FileUpload;