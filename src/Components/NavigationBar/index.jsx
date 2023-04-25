import './navbar.scss'
import { ReactComponent as SearchIcon } from "../../assets/Icons/SearchIcon.svg";
import { ReactComponent as CartIcon } from "../../assets/Icons/CartIcon.svg";
import { ReactComponent as UserIcon } from "../../assets/Icons/UserIcon.svg";
import HamburgerSection from '../HamburgerSection';


export default function NavigationBar() {
  return (
    <div className="navigation-container">
      <p className="logo-name">Passion</p>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Orders</a>
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
            <a href="#">
              <UserIcon />
            </a>
          </li>
        </ul>
        <div className='hamburger-container'>
        <HamburgerSection />
        </div>
    </div>
  );
}


