import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import React, { useState } from "react";
import CounterSum from "./CounterSum";

function MultipleCounter() {
  const [counterSize, setCounterSize] = useState(0);
  const [sum, setSum] = useState(0);

  function updateCounterSize(counterSize) {
    setCounterSize(counterSize);
  }
  function increaseSum() {
    setSum(sum + 1);
  }
  function decreaseSum() {
    setSum(sum - 1);
  }

  return (
    <div>
      <CounterSizeGenerator
        updateCounterSize={updateCounterSize}
      ></CounterSizeGenerator>
      <CounterGroup counterSize={counterSize} increaseSum={increaseSum} decreaseSum={decreaseSum}></CounterGroup>
      <span>The CounterSize:{counterSize}</span>
      <CounterSum sum={sum}></CounterSum>
    </div>
  );
}
export default MultipleCounter;
