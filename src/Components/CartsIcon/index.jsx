import { useContext } from "react";
import "./cartsicon.scss";
import { ReactComponent as CartIcon } from "../../assets/Icons/CartIcon.svg";
import { CartContext } from "../Context/CartContext";

export default function CartsIcon() {
  const { isCartOpen, setIsCartOpen} = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
        <CartIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
  )
}
