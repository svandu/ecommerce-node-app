import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Components/Context/index.jsx";
import { ProductsProvider } from "../src/Components/Context/ProductContext/index.jsx"
import { CartProvider } from "./Components/Context/CartContext/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
        <CartProvider >
          <App />
        </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
