import { useState } from "react";

export default function App() {
  return <StepCounter />;
}
function StepCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function handleStep(e) {
    setStep(e);
  }
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="stepcounter">
      <div className="step">
        <input
          type="range"
          min={1}
          max={10}
          step={1}
          value={step}
          onChange={(e) => handleStep(+e.target.value)}
        />
        <span>{`step: ${step}`}</span>
      </div>
      <div className="counter">
        <button
          className="previous"
          onClick={() => setCount(() => count - step)}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button className="next" onClick={() => setCount(() => count + step)}>
          +
        </button>
      </div>
      <p className="text">
        {count === 0
          ? `Today is ${date.toDateString()}`
          : count >= 1
          ? `${count} days from ${date.toDateString()}`
          : `${Math.abs(count)} days ago from ${date.toDateString()}`}
      </p>
      {step !== 1 || count !== 0 ? (
        <button className="reset" onClick={handleReset}>
          reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
