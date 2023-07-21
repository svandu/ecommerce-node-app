import { Fragment, useContext } from "react";
import "./shop.scss";

import { CategoryContext } from "../Context/CategoriesContext/index.jsx";
import ProductCard from "../ProductCard/index.jsx";

export default function Shop() {
  const { categoriesMap } = useContext(CategoryContext );
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
        </Fragment>
      ))}
    </Fragment>
  );
}
