import React , {useState} from 'react';


function Glazing(props) {

    const glazings = [
        { option:"Keep Original", adaption: 0},
        { option:"Sugar Milk", adaption: 0},
        { option:"Vanilla Milk", adaption: 0.5},
        { option:"Double Chocolate", adaption: 1.5},
    ];
    const [currentGlaze, setCurrentGlaze] = useState(0);

    const handleGlazingChanges = (e) => {
        // Update the current glazing
        glazings.forEach( glaze => {
            console.log(glaze.option);
            if(glaze.option == e.target.value){
                setCurrentGlaze(glaze.adaption);
                // Call the parent's callback function to update its state
                props.setGlazing(glaze.adaption);
                console.log(currentGlaze);
                props.setCurrentPrice((props.size * (currentGlaze + props.position.price)).toFixed(2));
            }
            }
        )
      };
    
    return (
        <select className="dropdown" onChange={(e) => {handleGlazingChanges(e)}}>
            <option value="Keep original">Keep original</option>
            <option value="Sugar milk">Sugar milk</option>
            <option value="Vanilla milk">Vanilla milk</option>
            <option value="Double chocolate">Double chocolate</option>
        </select>
    );
}

export default Glazing;
