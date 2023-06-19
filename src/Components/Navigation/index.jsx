import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import "./navbar.scss";
import { ReactComponent as SearchIcon } from "../../assets/Icons/SearchIcon.svg";
import { ReactComponent as CartIcon } from "../../assets/Icons/CartIcon.svg";
import { UserContext } from "../Context";
import HamburgerSection from "../HamburgerSection";
import Categories from "../Categories";

import {signOutUser} from '../../firebase'

export default function NavigationBarz() {
  const { currentUser } = useContext(UserContext);


  return (
    <>
      <div className="navigation-container">
        <Link to="/">
          <p className="logo-name">Passion</p>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li className="category-link">
            <Link to="#" className="categories">
              Categories
            </Link>
            <Categories />
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
        <ul className="nav-icons">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <a href="#">
              <CartIcon />
            </a>
          </li>
          <li>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link to="/auth">SIGN IN</Link>
            )
          }
  
          </li>
        </ul>

        <div className="hamburger-container">
          <HamburgerSection />
        </div>
      </div>
      <Outlet />
    </>
  );
}
