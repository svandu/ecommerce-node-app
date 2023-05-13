import { Route, Routes } from "react-router-dom"

import "./App.css";
import HomePage from "./Components/HomePage";
import NavigationBar from "./Components/NavigationBar";
import HeroSection from "./Components/HeroSection";
import ContainerCards from "./Components/ContainerCards";

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}> 
            <Route path="home" element={<NavigationBar />}/>
            <Route path="home" element={<HeroSection />}/>
            <Route path="home" element={<ContainerCards />}/>
        </Route>
    </Routes>
  );
}
