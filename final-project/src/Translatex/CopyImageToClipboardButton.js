import React, { useState, useRef } from 'react';
import { InlineMath } from 'react-katex';
import * as htmlToImage from 'html-to-image';
import ClipboardJS from 'clipboard';

function LatexCopyButton(props) {
  const [latex, setLatex] = useState(props.latexcode);
  const latexContainerRef = useRef(null);
  const [showReminder, setShowReminder] = useState(false);

  const handleCopy = () => {
    const node = latexContainerRef.current;

    // Convert the LaTeX container to an image
    htmlToImage.toPng(node)
      .then((dataUrl) => {
        // Copy the image to the clipboard
        const clipboard = new ClipboardJS('.copy-button', {
          text: () => dataUrl,
        });

        clipboard.on('success', (e) => {
          console.log('Image copied to clipboard:', e.text);
          clipboard.destroy();
        });

        clipboard.on('error', (e) => {
          console.error('Failed to copy image:', e.action);
          clipboard.destroy();
        });

        // Trigger the copy button click
        const copyButton = document.getElementById('copyButton');
        copyButton.click();
      })
      .catch((error) => {
        console.error('Failed to convert LaTeX to image:', error);
      });
  };

  return (
    <div>
      <div className ="hide-latex" ref={latexContainerRef}>
        <InlineMath>{latex}</InlineMath>
      </div>
      <button id="copyButton" className="copy-btn" onClick={handleCopy}>
        Copy LaTeX as Image
      </button>
      {showReminder && (
        <div className='copy-text'>
          Copied to clipboard
        </div>
      )}
    </div>
  );
};

export default LatexCopyButton;
