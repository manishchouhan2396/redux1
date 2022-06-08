import React from 'react';
import './App.css';
import { useDispatch  , useSelector} from 'react-redux';
import {add , substract , div ,M} from './store/action';


function App() {
  const dispatch = useDispatch();
  const count = useSelector((state => state.count));
  return (
    <div className="App">
      <h1>Counter :{count}</h1>
      <div>
        <button onClick={() => dispatch(add())}>+</button>
        <button onClick={() => dispatch(substract())}>-</button>
        <button onClick={() => dispatch(M())} >muti</button>
        <button onClick={() => dispatch(div())}  >divi</button>
      </div>
    </div>
  );
}

export default App;
