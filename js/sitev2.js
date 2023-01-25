//calculate total monthly payments 
function calculateTotalMonthlyPayments() {
    return (loanAmount * (interestRate / 1200)) / (1 - (1+ interestRate / 1200)** termLength)
}

//calculate interest payment
function calculateInterestPayment() {
    return remBalance * (interestRate / 1200);
}


//get loan payment schedule by month 
function createPaymentSchedule() {
    let loanAmount = document.getElementById('loanAmount').value;
    let interestRate = document.getElementById('interestRate').value;
    let termLength = document.getElementById('termLength').value

    //make table 
    let outputTableBody = document.getElementById('outputTableBody');
    const outputTableRowTemplate = document.getElementById('outputTableRowTemplate');
    //clear table body 
    outputTableBody.innerHTML = ''; 

    //variables for the monthly payment schedule - start from 0
    let totalMonthlyPayment = calculateTotalMonthlyPayments();
    let remBalance = loanAmount; 
    let totalInterest = 0;
    let principalPayment = 0;
    let monthlyInterest = 0;

    //create a for loop to break up into EACH month
    for (month = 1; month <= termLength; month++) {
        monthlyInterest = calculateInterestPayment(remBalance, interestRate);
        totalInterest += monthlyInterest;
        principalPayment = totalMonthlyPayment - monthlyInterest;
        remBalance = remBalance - monthlyPrincipal;
    }

    let monthlyRow = document.importNode(outputTableRowTemplate.contentEditable, true);
    let currentMonth = month[i];
    let tableCells = monthlyRow.querySelectorAll('td');

    tableCells[0].textContent = currentMonth;
    tableCells[1].textContent = totalMonthlyPayment;
    tableCells[2].textContent = principalPayment;
    tableCells[3].textContent = monthlyInterest;
    tableCells[4].textContent = totalInterest;
    tableCells[5].textContent = remBalance;

    outputTableBody.appendChild(monthlyRow);
}

//display the monthly table 
document.getElementById('totalPrincipalResults').innerHTML = totalPrincipalResults.toLocaleString();
document.getElementById('totalInterestResults').innerHTML = totalInterestResults.toLocaleString();
document.getElementById('yourMonthlyPaymentResults').innerHTML = yourMonthlyPaymentResults.toLocaleString();
document.getElementById('totalCostResults').innerHTML = totalCostResults.toLocaleString();



       

   


//build out the summary area TO LOCALE STRING
