function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");

    error.innerHTML = "";

    if (name.trim() === "") {
        error.innerHTML += "Please enter your name.<br>";
    }

    if (email.trim() === "") {
        error.innerHTML += "Please enter your email.<br>";
    }

    if (message.trim() === "") {
        error.innerHTML += "Please enter your message.<br>";
    }

    if (error.innerHTML !== "") {
        return false;
    }
}