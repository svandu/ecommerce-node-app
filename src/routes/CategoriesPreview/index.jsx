import { useContext, Fragment } from "react";
import "./categories-preview.scss";

import { CategoryContext } from "../../Components/Context/CategoriesContext";
import CategoryPreview from "../../Components/CategoryPreview";
// import ProductCard from "../ProductCard/index.jsx";

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoryContext );
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products}/>
        )
      })}
    </Fragment>
  );
}
 