import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter";

function CounterGroup() {
  const [counterList, setCounterList] = useState([]);
    const size =useSelector(state => state.size);

  useEffect(() => {
    const counters = new Array(size).fill(Date.now());
    setCounterList(counters);
  }, [size]);


  return (
    <div>
      {counterList.map((item, index) => (
        <Counter
          key={item + index}
        />
      ))}
    </div>
  );
}
export default CounterGroup;
