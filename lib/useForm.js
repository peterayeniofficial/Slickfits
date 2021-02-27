import { useState } from 'react';

export default function useForm(inital = {}) {
  const [inputs, setInputs] = useState(inital);

  function handleChange(e) {
    let { value, name, type, files } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = files;
    }
    setInputs({ ...inputs, [name]: value });
  }

  function resetForm() {
    setInputs(inital);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  return { inputs, handleChange, resetForm, clearForm };
}
