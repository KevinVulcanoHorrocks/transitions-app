import { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { CSSTransition } from "react-transition-group";
import { ReactComponent as CogIcon } from '../assets/navbar-icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../assets/navbar-icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../assets/navbar-icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../assets/navbar-icons/bolt.svg';

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
  const [open, setOpen] = useState(false);
  return (
    <li className='nav-item' >
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

export const DropDownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null); // Add useRef here;
  const nodeRef1 = useRef(null);
  const nodeRef2 = useRef(null);


  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  },[])

  function calcHeight(el) {
    console.log(el);
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href='#' className='menu-item' onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}> 
        <span className='icon-button'> {props.leftIcon} </span>
        {props.children}
        <span className='icon-right'> {props.rightIcon} </span>
      </a>
    )
  }

  return (
    <div className='dropdown' style={{height: menuHeight}} ref={dropdownRef}>
      <CSSTransition 
        in={activeMenu === 'main'} 
        unmountOnExit timeout={500} 
        classNames="menu-primary"
        onEnter={() => calcHeight(nodeRef1.current)}
        nodeRef={nodeRef1}
      >
        <div className='menu' ref={nodeRef1}> {/* Add ref here */}
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
            >
              Settings
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition 
        in={activeMenu === 'settings'} 
        unmountOnExit timeout={500} 
        classNames="menu-secondary"
        onEnter={()=>calcHeight(nodeRef2.current)}
        nodeRef={nodeRef2}
      >
        <div className='menu' ref={nodeRef2}>
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}
