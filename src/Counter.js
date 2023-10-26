import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/ducks/Counter";

const Counter = ({ name }) => {
  const dispatch = useDispatch();
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    dispatch(increment());
    setCount(count + 1);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setCount(count - 1);
  };

  return (
    <div>
      <h4>{name}</h4>
      <p>{`vote: ${count}`}</p>
      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </div>
  );
};

export default Counter;
