
import {useSelector} from "react-redux";


const CounterGroupSum =() => {
    const sum =useSelector(state => state.sum)
    return (<div><span>total:{sum}</span></div>)

}

export default CounterGroupSum;