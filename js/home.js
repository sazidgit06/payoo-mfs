// add money
document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('amount-id').value;
    const pinNumber = document.getElementById('pin-id').value;
    const statValue = document.getElementById('stat-value').innerText;
    if(pinNumber === '1122'){
        const amountNumber = parseFloat(amount);
        const statValueNumber = parseFloat(statValue);
        const newBalance = amountNumber + statValueNumber;
        document.getElementById('stat-value').innerText = newBalance;
    }else{
        alert('pin error');
    }
});

// cash out
document.getElementById('cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const amountString = document.getElementById('amount-out-id').value;
    const pinString = document.getElementById('pin-id-out').value;
    const presentAmountString = document.getElementById('stat-value').innerText;
    if(pinString === '1122'){
        const amountNumber = parseFloat(amountString);
        const presentAmountNumber = parseFloat(presentAmountString);
        const newBalance = Math.abs(amountNumber - presentAmountNumber);
        document.getElementById('stat-value').innerText = newBalance;
    }else{
        alert('Cash out fail please try again!');
    }
});

// features adding

document.getElementById('cash-out-id').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form-id').classList.add('hidden');

});
document.getElementById('add-money-button-id').addEventListener('click', function(){
    document.getElementById('add-money-form-id').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
});



















