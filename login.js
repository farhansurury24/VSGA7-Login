const correctEmail = 'jwd@gmail.com';
const correctPassword = '1234';

const messageContainer = document.getElementById
('message-container');

function cekLogin(){
    const userEmail = document.getElementById('femail').value;
    const userPassword = document.getElementById('fpassword').value;

    if((userEmail != correctEmail) || (userPassword != correctPassword)){
        messageContainer.innerHTML = "<p class='error-message'>Login Gagal, Email atau Password Salah !</p>";
    } else {
        messageContainer.innerHTML = "<p class='success-message'>Login Berhasil . . .</p>";
    }
    //alert(userPassword);
}
    
