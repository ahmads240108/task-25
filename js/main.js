function showError(message) {
    var result = document.getElementById("result");
    result.innerHTML = message;
    result.classList.add("show");
}

function validateValue() {
    var user = document.getElementById("user").value.trim();
    var email = document.getElementById("email").value.trim();
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;

    if (user == "" && email == "" && pass == "" && confirm == "") {
        showError("Enter Data");
        return false;
    } else if (user.length < 5 || user.length > 15) {
        showError("Enter 5-15 characters in Name");
        return false;
    } else if (email.indexOf("@", 1) == -1 || email.indexOf(".com") == -1) {
        showError("Enter a valid Email");
        return false;
    } else if (pass.length < 6) {
        showError("Password must be at least 6 characters");
        return false;
    } else if (pass !== confirm) {
        showError("Passwords do not match");
        return false;
    }

    return true;
}