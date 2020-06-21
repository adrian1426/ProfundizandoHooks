import React, {useState} from 'react';

const CounterApp = () => {
  const [counter, setCounter] = useState ({
    count1: 0,
    count2: 2,
  });

  const {count1, count2} = counter;

  return (
    <React.Fragment>
      <h1>Counter1 {count1}</h1>
      <h1>Counter2 {count2}</h1>
      <hr />

      <button
        className="btn-primary"
        onClick={() => setCounter ({...counter, count1: count1 + 1})}
      >
        Aumentar
      </button>
    </React.Fragment>
  );
};

export default CounterApp;
