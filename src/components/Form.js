import React, { useState, useEffect } from 'react';

const Form = () => {
  const initialName = 'Vasya';
  const [name, setName] = useState(initialName);

  const onChangeName = (e) => setName(e.target.value);

  useEffect(() => {
    document.title = name;
  });

  return (
    <form className="form">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" className="form-control" value={name} onChange={onChangeName} />
      </div>
    </form>
  );
};

export default Form;
