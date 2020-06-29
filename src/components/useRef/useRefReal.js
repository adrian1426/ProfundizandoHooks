import React, {useState} from 'react';
import MultipleCustomHook from '../MultipleCustomHooks';

export const UseRefReal = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Ejemplo Ref</h1>
      <hr />
      {show && <MultipleCustomHook />}

      <button
        className="btn btn-outline-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        show
      </button>
    </div>
  );
};
