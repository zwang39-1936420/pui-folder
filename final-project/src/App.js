import React, { useEffect, useState } from 'react';
import MathEquationTranslation from './Translatex/MathEquationTranslation.js';

function App () {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/data');
      const result = await response.json();
      setData(result.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return(
    <div>
      <MathEquationTranslation />
      <div className="App">
        <header className="App-header">
          <h1>{data}</h1>
        </header>
      </div>
    </div>
  );
}

export default App;
