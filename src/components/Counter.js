import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "../style/Counter.css";

function Counter(props) {
  const [count,setCount] = useState(0)
  const dispatch = useDispatch();
  const handleIncrease =() => {
    dispatch({type:'updateCounterSum', payload : 1})
    return setCount (count +1)

  }

  const handleDecrease =() => {
    dispatch({type:'updateCounterSum', payload : -1})
    return setCount (count -1)

  }
    

  return (
    <div>
      <button
        class="my-button2"
        onClick={handleIncrease}
      >
        +
      </button>
      <span>{count}</span>
      <button
        class="my-button"
        onClick={handleDecrease}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
