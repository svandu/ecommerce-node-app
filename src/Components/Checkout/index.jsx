import "./checkout.scss";

import { useContext } from "react";

import CheckoutItems from "../CheckoutItems";
import { CartContext } from "../Context/CartContext";

export default function Checkout() {
  const { cartItems, cartTotal } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <CheckoutItems key={cartItem.id} cartItem={cartItem}/>
        );
      })}
      <span className="total">Total : ${cartTotal} </span>
    </div>
  );
} 
