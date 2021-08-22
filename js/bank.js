function amountInput(inputId) {
    const inputAmount = document.getElementById(inputId);
    const inputAmountText = inputAmount.value;
    const finalInputAmout = parseFloat(inputAmountText);
    //clear deposite input field
    inputAmount.value = '';
    return finalInputAmout;
}
function updateDepositWithdrowBalance(fieldId, amount) {
    const fieldElement = document.getElementById(fieldId);
    const fieldElementText = fieldElement.innerText;
    const fieldElementAmount = parseFloat(fieldElementText);
    const totalTransaction = amount + fieldElementAmount;
    fieldElement.innerText = totalTransaction;
}

function getCurrentBalance() {
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const balance = parseFloat(totalBalanceText);
    return balance;
}

function updateTotalBalance(amount, isAdd) {
    const totalBalance = document.getElementById('total-balance');
    /*  const totalBalanceText = totalBalance.innerText;
     const balance = parseFloat(totalBalanceText); */
    const balance = getCurrentBalance();
    if (isAdd == true) {
        const updateBalance = balance + amount;
        totalBalance.innerText = updateBalance;
    } else {
        const updateBalance = balance - amount;
        totalBalance.innerText = updateBalance;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    //take deposit amount form deposite input field
    /*  const depositInput = document.getElementById('deposit-input');
     const depositInputText = depositInput.value;
     const depositInputAmout = parseFloat(depositInputText); */
    const depositInputAmout = amountInput('deposit-input');
    //take current deposite amount
    /*  const depositBalance = document.getElementById('deposit-balance');
     const depositBalanceText = depositBalance.innerText;
     const depositBalanceAmount = parseFloat(depositBalanceText);
     const totalDeposit = depositInputAmout + depositBalanceAmount;
     depositBalance.innerText = totalDeposit; */

    //update total balance 
    /*  const totalBalance = document.getElementById('total-balance');
     const totalBalanceText = totalBalance.innerText;
     const balance = parseFloat(totalBalanceText);
     const updateBalance = balance + depositInputAmout;
     totalBalance.innerText = updateBalance; */
    if (depositInputAmout > 0) {
        updateDepositWithdrowBalance('deposit-balance', depositInputAmout);
        updateTotalBalance(depositInputAmout, true);
    }
    //clear deposite input field
    // inputAmount.value = '';

});

document.getElementById('withdrow-button').addEventListener('click', function () {
    //take withdrow amount form withdrow input field
    /* const withdrowInput = document.getElementById('withdrow-input');
    const withdrowInputText = withdrowInput.value;
    const withdrowInputAmount = parseFloat(withdrowInputText); */

    const withdrowInputAmount = amountInput('withdrow-input');

    //take current withdrow amount
    /*  const withdrowBalance = document.getElementById('withdrow-balance');
     const withdrowBalanceText = withdrowBalance.innerText;
     const withdrowBalanceAmount = parseFloat(withdrowBalanceText);
     const totalWithdrow = withdrowInputAmount + withdrowBalanceAmount;
     withdrowBalance.innerText = totalWithdrow; */



    //calculate total balance
    /* const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const balance = parseFloat(totalBalanceText);
    const updateBalance = balance - withdrowInputAmount;
    totalBalance.innerText = updateBalance; */
    const currentBalance = getCurrentBalance();
    if (withdrowInputAmount > 0 && currentBalance > withdrowInputAmount) {
        updateDepositWithdrowBalance('withdrow-balance', withdrowInputAmount);
        updateTotalBalance(withdrowInputAmount, false);
    }
    // clear withdrow field 
    // withdrowInput.value = '';

});