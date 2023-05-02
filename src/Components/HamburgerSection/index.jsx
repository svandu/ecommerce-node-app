import { useState } from "react";
import { ReactComponent as HamburgerIcon } from "../../assets/Icons/HamburgerIcon.svg";
import Categories from "../Categories";
import "./hamburger.scss";

export default function HamburgerSection() {

  const [toggle, setToggle] = useState(true)

  return (
    <div className="hamburger-container">
      <div onClick={() => setToggle(!toggle)} className="hamburger-icon">
      <HamburgerIcon />
      </div>

      {toggle && (
        <ul className="hamburger-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="category-link">
          <a href="#" className="categories">Categories</a>
          <Categories />
        </li>
        <li>
          <a href="#">Orders</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Login/Signup</a>
        </li>
      </ul>
      )}

    </div>
  );
}
