import React from 'react';
import {useFormChange} from '../../hooks/useFormChage';

const SimpleFormCostumHook = () => {
  const [valuesform, handleInputChange] = useFormChange ({
    nombre: '',
    email: '',
  });

  const {nombre, email} = valuesform;

  return (
    <React.Fragment>
      <h1>useEffect Costumhook</h1>
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
    </React.Fragment>
  );
};

export default SimpleFormCostumHook;
