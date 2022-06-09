import React  , {useState}from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add, substract, div, M, Add, Sub } from './store/action';


function App() {
  const dispatch = useDispatch();
  const count = useSelector((state => state.count));
  const [state , setState] = useState()


  const handleInput = (e) =>{
    console.log(e);
    setState(Number(e.target.value))
  }


  return (
    <div className="App">
      <h1>Counter :{count}</h1>

      <div>

        <div>
          <button id="bt-1" onClick={() => dispatch(add(1))}>increment</button>
        </div>
        <div>
          <button id="bt-1" onClick={() => dispatch(substract(1))}>decrement</button>
        </div>
        <div id = "flex">
          <div> <input id="bt-2"
                       type="Number" 
                       name = "num"
                       placeholder='x'
                       onChange={handleInput}
                       required /> </div>
          <div id="grid">
            <div><button id="bt-1" onClick={() => dispatch(Add(state))}>add</button></div>
            <div><button id="bt-1" onClick={() => dispatch(M(state))} >mutiply</button></div>
            <div><button id="bt-1" onClick={() => dispatch(Sub(state))}>substract</button></div>
            <div><button id="bt-1" onClick={() => dispatch(div(state))} >divide</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

