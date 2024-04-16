import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import sidebarCollapseIcon from '../assets/sidebar-collapse-icon.svg';
import sidebarExpandIcon from '../assets/sidebar-expand-icon.svg';
import settingsIcon from '../assets/settings-icon.svg';
import './Sidebar.css'

const Sidebar = ({isOpen, nodeRef, toggleSidebar}) => {

  const handleSidebarEntered = (node) => {
    console.log('Sidebar entered:', node);
    // You can perform any additional actions after the sidebar has entered
  };

  const handleSidebarExited = (node) => {
    console.log('Sidebar exited:', node);
    // You can perform any additional actions after the sidebar has exited
  };

  return (
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={{
          appear: 'sidebar-appear',
          appearActive: 'sidebar-appear-active',
          appearDone: 'sidebar-appear-done',
          enter: 'sidebar-enter',
          enterActive: 'sidebar-enter-active',
          enterDone: 'sidebar-enter-done',
          exit: 'sidebar-exit',
          exitActive: 'sidebar-exit-active',
          exitDone: 'sidebar-exit-done',
        }}
        unmountOnExit={false}
        nodeRef={nodeRef}
      >
        <div className="sidebar bg-green-900 sidebar-exit" ref={nodeRef}>
        <button onClick={toggleSidebar} className="rounded-sm">
          <img
            src={isOpen ? sidebarCollapseIcon : sidebarExpandIcon}
            className={`transition-all duration-700 ${isOpen ? 'rotate-360 brightness-150' : ''}`}
            width={56}
            alt={isOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
          />
        </button>

          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      </CSSTransition>
  );
};

export default Sidebar;
