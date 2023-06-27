import "./cartsicon.scss";
import { ReactComponent as CartIcon } from "../../assets/Icons/CartIcon.svg";

export default function CartsIcon() {
  return (
    <div className="cart-icon-container">
        <CartIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
  )
}
