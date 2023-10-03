import React, { useState } from 'react';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import SearchBar from '../../components/SearchBar';

function Index() {
    const Rolls = [
        { id: 1, type: "Original", price: 2.49, glazing: "Keep Original", packSize: 1, imageSrc: "./assets/products/original-cinnamon-roll.jpg" },
        { id: 2, type: "Apple", price: 3.49, glazing: "Keep Original", packSize: 1, imageSrc: "./assets/products/apple-cinnamon-roll.jpg" },
        { id: 3, type: "Raisin", price: 2.99, glazing: "Keep Original", packSize: 1, imageSrc: "./assets/products/raisin-cinnamon-roll.jpg" },
        { id: 4, type: "Walnut", price: 3.49, glazing: "Keep Original", packSize: 1, imageSrc: "./assets/products/walnut-cinnamon-roll.jpg" },
        { id: 5, type: "Double-Chocolate", price: 3.99, glazing: "Keep Original", packSize: 1, imageSrc: "./assets/products/double-chocolate-cinnamon-roll.jpg" },
        { id: 6, type: "Strawberry", price: 3.99, glazing: "Keep Original", packSize: 1, imageSrc: "./assets/products/strawberry-cinnamon-roll.jpg" },
    ];




    
    const [showReminder, setShowReminder] = useState(false);
    const [currentCart, setCurrentCart] = useState([]);
    const [currentPackSize, setCurrentPackSize] = useState(1);
    const [currentGlazing, setCurrentGlazing] = useState("Keep Original");
    const [currentType, setCurrentType] = useState("");
    const [totalPrice, setTotalPrice] = useState(0.0);
    const [copyCurrentPrice, setCopyCurrentPrice] = useState(0.0);
    const [currentCount, setCount] = useState(0.0);
    const [dummieCounter, setDummieCounter] = useState(0);
    const [timerId, setTimerId] = useState(null);
    const [filteredItems, setFilteredItems] = useState();

    // // Function to add an element to the array
    // const addElementToCart = (id, type, glazing, size, price) => {
    //     const newElement = { id : id, type: type, glazing: glazing, size: size, price: price}; 
    //     setMyArray(prevArray => [...prevArray, newElement]);
    //   };

    const startTimer = () => {
        // Clear any existing timeout (if it exists)
        if (timerId) {
          clearTimeout(timerId);
        }
        setShowReminder(true);
        // Set a new timeout
        const newTimerId = setTimeout(() => {
            setShowReminder(false);
        }, 3000); // 3 seconds
    
        // Store the new timeout ID in state
        setTimerId(newTimerId);
      };

    return (
        <div className="App">
            <Header 
                toggle={showReminder} 
                type={currentType} 
                size={currentPackSize} 
                glazing={currentGlazing} 
                price={totalPrice} 
                currentPrice = {copyCurrentPrice} 
                count={currentCount} 
                cart = {currentCart}
            />
            <main>
                <hr></hr>
                {/* Add state to control the list of product  */}
                <SearchBar items={Rolls} /> 
                <ProductList 
                    products={Rolls} 
                    size={currentPackSize} 
                    glazing={currentGlazing} 
                    price={totalPrice} 
                    count = {currentCount} 
                    setCount = {setCount} 
                    setType={setCurrentType} 
                    setGlaze={setCurrentGlazing} 
                    setSize={setCurrentPackSize} 
                    setPrice={setTotalPrice} 
                    setCopy={setCopyCurrentPrice} 
                    setCart = {setCurrentCart}
                    timer = {startTimer}
                    dummie = {dummieCounter}
                    setDummieCounter = {setDummieCounter}
                />
            </main>
            <footer>
                <p>&copy; 2023 Bun Bun Bake Shop Website</p>
            </footer>
        </div>
    );

}

export default Index;