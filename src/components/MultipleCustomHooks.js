import React from 'react';
import {useFetch} from '../hooks/useFetch';
import {useCounter} from '../hooks/useCounter';

const MultipleCustomHook = () => {
  const {state: counter, increment} = useCounter(1);

  const {loading, data} = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const {author, quote} = !!data && data[0];

  const view = loading ? (
    <div className="alert alert-info text-center">Cargando...</div>
  ) : (
    <blockquote className="blockquote text-right">
      <p className="mb-0">{quote}</p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  );

  const boton = !loading && (
    <button className="btn-primary" onClick={() => increment()}>
      siguiente frase
    </button>
  );

  return (
    <div>
      <h1>BreakingBad Qoutes</h1>
      <hr />
      {view}
      {boton}
    </div>
  );
};

export default MultipleCustomHook;
