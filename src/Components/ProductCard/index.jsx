import { useContext } from "react";

import "./productcard.scss"

import { CartContext } from "../Context/CartContext";
import Button from "../Button/index"

export default function ProductCard({product}) {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
 
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button type="button" buttonType="inverted" onClick={addProductToCart}>Add to cart</Button>
    </div>
  )
}
