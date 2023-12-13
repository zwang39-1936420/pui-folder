import React, {useState, useEffect} from 'react';
import CopyToClipboardButton from './CopyToClipboardButton';
import LatexCopyButton from './CopyImageToClipboardButton.js';
import TranslationHistory from './TranslationHistory.js';
import FileUploadArea from './FileUploadArea';
import './style.css';

function MathEquationTranslation() {

  var Latex = require('react-latex');
  const ifHasLocalStorage = () => {
    if(localStorage.getItem("history")){
        console.log(JSON.parse(localStorage.getItem("history")));
        return JSON.parse(localStorage.getItem("history"));
    } 
    return [];
    }

  const [responseText, setResponseText] = useState('');
  const [latexContent, setLatexContent] = useState('E=mc^2');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [token, setToken] = useState('');
  const [history, setHistory] = useState(ifHasLocalStorage());



  const fetchData = async () => {
    try {
      const response = await fetch('https://translatex-backend-app-3dae282219b5.herokuapp.com/api/data');
      const result = await response.json();
      setToken(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleFileRemove = () => {
    // Remove the selected file by updating state to null
    setSelectedFile(null);
  };

  useEffect(() => {
    // Set the Latex Output
    if (responseText !== ''){
      setLatexContent(responseText.latex_styled);
    } 
  }, [responseText]);

  //Fetch a token in initial rendering.
  useEffect(() => {
    fetchData();
  }, []);


  const handlePostRequest = async () => {
    try {

      fetchData();
      console.log(token);
      const formData = new FormData();
      formData.append('file', selectedFile);

      const options = {
        math_inline_delimiters: ['$', '$'],
        rm_spaces: true,
      };

      formData.append('options_json', JSON.stringify(options));
      
      const response = await fetch('https://api.mathpix.com/v3/text', {
        method: 'POST',
        body: formData,
        headers: {
          'app_token': token,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setResponseText(responseData);
      setHistory([responseData.latex_styled, ...history]);
      console.log(responseData);
    } catch (error) {
      console.error('Error during POST request:', error);
    }
  };


  
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">Translatex</div>
        <div className="nav-links">
          {/* <button className="documentation-btn">History</button> */}
          <TranslationHistory 
            history = {history}
            setHistory = {setHistory}
          ></TranslationHistory>
        </div>
      </nav>

      <h1>TransLatex, Your Math Career saver</h1>
      <p id="headline">Upload equations you want to translate into Latex format!</p>

      <div className="main-content">
        <FileUploadArea 
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          handlePostRequest={handlePostRequest}
          isDragOver={isDragOver}
          setIsDragOver={setIsDragOver}
          handleFileRemove={handleFileRemove}
        />

        <div className="output">
          <div className="text-box-container">
            <p className='output-text'>{responseText.latex_styled}</p>
            <CopyToClipboardButton textToCopy = {responseText.latex_styled} buttonClass={"copy-btn"} textOnButton={"Copy"}></CopyToClipboardButton>
          </div>

          <div className="text-box-container">
            <div className='latexOutput'>
                <p>LaTeX formula preview: </p>
                <Latex>{`$${latexContent}$`}</Latex>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MathEquationTranslation;
