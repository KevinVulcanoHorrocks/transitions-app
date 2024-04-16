import React, { useState, useRef, createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

function TodoList() {
  const [items, setItems] = useState(() => [
    {
      id: uuidv4(),
      text: 'Buy eggs',
      nodeRef: createRef(null),
    },
    {
      id: uuidv4(),
      text: 'Pay bills',
      nodeRef: createRef(null),
    },
    {
      id: uuidv4(),
      text: 'Invite friends over',
      nodeRef: createRef(null),
    },
    {
      id: uuidv4(),
      text: 'Fix the TV',
      nodeRef: createRef(null),
    },
  ]);

  const addItem = (text) => {
    const newItem = {
      id: uuidv4(),
      text,
      nodeRef: createRef(null), // Create a ref for the CSSTransition
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div style={{ marginTop: '2rem' }} className='border-t-2 border-black'>
      <ul className="todo-list">
        <TransitionGroup component={null}>
          {items.map(({ id, text, nodeRef }) => (
            <CSSTransition
              key={id}
              nodeRef={nodeRef} // Pass the nodeRef to CSSTransition
              timeout={500}
              classNames="item"
            >
              <li className="item" ref={nodeRef}>
                <button
                  className="remove-btn bg-red-300 py-2 px-4 rounded-full text-lg hover:bg-red-400"
                  onClick={() => removeItem(id)}
                >
                  &times;
                </button>
                {text}
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <button
        className='bg-red-500 p-2 rounded-md mt-2 hover:bg-red-400'
        onClick={() => {
          const text = prompt('Enter some text');
          if (text) {
            addItem(text);
          }
        }}
      >
        Add Item
      </button>
    </div>
  );
}

export default TodoList;
