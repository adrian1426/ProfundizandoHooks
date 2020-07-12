import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesos';

export const MemoHook = () => {
  const { state, increment } = useCounter(2000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);

  return (
    <div>
      <h3>Counter: <small>{state}</small></h3>
      <hr />

      <p>{memoProcesoPesado}</p>

      <button className="btn btn-primary" onClick={() => increment()}> +1 </button>
      <button className="btn btn-outline-primary ml-3" onClick={() => setShow(!show)}>
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
