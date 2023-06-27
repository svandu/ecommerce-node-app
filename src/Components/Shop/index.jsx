import { useContext } from "react"

import { ProductsContext} from "../Context/ProductContext/index.jsx"
import ProductCard from "../ProductCard/index.jsx"

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}
