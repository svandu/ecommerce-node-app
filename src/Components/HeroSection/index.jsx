import shoe from "../../assets/Images/shoe5.png"
import "./herosection.scss"

export default function HeroSection() {
  return (
    <div className="hero-section-container">
        <img src={shoe} className="shoe-image"/>
        <div className="product-details">
            <p className="product-name">Adidas Men Trainers</p>
            <p className="product-para">stylish trendy lightweight canvas casual high peak shoe</p>
            <div className="product-price"><p className="price">Rs.749/-</p> <span className="mrp">MRP</span> <span className="stroke-price">Rs. 4,599</span> <span className="discount-para">(83% off)</span></div>
            <p className="size-chart">select size</p>
            <div className="product-size">
              <div>5</div>
              <div className="size">6</div>
              <div className="size">7</div>
              <div className="size">8</div>
              <div className="size">9</div>
            </div>
            <button className="shop-now-btn">Shop Now</button>
        </div>
    </div>
  )
}