const express = require("express");

const app = express();

const calculate = require("./calculator");

app.get("/", (req,res)=>{
    res.send("Smart Finance Calculator Backend Running");
});

app.get("/calculate",(req,res)=>{

let principal = Number(req.query.principal);
let rate = Number(req.query.rate);
let time = Number(req.query.time);

let result = calculate(principal,rate,time);

res.json(result);

});

app.listen(3000,()=>{

console.log("Server running at http://localhost:3000");

});