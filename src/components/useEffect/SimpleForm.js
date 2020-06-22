import React, {useEffect, useState} from 'react';
import {Message} from './Message';

const SimpleForm = () => {
  const [formState, setFormState] = useState ({
    nombre: '',
    email: '',
  });

  const {nombre, email} = formState;

  const handleInputChange = e => {
    const {name, value} = e.target;
    setFormState ({
      ...formState,
      [name]: value,
    });
  };

  useEffect (() => {
    console.log ('Hola useEffect');
  }, []);

  useEffect (
    () => {
      console.log ('formState cambió');
    },
    [formState]
  );

  return (
    <React.Fragment>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="nombre"
          className="form-control"
          placeholder="ingresar nombre"
          autoComplete="off"
          defaultValue={nombre}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="ingresartu email"
          autoComplete="off"
          defaultValue={email}
          onChange={handleInputChange}
        />
      </div>

      {nombre === 'adrian' && <Message />}
    </React.Fragment>
  );
};

export default SimpleForm;
