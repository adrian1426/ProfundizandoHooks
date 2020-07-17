import React, { useState, useCallback } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((incremento) => {
    setCounter(count => count + incremento);
  }, [setCounter]);

  return (
    <div>
      <h1>UseCallback: {counter}</h1>
      <hr />
      <ShowIncrement
        increment={increment}
      />
    </div>
  );
};

export default CallbackHook;