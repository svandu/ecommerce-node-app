import { Outlet, Link } from "react-router-dom";

import "./navbar.scss";
import { ReactComponent as SearchIcon } from "../../assets/Icons/SearchIcon.svg";
import { ReactComponent as CartIcon } from "../../assets/Icons/CartIcon.svg";
// import { ReactComponent as UserIcon } from "../../assets/Icons/UserIcon.svg";
import HamburgerSection from "../HamburgerSection";
import Categories from "../Categories";

export default function NavigationBar() {
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
          <Link to="/orders">
             Orders
          </Link>
          </li>
        </ul>
      <ul className="nav-icons">
        <li>
          <a href="#">
            <SearchIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <CartIcon />
          </a>
        </li>
        <li>
          {/* <a href="#">
            <UserIcon />
          </a> */}
          <Link to="/auth">SignIn</Link>
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
