import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increment ,decrement} from "../createSlice/counterSlice";
// import "../styles/Counter.css"

function Counter(props) {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  const [number, setNumber] = useState(0);
    // const sum=0;

//   function increase() {
//     setNumber(number + 1);
//     props.increaseSum()
//   }

//   function decrease() {
//     setNumber(number - 1);
//     props.decreaseSum()
//   }
  

  return (
    <div>
      <button onClick={()=> {dispatch(increment())}}>+</button>
      <span>{count}</span>
      <button onClick={()=> {dispatch(decrement())}}>-</button>

    </div>
  );
}

export default Counter;
