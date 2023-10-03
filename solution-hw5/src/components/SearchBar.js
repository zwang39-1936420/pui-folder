import React, { useState, useEffect} from 'react';

function SearchBar({ items }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [returnedItems, setReturnedItems] = useState(items);
  

  // Filtering logic
    const filterItems = () => {
        const filtered = items.filter((item) =>
        item.type.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setReturnedItems(filtered);
    };

    const handleFilterChanges = (e) => {
        const filteredList = (e.target.value == "name") ? (
            console.log(sortByNameAscending(items))
        ):( console.log(sortByPrice(items)));

    }
    
    function sortByNameAscending(items) {
        return items.slice().sort((a, b) => {
          const nameA = a.type.toLowerCase();
          const nameB = b.type.toLowerCase();
            
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      function sortByPrice(items) {
        return items.slice().sort((a, b) => {
            const nameA = a.price;
            const nameB = b.price;
              
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
      }
    
    useEffect(() => {
        // send Filtered items back
    }, [returnedItems]);

  return (
    <div className='search-bar'>
        {/* Search input field */}
        <input
            id = "search-bar"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button onClick={filterItems}>Search</button>
        <p> Sort By</p>
        <select onChange={(e) => {handleFilterChanges(e)}}>
            <option value="name">Name</option>
            <option value="base price">Base Price</option>
        </select>
    </div>
  );
}

export default SearchBar;
