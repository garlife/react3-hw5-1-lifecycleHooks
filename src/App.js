import React, { useState } from 'react';
import './style.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

export default function App() {
  const [toggleCC, setToggleCC] = useState(false);
  const [toggleFC, setToggleFC] = useState(false);

  const handlerCC = () => {
    setToggleCC(!toggleCC);
    console.clear();
  };
  const handlerFC = () => {
    setToggleFC(!toggleFC);
    console.clear();
  };

  return (
    <div>
      <button onClick={handlerCC}>Отобразить Классовый компонент</button>
      <div>{toggleCC && <ClassComponent arg={0} />} </div>
      <hr />
      <button onClick={handlerFC}>Отобразить Функциональный компонент</button>
      <div> {toggleFC && <FunctionComponent arg={0} />}</div>
    </div>
  );
}
