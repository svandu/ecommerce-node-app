import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../Components/ProductCard";
import "./category.scss";

import { CategoriesContext } from "../../Components/Context/CategoriesContext";

import "./category.scss"
export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {  
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
