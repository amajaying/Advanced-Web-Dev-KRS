var btn = document.getElementById("loginButton");

btn.onclick = function() {
    validate();
}

console.log(btn)

function validate() {
    var form = document.getElementById("myForm");
    var username = form.username.value;
    console.log(username)
    if (username != "ajay") {
        var error = document.getElementById("usernameErr");
        error.innerHTML = "Invalid username";
    } else {
        alert("Badhai ho!");
    }
}