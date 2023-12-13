import React, {useState}from 'react';
import './ImageUploadPopup.css';
import './ImageUploadAndCropPopup.js'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


function FileUploadArea(props) {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });

  const handleDragEnter = () => {
    props.setIsDragOver(true);
  };

  const handleDragLeave = () => {
    props.setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    props.setIsDragOver(false);

    // Handle the dropped files here
    const files = event.dataTransfer.files;
    if (files[0]) {
      // Update state with the selected file
      props.setSelectedFile(files[0]);
      setPopupOpen(true);
      setSrc(URL.createObjectURL(files[0]));
    }
    console.log('Dropped files:', files);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Update state with the selected file
      props.setSelectedFile(file);
      props.setIsDragOver(true);
      setPopupOpen(true);
      setSrc(URL.createObjectURL(file));
    }
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="input">

        { props.selectedFile ? (          
          <div className={`upload-lab ${props.isDragOver ? 'drag-over' : ''}`}>
              {/* <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                onDragEnter={handleDragEnter}
                onDragOver={preventDefault}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                accept="image/*"
              /> */}
            
            <div className='preview' >
              <button className="gen-button" onClick={props.handleFileRemove}>X</button>
              <div onClick={openPopup}>
                <p>Selected Image:</p>
                <img className='preview_img' src={URL.createObjectURL(props.selectedFile)} alt="Selected" />
              </div>
            </div>
          </div>) : (
          <label className={`upload-lab`}>
            Upload file
            <input
              type="file"ß
              id="fileInput"
              onChange={handleFileChange}
              onDragEnter={handleDragEnter}
              onDragOver={preventDefault}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              accept="image/*"
            />
          </label>)}
        {isPopupOpen && (
          <div className="image-popup">
            <div className="popup-content">
              <ReactCrop 
                crop={crop} 
                onChange={c => setCrop(c)}>
                <img src={URL.createObjectURL(props.selectedFile)} alt="Uploaded" />
              </ReactCrop>
              <button className="gen-button" onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
        {/* {isPopupOpen && (
            <ImageUploadAndCropPopup
              selectedFile={props.selectedFile}
              setSelectedFile={props.setSelectedFile}
              isPopupOpen={isPopupOpen}
              closePopup={closePopup}
              src={src}
              setSrc={setSrc}
              setPopupOpen={setPopupOpen}
            />
            )}   */}
        {props.selectedFile && <button className="upload-btn" onClick={props.handlePostRequest}>Submit</button>}

    </div>

  );
};

export default FileUploadArea;
