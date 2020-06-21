import React from 'react';
import {useCounter} from '../../hooks/useCounter';

const factor = 5;

const CounterAppCostumHook = () => {
  const {state: counter, increment, decrement, reset} = useCounter (5);

  return (
    <React.Fragment>
      <h1>Counter con hook: {counter}</h1>
      <hr />

      <button className="btn-primary" onClick={() => increment (factor)}>
        + {factor}
      </button>
      <button className="btn-primary" onClick={() => decrement (factor)}>
        - {factor}
      </button>
      <button className="btn-primary" onClick={reset}>reset</button>
    </React.Fragment>
  );
};

export default CounterAppCostumHook;
