import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/CreateSlice';

const Display = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [sortOrder, setSortOrder] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    let result = [...products];

    
    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brandName));
    }

 
    if (selectedColors.length > 0) {
      result = result.filter(p => selectedColors.includes(p.color));
    }

   
    if (sortOrder === 'asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [sortOrder, selectedBrands, selectedColors, products]);

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const uniqueBrands = [...new Set(products.map(p => p.brandName))];
  const uniqueColors = [...new Set(products.map(p => p.color))];

  return (
    <div>
     
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div>
          <h4>Brands</h4>
          {uniqueBrands.map(brand => (
            <label key={brand}>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              {brand}
              <br />
            </label>
          ))}
        </div>

        <div>
          <h4>Colors</h4>
          {uniqueColors.map(color => (
            <label key={color}>
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              {color}
              <br />
            </label>
          ))}
        </div>

        <div>
          <h4>Sort by Price</h4>
          <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value="">Select</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Color</th>
            <th>Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((key, index) => (
            <tr key={index}>
              <td>{key.productName}</td>
              <td>{key.brandName}</td>
              <td>{key.price}</td>
              <td>{key.color}</td>
              <td><button onClick={() => dispatch(addtocart(key))}>Add</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
