import React from 'react'
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Base_url from '../Config/Base_url';
import { incrementqut, dicrementqut, removefromcart } from './CardSlice';
import { useNavigate } from 'react-router-dom';

const CartInsert = () => {
  const cart = useSelector(state => state.addtocart.cart);
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

    let totalprice = 0;
    for(let item of cart){
      totalprice+=item.price*item.quanty
    }

  return (
    <div className="container mt-4">
      <h3>Your Cart</h3> totalprice: {totalprice}
      <hr />
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center mb-3 border p-2 rounded">
            <div className="d-flex align-items-center">
              <img
                src={`${Base_url}${item.defaultImage}`}
                alt={item.name}
                style={{ width: "70px", height: "70px", objectFit: "cover", marginRight: "15px", borderRadius: "5px" }}
              />
              <div>
                <strong>{item.name}</strong><br />
                ₹{item.price*item.quanty}
              </div>
            </div>
            <div className="d-flex align-items-center">
              <Button variant="secondary" size="sm" onClick={() => dispatch(dicrementqut(item._id))}>-</Button>
              <span className="mx-2">{item.quanty}</span>
              <Button variant="secondary" size="sm" onClick={() => dispatch(incrementqut(item._id))}>+</Button>
              <Button
                variant="danger"
                size="sm"
                className="ms-3"
                onClick={() => dispatch(removefromcart(item._id))}
              >
                Delete
              </Button>
            </div>
          </div>
        ))
      )}
      <div className="mt-3">
        <Button variant="success" onClick={() => navigate("/checkout")}>Checkout</Button>
      </div>
    </div>
  );
}

export default CartInsert;
