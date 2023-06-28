import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Button from "../Button/index";

import CartItem from "../CartItem";

import "./cartdropdown.scss";
export default function CardDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
}
