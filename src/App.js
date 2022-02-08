import React from 'react';
import { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(0);
  console.log('')
  const name = 'yokiko';

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  const countReset = () => {
    setCount(count = 0);
  };

 return (
  <div>
    <h1>Hello world</h1>
    <h2>Hello world</h2>
    <h3>Hello world</h3>
    <h4>Hello world</h4>
    <button>button</button>
    <input type="text" />
    <a href="#">a タグ</a>

    <div>{name}</div>

    <div>
      <button onClick={() => window.alert("111")}>警告</button>
    </div>

    <div>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
    <div>
      <button onClick={countReset}>RESET</button>
    </div>

  </div>
 );
};

export default App;
