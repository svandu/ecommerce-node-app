import { Route, Routes } from "react-router-dom"

import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Components/HomePage";
import Orders from "./Components/Orders"
import SignIn from "./Components/SignIn";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationBar />} >
          <Route index element={<HomePage />} />
          <Route path="/orders" element={<Orders />}/>
          <Route path="/sign-in" element={<SignIn />}/>
        </Route>
      </Routes>
    </>
  );
}
