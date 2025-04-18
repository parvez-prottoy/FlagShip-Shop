import { MdBookmarkAdd, MdShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router";
import NavItem from "./NavItem";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-base-100 shadow-sm">
      <div className="max-container navbar p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer mr-2 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/cart">
                <MdShoppingCart size={20} />
                <p className="absolute top-0 right-1">0</p>
              </NavItem>
              <NavItem href="/favorites">
                <MdBookmarkAdd size={20} />
              </NavItem>
            </ul>
          </div>
          <Link to="/" className="font-bold text-xl flex items-center">
            <img className="w-12" src={logo} alt="Logo" />
            FlagShip
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/cart">
              <MdShoppingCart size={20} />
              <p className="absolute top-0 right-1">0</p>
            </NavItem>
            <NavItem href="/favorites">
              <MdBookmarkAdd size={20} />
            </NavItem>
          </ul>
        </div>
      </div>
    </header>
  );
}
