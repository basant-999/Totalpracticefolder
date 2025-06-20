import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/CreateSlice';

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch(); 

  useEffect(() => {
    fetch('https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const ans = products.map((key, index) => (
    <tr key={index}>
      <td>{key.productName}</td>
      <td>{key.brandName}</td>
      <td>{key.price}</td>
      <td>{key.color}</td>
      <td><button onClick={() => dispatch(addtocart(key))}>add</button></td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>brand</th>
          <th>price</th>
          <th>color</th>
          <th>addtocart</th>
        </tr>
      </thead>
      <tbody>{ans}</tbody>
    </table>
  );
};

export default Home;
