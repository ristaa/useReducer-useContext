import React, { useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return;
  }
};

const initialState = { count: 0 };

const CounterContext = React.createContext(initialState);
let CounterProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};
export { CounterContext, CounterProvider };
