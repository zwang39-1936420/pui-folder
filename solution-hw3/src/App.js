import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductList />
      </main>
      <footer>
        <p>&copy; 2023 Bun Bun Bake Shop Website</p>
      </footer>
    </div>
  );
}

export default App;
