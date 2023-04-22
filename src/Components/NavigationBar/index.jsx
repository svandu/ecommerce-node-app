import './navbar.scss'
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import { ReactComponent as CartIcon } from "../../assets/CartIcon.svg";
import { ReactComponent as UserIcon } from "../../assets/UserIcon.svg";

export default function NavigationBar() {
  return (
    <div className="navigation-container">
      <p className="logo-name">Passion</p>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav-icons-container">
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
      </div>
    </div>
  );
}


