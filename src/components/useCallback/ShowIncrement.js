import React from 'react';

const ShowIncrement = React.memo(({ increment }) => {

  console.log('increment me volví a renderiza');

  return (
    <div>
      <h1>show increment</h1>
      <button
        className="btn btn-primary"
        onClick={() => increment(5)}
      >
        incrementar
      </button>
    </div>
  );
});

export default ShowIncrement;