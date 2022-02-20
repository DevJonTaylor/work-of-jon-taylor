import { NavLink } from "react-router-dom";

function Link({ children, href }) {
  const isItActive = ({isActive}) => {
    const classes = ['nav-link'];
    if(isActive) classes.push('active');

    return classes.join(' ');
  }

  return (
    <li className="navbar-item">
      <NavLink className={isItActive} to={`${href}`}>
        {children}
      </NavLink>
    </li>
  );
}

export { Link }