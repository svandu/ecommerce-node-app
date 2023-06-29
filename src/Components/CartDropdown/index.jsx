import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Button from "../Button/index";

import CartItem from "../CartItem";

import "./cartdropdown.scss";
export default function CardDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const gotToCheckoutHandler = () => {
      navigate('./checkout')
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={gotToCheckoutHandler}>Go To Checkout</Button>
    </div>
  );
}
