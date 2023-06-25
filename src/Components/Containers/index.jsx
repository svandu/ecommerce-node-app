import "./containers.scss"

export default function Containers() {

    const categories = [
        {
          id: 1,
          name: "Jackets",
          img: './src/assets/Images/jacket.png',
        },
        {
          id: 2,
          name: "Shoes",
          img: './src/assets/Images/shoes.jfif',
        },
        {
          id: 3,
          name: "Sneakers",
          img: './src/assets/Images/sneakers.jfif',
        },
        {
          id: 4,
          name: "Men",
          img: './src/assets/Images/men.jfif',
        },
        {
          id: 5,
          name: "Women",
          img: './src/assets/Images/women.png',
        },
      ];

  return (
    <div className="categories-container">
        {categories.map(({name, id, img}) => (
            <div className="category-container" key={id}>
              <div className="background-image">
                <img src={img} className="container-img"/>
              </div>
                <div className="category-body-container">
                  <h2>{name}</h2>
                  <p>Shop Now</p>
                </div>
            </div>
        ))}
    </div>
  )
}
