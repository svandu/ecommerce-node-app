import shoe from "../../assets/Images/Hero-section-img.png"

export default function HeroSection() {
  return (
    <div className="hero-section-container">
        <img src={shoe}/>
        <div className="product-details">
            <p className="product-name">Adidas Men Trainers</p>
            <p className="product-price">Rs.14,999</p>
        </div>
    </div>
  )
}