import React, { useState, useEffect } from 'react';

function FunctionComponent(props) {
  console.log('use state');

  const [counter, setCounter] = useState(props.arg);
  
  useEffect(()=>console.log('use effect'))

  const handlerClick = () => setCounter(counter + 1);

  console.log('render before return');
  
  return (
    <>
      <h3>Function Component</h3>
      {console.log('render in return')}
      <button onClick={handlerClick}>+</button>
      {counter}
      {counter === 1 && (
        <p>Element would be removed (if counter !== 1): {counter}</p>
      )}
    </>
  );
}

export default FunctionComponent;
