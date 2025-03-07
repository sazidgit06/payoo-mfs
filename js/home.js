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