import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import React, { useState } from "react";
// import CounterSum from "./CounterSum";
import { useSelector, useDispatch } from "react-redux";
// import { increaseSum, decreaseSum } from "../createSlice/counterSlice";

function MultipleCounter() {
  const reduxSum = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [counterSize, setCounterSize] = useState(0);
  //   const [sum, setSum] = useState(0);

  function updateCounterSize(counterSize) {
    setCounterSize(counterSize);
  }
  function increaseSum() {
    dispatch(increaseSum());
  }
  function decreaseSum() {
    dispatch(decreaseSum());
  }

  return (
    <div>
      <CounterSizeGenerator
        updateCounterSize={updateCounterSize}
      ></CounterSizeGenerator>
      <CounterGroup
        counterSize={counterSize}
        increaseSum={increaseSum}
        decreaseSum={decreaseSum}
      ></CounterGroup>
      <span>The CounterSize:{counterSize}</span><br/>
      <span>The sum is : {reduxSum} </span>
      {/* <CounterSum sum={sum}></CounterSum> */}
    </div>
  );
}
export default MultipleCounter;
