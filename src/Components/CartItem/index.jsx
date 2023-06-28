import "./cartitem.scss"
import Button from "../Button";

export default function CartItem({cartItem}) {
    const { name, quantity } = cartItem;
  return (
    <div>
        <h2>{name}</h2>
        <span>{quantity}</span>
    </div>
  )
}
