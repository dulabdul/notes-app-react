import { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHander = (e) => {
    setValue(e.target.value);
  };
  return [value, onValueChangeHander];
}
export default useInput;
