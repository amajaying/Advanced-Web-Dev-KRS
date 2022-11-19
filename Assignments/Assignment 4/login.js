var btn = document.getElementById("loginButton");

var nameList = ["ajay", "aditya", "rishav", "malvika"];

btn.onclick = function() {
    if (validate()) {
        alert("You are logged in successfully!");
    }
}



function seterror(id, error) {

    document.getElementById(id).innerHTML = error;

}


function clearErrors() {
    errors = document.getElementsByClassName('error');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function validate() {
    var returnVal = true;
    clearErrors();
    var name = document.forms["myForm"]["username"].value;

    if (name == 0) {
        seterror("usernameErr", "*Name cannot be blank");
        returnVal = false;
    } else if (nameList.includes(name)) {
        returnVal = true;
    } else {
        seterror("usernameErr", "*Enter the correct name");
        returnVal = false;
    }

    var pass = document.forms['myForm']['password'].value;
    if (pass.length == 0) {
        seterror("passwordErr", "*Password cannot be blank");
        returnVal = false;
    } else if (pass == "1234") {
        returnVal = true;
    } else {
        seterror("passwordErr", "*Please enter the correct password.");
        returnVal = false;
    }


    return returnVal;

}

// API for get requests
let fetchRes = fetch(
    "https://jsonplaceholder.typicode.com/todos/7");
// fetchRes is the promise to resolve it by using.then() method
fetchRes.then(res => // short handed function
    res.json()).then(d => {
    console.log(res)
})