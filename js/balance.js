document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();

    // add amount
    const amount = getInput('amount-id');
    const pin = getInput('pin-id');

    // validation 
    if(isNaN(amount)){
        alert('failed to add money');
        return;
    }
    if(pin === 1122){
        const presentBalance = getText('stat-value');
        // validation
        if(presentBalance < amount){
            alert('Failed to cash out');
            return;
        }
        const newBalance = amount + presentBalance;
        document.getElementById('stat-value').innerText = newBalance;

        // add to transaction
        const p = document.createElement('p');
        p.innerText = `Added ${amount}tk your new balance is: ${newBalance}`;
        document.getElementById('transaction-container').appendChild(p);
    }else{
        alert('failed to add money!');
    }
});