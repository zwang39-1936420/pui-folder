import React, { useState } from 'react';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

function Index() {
    const products_one = [
        { id: 1, type: "Original", price: 2.49, glazing: "Keep Original", packSize: 1, imageSrc: "./assets/products/original-cinnamon-roll.jpg" },
        { id: 2, type: "Apple", price: 3.49, glazing: "Keep Original", packSize: 1, imageSrc: "./assets/products/apple-cinnamon-roll.jpg" },
        { id: 3, type: "Raisin", price: 2.99, glazing: "Keep Original", packSize: 1, imageSrc: "./assets/products/raisin-cinnamon-roll.jpg" },
    ];

    const products_two = [
        { id: 4, type: "Walnut", price: 3.49, glazing: "Keep Original", packSize: 1, imageSrc: "./assets/products/walnut-cinnamon-roll.jpg" },
        { id: 5, type: "Double-Chocolate", price: 3.99, glazing: "Keep Original", packSize: 1, imageSrc: "./assets/products/double-chocolate-cinnamon-roll.jpg" },
        { id: 6, type: "Strawberry", price: 3.99, glazing: "Keep Original", packSize: 1, imageSrc: "./assets/products/strawberry-cinnamon-roll.jpg" },
    ];

    const [showReminder, setShowReminder] = useState(false);
    const [currentPackSize, setCurrentPackSize] = useState(1);
    const [currentGlazing, setCurrentGlazing] = useState("Keep Original");
    const [currentType, setCurrentType] = useState("");
    const [totalPrice, setTotalPrice] = useState(0.0);
    const [copyCurrentPrice, setCopyCurrentPrice] = useState(0.0);
    const [currentCount, setCount] = useState(0.0);
    const [timerId, setTimerId] = useState(null);

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
            />
            <main>
                <ProductList 
                    products={products_one} 
                    size={currentPackSize} 
                    glazing={currentGlazing} 
                    price={totalPrice} 
                    count = {currentCount} 
                    timer = {startTimer}
                    setCount = {setCount} 
                    setType={setCurrentType} 
                    setGlaze={setCurrentGlazing} 
                    setSize={setCurrentPackSize} 
                    setPrice={setTotalPrice} 
                    setCopy={setCopyCurrentPrice} 
                />
                <ProductList 
                    products={products_two} 
                    size={currentPackSize} 
                    glazing={currentGlazing} 
                    price={totalPrice} 
                    count = {currentCount} 
                    timer = {startTimer}
                    setCount = {setCount} 
                    setType={setCurrentType} 
                    setGlaze={setCurrentGlazing} 
                    setSize={setCurrentPackSize} 
                    setPrice={setTotalPrice} 
                    setCopy={setCopyCurrentPrice} 
                />
            </main>
            <footer>
                <p>&copy; 2023 Bun Bun Bake Shop Website</p>
            </footer>
        </div>
    );

}

export default Index;