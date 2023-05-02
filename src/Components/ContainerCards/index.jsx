import card1 from "../../assets/Images/card1.jpg";
import card2 from "../../assets/Images/card2.jpg";
import card3 from "../../assets/Images/card3.jpg";
import card4 from "../../assets/Images/card4.jpg";

import "./containercards.scss"

export default function ContainerCards() {
  const cards = [
    {
      img: card1,
      about: "Buick Men Printed Sneakers",
      price: "Rs. 1,849/-",
    },
    {
        img: card2,
        about: "Highlender Men Sneakers",
        price: "Rs. 1,499/-",
    },
    {
        img: card3,
        about: "Shoetopia Women Sneakers",
        price: "Rs. 799/-",
    },
    {
        img: card4,
        about: "Roadster Men Black Tester",
        price: "Rs. 2,599/-",
    },
  ];

  return (
      <div className="cards-main-container">
      {cards.map((card, i) => (
        <div className="card-container" key={i}>
          <img src={card.img} className="card-img" />
          <div className="card-details">
            <p className="card-about">{card.about}</p>
            <p className="card-price">{card.price}</p>
            <div className="card-buttons">
                <button className="cart-btn">Add to cart</button>
                <a href="#" className="view-more-link">View More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
