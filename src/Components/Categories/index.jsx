import "./categories.scss"

export default function Categories() {

  const categories = [
    {
      id: 1,
      name: "Jackets"
    },
    {
      id: 2,
      name: "Shoes"
    },
    {
      id: 3,
      name: "Sneakers"
    },
    {
      id: 4,
      name: "Men"
    },
    {
      id: 5,
      name: "Women"
    }
  ]

  return (
    <div className="categories-main-container">
      {categories.map(({name, id}) => (
        <div className="product-categories" key={id}>
            <li>{name}</li>
        </div>
      ))}
    </div>
  )
}
