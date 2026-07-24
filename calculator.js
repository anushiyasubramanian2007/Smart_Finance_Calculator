function simpleInterest(principal, rate, time){

let interest = (principal * rate * time) / 100;

let total = principal + interest;

return{
    interest,
    total
};

}

module.exports = simpleInterest;