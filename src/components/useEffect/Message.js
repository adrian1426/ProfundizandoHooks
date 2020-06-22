import React, {useEffect, useState} from 'react';

export const Message = () => {
  const [coordenadas, setCoordenadas] = useState ({x: 0, y: 0});

  const mouseMove = e => {
    setCoordenadas ({
      x: e.x,
      y: e.y,
    });
  };

  useEffect (() => {
    window.addEventListener ('mousemove', mouseMove);
    return () => {
      window.removeEventListener ('mousemove', mouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Eres genial amigo</h1>
      <hr />
      <p>x= {coordenadas.x} y={coordenadas.y}</p>
    </div>
  );
};
