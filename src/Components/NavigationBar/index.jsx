import { Routes,Route, Outlet } from "react-router-dom";

import "./navbar.scss";
import { ReactComponent as SearchIcon } from "../../assets/Icons/SearchIcon.svg";
import { ReactComponent as CartIcon } from "../../assets/Icons/CartIcon.svg";
import { ReactComponent as UserIcon } from "../../assets/Icons/UserIcon.svg";
import HamburgerSection from "../HamburgerSection";
import Categories from "../Categories";
import Orders from "../Orders";

export default function NavigationBar() {
  return (
    <Routes>
    <div className="navigation-container">
      <p className="logo-name">Passion</p>
      <ul className="nav-links">
        <li>
          <a to="#">Home</a>
        </li>
        <li className="category-link">
          <a href="#" className="categories">
            Categories
          </a>
          <Categories />
        </li>
            <Route path="/orders" element={<Orders />}>
              <li>
                <a href="#">Orders</a>
              </li>
            </Route>
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
          <a href="#">
            <UserIcon />
          </a>
        </li>
      </ul>

      <div className="hamburger-container">
        <HamburgerSection />
      </div>

      <Outlet />
    </div>
    </Routes>
  );
}
