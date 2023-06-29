import "./checkoutitems.scss"

export default function CheckoutItems( {cartItem} ) {
    const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
        <div className="image-container">
            <img src={imageUrl} alt={`${name}`}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button"></div>
    </div>
  )
}
