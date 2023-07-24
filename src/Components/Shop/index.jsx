import { useContext } from "react";
import "./shop.scss";

import { CategoryContext } from "../Context/CategoriesContext/index.jsx";
import CategoryPreview from "../CategoryPreview";
// import ProductCard from "../ProductCard/index.jsx";

export default function Shop() {
  const { categoriesMap } = useContext(CategoryContext );
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products}/>
        )
      })}
    </div>
  );
}
