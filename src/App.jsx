import { Route, Routes } from "react-router-dom"

import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Components/HomePage";
import Orders from "./Components/Orders"
import Authentication from "./Components/Authentication";
// import { AuthContextProvider } from "./Utils/Firebase/AuthContext";

export default function App() {
  return (
    <>
    {/* <AuthContextProvider> */}
    <Routes>
        <Route path="/" element={<NavigationBar />} >
          <Route index element={<HomePage />} />
          <Route path="/orders" element={<Orders />}/>
          <Route path="/auth" element={<Authentication />}/>
        </Route>
      </Routes>
    {/* </AuthContextProvider> */}
      
    </>
  );
}
