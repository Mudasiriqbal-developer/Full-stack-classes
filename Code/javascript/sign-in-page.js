const form = document.getElementById("signupForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function(e){

    if(password.value !== confirmPassword.value){

        e.preventDefault();
        errorMsg.textContent = "Password doesn't match please try again";
        errorMsg.style.display = "block";

    }
    else{

        errorMsg.style.display = "none";
        alert("Form Submitted Successfully");

    }

});