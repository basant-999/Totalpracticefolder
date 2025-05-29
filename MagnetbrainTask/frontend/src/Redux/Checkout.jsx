import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Base_url from "../Config/Base_url";

const Checkout = () => {
  const product = useSelector((state) => state.addtocart.cart);
  const stripePromise = loadStripe("pk_test_51RKGV8I6Nv23y5n8CnPSGkkDTdti3DAKy5CKr9blkVJaYN3U0NZ5YAQSrPSMsSSn8yHWdeGx0LNhGWOwOSIbcpEz00lPNnsd4y");

  const handlePay = async () => {
    try {
      const stripe = await stripePromise;
      const api = `${Base_url}/payment/create-checkout-session`;

      const formattedProduct = product.map(item => ({
        name: item.name,
        brand: item.brand,
        price: item.price,
        quanty: item.quanty,  // must match backend
        defaultImage: `${Base_url}${item.defaultImage}`,  // full URL required
      }));

      const response = await axios.post(api, { Product: formattedProduct });
      const session = response.data;

      if (!session.id) {
        console.error("No session ID from backend:", session);
        return;
      }

      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        console.error("Stripe redirect error:", result.error.message);
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  let totalprice = 0;
  const rows = product.map((item, index) => {
    totalprice += item.price * item.quanty;
    return (
      <tr key={index}>
        <td><img src={`${Base_url}${item.defaultImage}`} alt="" width="80" height="60" /></td>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td>{item.price}</td>
        <td>{item.quanty}</td>
        <td>{item.price * item.quanty}</td>
      </tr>
    );
  });

  return (
    <>
      <h1 align="center">Your Checkout Page</h1>
      <div id="cartone">
        <Table striped bordered hover id="table">
          <thead>
            <tr>
              <th>Product Pic</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>

      <h4 align="center" style={{ color: "green", fontWeight: "bold" }}>
        Your Total Payable Amount : {totalprice}
      </h4>
      <div id="pay" style={{ textAlign: "center" }}>
        <Button onClick={handlePay}>Pay Now!</Button>
      </div>
    </>
  );
};

export default Checkout;
