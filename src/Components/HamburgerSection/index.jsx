import { useState } from "react";
import { ReactComponent as HamburgerIcon } from "../../assets/HamburgerIcon.svg";
import './hamburger.scss';

export default function HamburgerSection() {

  const [active, setActive] = useState(0);

  const Hamburger = (e) => {
    setActive(e);
  }

  return ( 
     <div className="hamburger-container">
        <div className={active ===1 ? "hamburger-btn" : "hamburger-links active"
        } onClick={() => {
          Hamburger(1)
        }}><HamburgerIcon /></div>
        <div className="hamburger-btn">
          <HamburgerIcon/>
        </div>

        <ul className={active ===1 ? "hamburger-btn" : "hamburger-links active"}  >
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Login/Signup</a></li>
        </ul>

    </div>
  )
}

