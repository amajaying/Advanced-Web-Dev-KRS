var btn = document.getElementById("register");
var clr = document.getElementById("clear");
clr.onclick = function() {
    clearErrors();
    clearValues();
}

btn.onclick = function() {
    var x = validateForm();

    if (x) {
        alert("Thanks for registering!");
    }
}

function clearValues() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gender1").checked = false;
    document.getElementById("gender2").checked = false;
    document.getElementById("quali1").checked = false;
    document.getElementById("quali2").checked = false;
    document.getElementById("course1").checked = false;
    document.getElementById("course2").checked = false;
    document.getElementById("condition-check").checked = false;
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

function validateForm() {
    var returnVal = true;
    clearErrors();
    var name = document.forms["myForm"]["username"].value;


    if (name.length == 0) {
        seterror("usernameErr", "*Name cannot be blank");
        returnVal = false;
    }


    if (name.length < 5) {
        seterror("usernameErr", "*Name must be at least 5 characters long");
        returnVal = false;
    }

    var phone = document.forms["myForm"]["phone"].value;

    if (phone.length != 10) {
        seterror("phoneErr", "*Phone number must be of 10 digits");
        returnVal = false;
    }

    var email = document.forms["myForm"]["email"].value;
    if (email.length == 0) {
        seterror("emailErr", "*Email cannot be blank");
        returnVal = false;
    }
    if (email.indexOf('@') <= 0) {
        seterror("emailErr", "*Enter a vaild email");
        returnVal = false;
    }
    var gender = document.forms["myForm"]["gender"].value;
    if (gender == "") {
        seterror("genderErr", "*Choose atleast one option");
        returnVal = false;

    }

    var qualification = document.forms["myForm"]["quali"].value;
    if (qualification == "") {
        seterror("qualiErr", "*Choose atleast one option");
        returnVal = false;
    }

    var course = document.forms["myForm"]["course"].value;
    if (course == "") {
        seterror("courseErr", "*Choose atleast one option");
        returnVal = false;
    }

    var country = document.forms["myForm"]["country"].value;
    if (country == "Select") {
        seterror("countryErr", "*Choose country");
        returnVal = false;
    }

    var checkbox = document.forms["myForm"]["condition-check"].checked;

    if (!checkbox) {
        seterror("conditionsErr", "*Please accept the terms and conditions");
        returnVal = false;
    }

    return returnVal;
}