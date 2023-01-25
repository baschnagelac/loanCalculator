function buildCalculator() {
    //maybe bring calculateTotalPrincipal, calculateTotalInterest, calculateTotal Cost up here
}


function calculateRemaingBalance() { //remaining balance before very first month
    let loanAmount = document.getElementById('loanAmount').value;

    let totalPrincipalResults = document.getElementById('totalPrincipalResults');

    loanAmount = parseInt(loanAmount);

    if (isNaN(loanAmount)) {
        alert("Numbers only, please!");
    } else {
        let totalPrincipal = loanAmount;
        totalPrincipalResults.innerHTML = totalPrincipal;
    }
}

function calculateTotalMonthlyPayment() {
    //(amount loaned) * (rate/1200)/(1-(1 + rate/1200))^number of months))
    let loanAmount = document.getElementById('loanAmount').value;
    let interestRate = document.getElementById('interestRate').value;
    let termLength = document.getElementById('termLength').value;
    let yourMonthlyPaymentResults = document.getElementById('yourMonthlyPaymentResults').value; //doesn't make sense, no user input value here? 

    loanAmount = parseInt(loanAmount);
    interestRate = parseInt(interestRate);

    if (isNaN(loanAmount) || isNaN(interestRate)) {
        alert("Numbers only, please!");
    } else {
        let totalMonthlyPayment = loanAmount * interestRate / 1200 / (1 - (1 + interestRate / 1200) ** termLength);

        yourMonthlyPaymentResults.innerHTML = totalMonthlyPayment;
    }
}

function calculateInterestPayment() { // come back after EOM calculation
    //Previous remaining balance * rate/1200
    let loanAmount = document.getElementById('loanAmount').value;
    let interestRate = document.getElementById('interestRate').value;

    loanAmount = parseInt(loanAmount);
    interestRate = parseInt(interestRate);

    if (isNaN(loanAmount) || isNaN(interestRate)) {
        alert("Numbers only, please!");
    } else {
        let interestPayment = loanAmount / 1200;
        let // result div?? coming back...
    }

}

function calculatePrincipalPayment() {
    //Total Monthly Payment - InterestPayment

    let loanAmount = document.getElementById('loanAmount').value;
    let interestRate = document.getElementById('interestRate').value;
    let termLength = document.getElementById('termLength').value;

    loanAmount = parseInt(loanAmount);
    interestRate = parseInt(interestRate);

    if (isNaN(loanAmount) || isNaN(interestRate)) {
        alert("Numbers only, please!");
    } else {
        let totalMonthlyPayment = loanAmount * interestRate / 1200 / (1 - (1 + interestRate / 1200) ** termLength);
        let interestPayment = loanAmount / 1200;
        let principalPayment = totalMonthlyPayment - interestPayment;

        return principalPayment
    }


}


function calculateRemainingBalanceEOM() {
    //Remaining Balance = Previous remainding balance - principal payments
    let loanAmount = document.getElementById('loanAmount').value;
    let interestRate = document.getElementById('interestRate').value;
    let termLength = document.getElementById('termLength').value;
    let balance = document.getElementById('balance').value; //doesn't make sense. no user input value..

    loanAmount = parseInt(loanAmount);
    interestRate = parseInt(interestRate);

    if (isNaN(loanAmount) || isNaN(interestRate)) {
        alert("Numbers only, please!");
    } else {
        let totalMonthlyPayment = loanAmount * interestRate / 1200 / (1 - (1 + interestRate / 1200) ** termLength);
        let interestPayment = loanAmount / 1200;
        let principalPayment = totalMonthlyPayment - interestPayment;
        return principalPayment;


    }
    let remainingBalance = totalMonthlyPayment - principalPayment;
    return remainingBalance

}

function displayOutputTable() { //to display the table

}

function displayTotals() { //to display the payments above table

}

function paymentArray() { //put data into an array of months?? for the table

}


function calculateTotalInterest() { //unfinished - 
    let interestRate = document.getElementById('interestRate').value;

    let totalInterestResults = document.getElementById('totalInterestResults');

    interestRate = parseInt(interestRate);

    //if Nan
    //let totalInterest = interest rate?
}

function calculateTotalCost() {
    //coming back to this


}








