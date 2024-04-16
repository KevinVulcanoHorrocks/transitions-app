import './Navbar.css';

export const Navbar = (props) => {
  
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  );
}


export const NavItem = (props) => {
  return (
    <li className='nav-item' >
      <a href='#' className='icon-button'>
        {props.icon}
      </a>
    </li>
  )
}