import React, { useState, useEffect } from 'react';


function PackSize(props) {

    const glazings = [
        { option:"Keep Original", adaption: 0},
        { option:"Sugar Milk", adaption: 0},
        { option:"Vanilla Milk", adaption: 0.5},
        { option:"Double Chocolate", adaption: 1.5},
    ];

    const [currentPackSize, setcurrentPackSize] = useState(1);
    const slice = props.position.type.slice(0, 3)
    const shortName = "set-" + slice.toLowerCase();
    const shortIdOne = "radio-" + slice.toLowerCase() + "-1";
    const shortIdThree = "radio-" + slice.toLowerCase() + "-3";
    const shortIdSix = "radio-" + slice.toLowerCase() + "-6";
    const shortIdTwelve = "radio-" + slice.toLowerCase() + "-12";

    const handlePackSizeChanges = (e) => {
        // Update the current glazing
        setcurrentPackSize(e.target.value);
        // Call the parent's callback function to update its state
      };
  
    useEffect(() => {
        // This code runs after each render, including when state changes
        glazings.forEach( glaze => {
        if(glaze.option.toLowerCase() == props.glazing.toLowerCase()){
                props.setSize(currentPackSize);
                props.setPrice((currentPackSize * (glaze.adaption  + props.position.price)).toFixed(2));
        }
        })    
    }, [currentPackSize]);

    return (

    <ul className="right-sec" onChange={(e) => handlePackSizeChanges(e)}>
        <li >  
                <input type="radio" name={shortName} value="1" id= {shortIdOne}/>
                <label for={shortIdOne}> 1 </label>
        </li>
        <li >
                <input type="radio" name={shortName} value="3" id= {shortIdThree}/> 
                <label for={shortIdThree}> 3 </label>
        </li>
        <li>
                <input type="radio" name={shortName} value="5" id= {shortIdSix}/>
                <label for={shortIdSix}>6</label>
        </li>
        <li>
                <input type="radio" name={shortName} value="10" id= {shortIdTwelve}/>
                <label for={shortIdTwelve}> 12 </label>
        </li>
    </ul>
  );
}

export default PackSize;
