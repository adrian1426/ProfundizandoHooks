import React, {useLayoutEffect, useRef, useState} from 'react';
import {useFetch} from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';

const LayoutEffect = () => {
  const [box, setBox] = useState(null);
  const {state: counter, increment} = useCounter(1);

  const {data} = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const {quote} = !!data && data[0];

  const parrafLength = useRef();

  useLayoutEffect(() => {
    setBox(parrafLength.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect ejemplo</h1>
      <hr />

      <blockquote style={{display: 'flex'}} className="blockquote text-right">
        <p className="mb-0" ref={parrafLength}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(box, null, 3)}</pre>

      <button className="btn-primary" onClick={() => increment()}>
        siguiente frase
      </button>
    </div>
  );
};

export default LayoutEffect;
