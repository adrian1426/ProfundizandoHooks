import {useState} from 'react';

export const useFormChange = (initialState = {}) => {
  const [valuesForm, setValuesForm] = useState (initialState);

  const handleInputChange = e => {
    const {name, value} = e.target;

    setValuesForm ({
      ...valuesForm,
      [name]: value,
    });
  };

  return [valuesForm, handleInputChange];
};
