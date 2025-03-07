document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-id').value;
    const pinNumber = document.getElementById('pin-id').value;
    console.log(mobileNumber, pinNumber);
    if(mobileNumber === '5' && pinNumber === '1122'){
        alert('Loged in successfully');
        window.location.href = '/home.html';
    }else{
        alert('Log in failed');
    }
});