const loginButton = document.getElementById('login-Button');
loginButton.addEventListener('click', function(){
    var loginArea = document.getElementById('login-Area');
    loginArea.style.display = "none";

    var transactionArea = document.getElementById('transaction');
    transactionArea.style.display = 'block'
})


// deposit Start

const depositButton = document.getElementById('deposit-Btn');
    depositButton.addEventListener('click',function(){
        const depositValue = document.getElementById('deposit-Value').value;
        const depositValueNum = parseFloat(depositValue);
        document.getElementById('deposit-amount').innerText;
        const depositAmountValue = parseFloat(depositValueNum );
        
        document.getElementById('deposit-amount').innerText = depositAmountValue;
        document.getElementById('deposit-Value').value = ""
// deposit End



// Balance Add start
        const balance = document.getElementById('balance-amount').innerText;
        const balanceAmount = parseFloat(balance);
        const totalBalance = depositAmountValue + balanceAmount
        document.getElementById('balance-amount').innerText = totalBalance;  

    })

// Balance Add End


// withdraw Start

const withdrawButton = document.getElementById('withdraw-btn');
withdrawButton.addEventListener('click', function(){
    const withdraw = document.getElementById('withdraw-Value').value;
    const withdrawValue = parseFloat(withdraw);

    document.getElementById('withdraw-amount').innerText;
    const withdrawAmountValue = parseFloat(withdrawValue);

    document.getElementById('withdraw-amount').innerText = withdrawAmountValue;
    document.getElementById('withdraw-Value').value = "";
// withdraw End


// Balance decrease Start
    const balance = document.getElementById('balance-amount').innerText;
    const balanceAmount = parseFloat(balance);
    const currentBalance = balanceAmount - withdrawValue;
    document.getElementById('balance-amount').innerText = currentBalance;

})

// Balance decrease End

