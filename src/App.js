import logo from './logo.svg';
import './App.css';
import { add,subtract } from './counterAction';
import  { useDispatch, useSelector } from "react-redux"
function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log("count",count)
  return (
    <div className="App">
     <h1> {count}</h1>
     <button onClick={() => dispatch(subtract())}>-</button>
      <button onClick={() => dispatch(add())}>+</button>
    

    </div>
  );
}

export default App;
