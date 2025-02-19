import React from 'react';


function PackSize(props) {
  
    const slice = props.position.type.slice(0, 3)
    const shortName = "set-" + slice.toLowerCase();
    const shortIdOne = "radio-" + slice.toLowerCase() + "-1";
    const shortIdThree = "radio-" + slice.toLowerCase() + "-3";
    const shortIdSix = "radio-" + slice.toLowerCase() + "-6";
    const shortIdTwelve = "radio-" + slice.toLowerCase() + "-12";

    return (

    <ul className="right-sec">
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
