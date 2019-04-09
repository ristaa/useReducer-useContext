import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { CounterProvider, CounterContext } from "./counterContext";

import "./styles.css";

let Counter = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h5>Count: {state.count}</h5>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

let SeparateComponent = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "reset" })}>RESET</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
        <SeparateComponent />
      </CounterProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
