import "./productcard.scss"
import Button from "../Button/index"

export default function ProductCard({product}) {
    const {name, price, imageUrl} = product;
  return (
    <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
 
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price"></span>
        </div>
        <Button type="button" buttonType="inverted">Add to cart</Button>
    </div>
  )
}
