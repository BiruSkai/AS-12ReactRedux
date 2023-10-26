import "./styles.css";
import React from "react";
import Counter from "./Counter";
import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const voters = ["Mario", "Luigi", "Chun"];

  return (
    <div className="App">
      <h2>{`Total votes: ${count}`}</h2>
      {voters.map((voter) => (
        <div>
          <Counter name={voter} />
        </div>
      ))}
    </div>
  );
}
