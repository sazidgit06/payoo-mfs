function getInput(id){
    const inputString = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputString);
    return inputNumber;
}

function getText(id){
    const inputString = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputString);
    return inputNumber;
}

function showForm(id){
    document.getElementById('add-money-form-id').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-id').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}