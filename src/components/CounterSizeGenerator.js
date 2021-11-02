import { useState } from "react";
import { useDispatch } from "react-redux";

function CounterSizeGenerator(props) {
  const [size, setSize] = useState(0);
  const dispatch = useDispatch();

  const updateCounterSize = ()=>{
      dispatch({type: 'resetSum'})
      dispatch({type:'updateCounterSize', payload : size})
  }
  return (
    <div>
      <span>Size: </span>
      <input
        type="number"
        min="0"
        onChange={(event) => setSize(Number(event.target.value))}
        defaultValue={size}
      />
      <button
        onClick={updateCounterSize}
      >
        generate
      </button>
    </div>
  );
}
export default CounterSizeGenerator;
