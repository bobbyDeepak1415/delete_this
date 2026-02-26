import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addAmount, decrement, increment } from "./redux/CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      Hello
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addAmount(3))}>Add 3</button>
    </>
  );
}

export default App;
