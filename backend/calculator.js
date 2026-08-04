import { useState } from "react";
import "./App.css";

function App() {
  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const principal = Number(loan);
    const r = Number(rate);
    const t = Number(time);

    const interest = (principal * r * t) / 100;
    const total = principal + interest;

    setResult({ interest, total });
  };

  return (
    <div className="container">
      <h1>Smart Finance Calculator</h1>

      <label>Loan Amount (₹)</label>
      <input type="number" value={loan} onChange={(e) => setLoan(e.target.value)} />

      <label>Interest Rate (%)</label>
      <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />

      <label>Time (Years)</label>
      <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />

      <button onClick={calculate}>Calculate</button>

      {result && (
        <h2>
          Interest = ₹{result.interest}
          <br />
          Total Amount = ₹{result.total}
        </h2>
      )}
    </div>
  );
}

export default App;