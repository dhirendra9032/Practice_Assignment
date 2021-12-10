import './App.css';
import {useDispatch,useSelector} from "react-redux"
import { decCounter, incCounter } from './redux/action';



function App() {
  const dispatch = useDispatch();
  const count=useSelector((state)=>state.count);
  const handleIncrease=()=>{
    dispatch(incCounter(1))
  }
  const handleDecrement=()=>{
    dispatch(decCounter(1))
  }
  return (
    <div className="App">
      <div className="counter">
        <h5>{count}</h5>
        <button onClick={handleDecrement} onmouseup={handleDecrement}>Decrement</button><button onClick={handleIncrease}>Increment</button>
      </div>
    </div>
  );
}

export default App;
