import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Alert.css'

function Example() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);

  return (
    <div style={{ paddingTop: '2rem', display: 'flex', justifyContent: 'center' }}>
      {showButton && (
        <button
          className='bg-gray-200 rounded-md hover:bg-slate-300'
          onClick={() => setShowMessage(true)}
          style={{ fontSize: '1.5rem', padding: '0.5rem 1rem' }}
        >
          Show Message
        </button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames={{
          appear: 'alert-appear',
          appearActive: 'alert-appear-active',
          appearDone: 'alert-appear-done',
          enter: 'alert-enter',
          enterActive: 'alert-enter-active',
          enterDone: 'alert-enter-done',
          exit: 'alert-exit',
          exitActive: 'alert-exit-active',
          exitDone: 'alert-exit-done',
        }}
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div ref={nodeRef} className="alert" style={{ backgroundColor: 'lightblue', padding: '1rem', margin: '1rem', borderRadius: '0.5rem', border: '1px solid blue', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Animated alert message</h2>
          <p>
            This alert message is being transitioned in and out of the DOM.
          </p>
          <button
            style={{ fontSize: '1rem', padding: '0.5rem 1rem', marginTop: '1rem', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}
            onClick={() => setShowMessage(false)}
          >
            Close
          </button>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Example;
