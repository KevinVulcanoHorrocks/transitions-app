import React, { useState, useRef } from 'react';
import SidebarTransition from './components/SidebarTransition';
import AlertExample from './components/AlertExample';
import SwitchButton from './components/SwitchButton';
import TodoList from './components/TodoList';
import { DropDownMenu, NavItem, Navbar } from './components/Navbar';
import { ReactComponent as BellIcon } from './assets/navbar-icons/bell.svg';
import { ReactComponent as MessengerIcon } from './assets/navbar-icons/messenger.svg';
import { ReactComponent as CaretIcon } from './assets/navbar-icons/caret.svg';
import { ReactComponent as PlusIcon } from './assets/navbar-icons/plus.svg';




const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const nodeRef = useRef(null);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className='flex h-screen'>
      <SidebarTransition isOpen={isOpen} nodeRef={nodeRef} toggleSidebar={toggleSidebar} />
      <main className='h-full w-full bg-red-400'>
        <Navbar>
          <NavItem icon={<PlusIcon />} />
          <NavItem icon={<BellIcon />} />
          <NavItem icon={<MessengerIcon />} />

          <NavItem icon={<CaretIcon />}>
            <DropDownMenu />
          </NavItem>
        </Navbar>
        <div className='bg-white flex flex-col justify-evenly p-6'>
          <AlertExample />
          <SwitchButton />
          <TodoList />
        </div>
      </main>
    </div>
  );
};

export default App;
