import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);

  const calculate = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/calculate", {
        amount,
        rate,
        time,
      });
      setResult(response.data.result);
    } catch (error) {
      alert("Error connecting to backend");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>💰 Smart Finance Calculator</h1>

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />

        <input
          type="number"
          placeholder="Time (Years)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button onClick={calculate}>Calculate</button>

        {result !== null && (
          <h2 className="result">Result: ₹{result}</h2>
        )}
      </div>
    </div>
  );
}

export default App;