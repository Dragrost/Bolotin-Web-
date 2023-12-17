function PasswordChecker(){
    var x = document.getElementById("confPassword");
    var y = document.getElementById("password");
    if (x.value !== y.value){
        alert("Пароли не совпадают");
        throw new Error
    }
}