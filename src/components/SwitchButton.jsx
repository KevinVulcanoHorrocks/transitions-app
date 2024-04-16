import React, { useState, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './SwitchButton.css'
const modes = ["out-in", "in-out"];

const SwitchButton = () => {
  const [mode, setMode] = useState("out-in");
  const [state, setState] = useState(true);
  const helloRef = useRef(null);
  const goodbyeRef = useRef(null);
  const nodeRef = state ? helloRef : goodbyeRef;

  return (
    <>
      <div className="label border-t-2 border-black">Mode:</div>
      <div className="modes">
        {modes.map((m) => (
          <label key={m} className="cursor-pointer">
            <input
              type="radio"
              name="mode"
              checked={mode === m}
              value={m}
              onChange={(event) => {
                setMode(event.target.value);
              }}
            />
            {m}
          </label>
        ))}
      </div>
      <div className="main">
      <SwitchTransition mode={mode}>
          <CSSTransition
            key={state}
            nodeRef={nodeRef}
            addEndListener={(done) => {
              nodeRef.current.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <div ref={nodeRef} className="">
              <button onClick={() => setState((state) => !state)} className="button-container hover:bg-blue-200 cursor-pointer">
                {state ? "Hello, world!" : "Goodbye, world!"}
              </button>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
};

export default SwitchButton;
