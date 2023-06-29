import { Route, Routes } from "react-router-dom"

import "./App.css";
import Navigation from "./Components/Navigation"
import HomePage from "./Components/HomePage";
import Orders from "./Components/Orders"
import Authentication from "./Components/Authentication";
import Shop from "./Components/Shop";
import Checkout from "./Components/Checkout";

export default function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<HomePage />} />
          <Route path="/orders" element={<Orders />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/auth" element={<Authentication />}/>
          <Route path="checkout" element={<Checkout />}/>
        </Route>
      </Routes>
      
    </>
  );
}
