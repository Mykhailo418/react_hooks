import React, { useState, useMemo } from 'react';

const ReverseWordComponent = () =>{
  const [word, setWord] = useState('');
  const [anotherState, setAnother] = useState(Date.now());
  const titleReversed = useMemo(() => reverseWord(word),[word]); // it will run function only if word updated
  //const titleReversed = reverseWord(word); // it will be rerun function event after updating another state 
  let title = '';

  return (
    <section>
      <h2>Reverse Word</h2>
      <p><strong>{titleReversed}</strong></p>
      <input type="text" className="form-control" value={word} onChange={onChangeWord} />
      <button className="btn btn-success" onClick={updateAnotherState}>Update Another State</button>
    </section>
  );

  function onChangeWord(e){
    setWord(e.target.value);
  }

  function updateAnotherState(){
    console.log('another state updated');
    setAnother(Date.now())
  }

  function reverseWord(word){
    console.log('run reverseWord function');
    return word.split('').reverse().join('');
  }
}

export default ReverseWordComponent;
