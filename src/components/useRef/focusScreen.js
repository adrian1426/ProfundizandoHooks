import React from 'react';
import {useRef} from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector('input').focus();
    // inputRef.current.focus();
    inputRef.current.select();
  };
  return (
    <div>
      <h1>Hola focus</h1>

      <input
        className="form-control"
        placeholder="ingrese su nombre"
        ref={inputRef}
      />
      <br />
      <button className="btn btn-primary" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
