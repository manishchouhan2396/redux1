import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add, substract, div, M, Add, Sub } from './store/action';


function App() {
  const dispatch = useDispatch();
  const count = useSelector((state => state.count));
  const count1 = useSelector((state => state.count1));
  return (
    <div className="App">
      <h1>Counter :{count}</h1>

      <div>

        <div>
          <button id="bt-1" onClick={() => dispatch(add())}>increment</button>
        </div>
        <div>
          <button id="bt-1" onClick={() => dispatch(substract())}>decrement</button>
        </div>
        <div id = "flex">
          <div> <input id="bt-2" type="Number" placeholder='x' /> </div>
          <div id="grid">
            <div><button id="bt-1" onClick={() => dispatch(Add())}>add</button></div>
            <div><button id="bt-1" onClick={() => dispatch(M())} >mutiply</button></div>
            <div><button id="bt-1" onClick={() => dispatch(Sub())}>substract</button></div>
            <div><button id="bt-1" onClick={() => dispatch(div())} >divide</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

