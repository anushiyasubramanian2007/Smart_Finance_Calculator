const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Simple Interest
app.post("/simple-interest", (req, res) => {
  const { principal, rate, time } = req.body;
  const interest = (principal * rate * time) / 100;
  res.json({ interest });
});

// ✅ Compound Interest
app.post("/compound-interest", (req, res) => {
  const { principal, rate, time } = req.body;
  const amount = principal * Math.pow((1 + rate / 100), time);
  const interest = amount - principal;
  res.json({ amount, interest });
});

// ✅ EMI Calculator
app.post("/emi", (req, res) => {
  const { principal, rate, time } = req.body;

  const monthlyRate = rate / 12 / 100;
  const months = time * 12;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  res.json({ emi });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));