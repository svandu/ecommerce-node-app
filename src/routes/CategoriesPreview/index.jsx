import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../Components/Context/CategoriesContext";
import CategoryPreview from "../../Components/CategoryPreview";
// import ProductCard from "../ProductCard/index.jsx";

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext );
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
 