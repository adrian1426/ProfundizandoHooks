import React, {useEffect} from 'react';

export const Message = () => {
  useEffect (() => {
    console.log ('compomemte montado');
    return () => {
      console.log ('compomemte desmontado');
    };
  }, []);

  return (
    <div>
      <h1>Eres genial amigo</h1>
    </div>
  );
};
