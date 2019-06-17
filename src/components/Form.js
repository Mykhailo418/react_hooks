import React, { useState, useEffect, useRef, useDebugValue } from 'react';
import { useTitleInput } from '../customHooks/useTitleInput';

const Form = () => {
  const initialName = 'Vasya';
  //const [name, setName] = useState(initialName);
  const [name, setName] = useTitleInput(initialName);
  useDebugValue(name);

  const ref = useRef();

  const onChangeName = (e) => setName(e.target.value);
  const changeLabel = (e) => ref.current.textContent += '(changed)';

  // useEffect(() => {
  //   document.title = name;
  // });

  return (
    <form className="form">
      <div className="form-group">
        <label ref={ref} onClick={changeLabel} >Name:</label>
        <input type="text" className="form-control" value={name} onChange={onChangeName} />
      </div>
    </form>
  );
};

export default Form;
