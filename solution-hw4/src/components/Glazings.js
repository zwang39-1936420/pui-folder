import React , {useState, useEffect} from 'react';


function Glazing(props) {

    const glazings = [
        { option:"Keep Original", adaption: 0},
        { option:"Sugar Milk", adaption: 0},
        { option:"Vanilla Milk", adaption: 0.5},
        { option:"Double Chocolate", adaption: 1.5},
    ];
    const [currentGlaze, setCurrentGlaze] = useState(0.0);
    props.setGlazing(currentGlaze);

    const handleGlazingChanges = (e) => {
        // Update the current glazing
        glazings.forEach( glaze => {
            if(glaze.option.toLocaleLowerCase() == e.target.value.toLocaleLowerCase()){
                setCurrentGlaze(glaze.adaption);
                // Call the parent's callback function to update its stat
                // console.log(currentGlaze);  
            }
            }
        )
      };
    
    useEffect(() => {
    // This code runs after each render, including when state changes
    glazings.forEach( glaze => {
        if(glaze.adaption == currentGlaze){
            setCurrentGlaze(glaze.option);
        }
        }
    )
        props.setPrice((props.size * (currentGlaze + props.position.price)).toFixed(2));
    }, [currentGlaze]);

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
