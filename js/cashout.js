document.getElementById('cash-out').addEventListener('click', function(event){
    event.preventDefault();

    // cash out
    const amount = getInput('amount-out-id');
    const pin = getInput('pin-id-out');
    // validation
    if(isNaN(amount)){
        alert('failed to cash out');
        return;
    }
    if(pin === 1122){
        const presentBalance = getText('stat-value');
        // validation
        if(presentBalance < amount){
            alert('Failed to cash out');
            return;
        }
        const newBalance = presentBalance - amount;
        document.getElementById('stat-value').innerText = newBalance;

        // add history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl">Cash Out</h4>
            <p>${amount} withdraw. New balamce is : ${newBalance}</p>
        `;
        document.getElementById('transaction-container').appendChild(div);

    }else{
        alert('failed to cash out');
    }
});