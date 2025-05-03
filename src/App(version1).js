import { useState } from "react";

export default function App() {
  return (
    <div>
      <CounterByStep />
    </div>
  );
}

function CounterByStep() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date(Date.now());
  date.setDate(date.getDate() + count);
  return (
    <div className="container">
      <div className="steps">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>{`step: ${step}`}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>{`count: ${count}`}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        {count === 0
          ? "Today is "
          : count >= 1
          ? `${Math.abs(count)} days from today `
          : `${Math.abs(count)} days age from today `}
        {date.toDateString()}
      </p>
    </div>
  );
}
