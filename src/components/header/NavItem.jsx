import { NavLink } from "react-router";

export default function NavItem({ children, href }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
        to={href}
      >
        {children}
      </NavLink>
    </li>
  );
}
