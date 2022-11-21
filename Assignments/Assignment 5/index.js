// const { response } = require("express");

var options = document.getElementById("gender-dropdown");
var gender = document.getElementById("gender-select");
var arrow = document.getElementById("arrow");
var count = 0;

var smsg = document.querySelector("#success");


gender.onclick = function() {
    if (count == 0) {
        options.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
        count = 1;
    } else {
        options.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
        count = 0;
    }
}
window.onclick = function(event) {
    if (event.target != gender) {
        options.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
        count = 0;
    }
}



var genderSel = document.querySelector("#selected-gen");

var option1 = document.getElementById("option-1");
option1.onclick = function() {
    // console.log("clicked!");
    genderSel.innerHTML = "Male";
}

var option2 = document.getElementById("option-2");
option2.onclick = function() {
    // console.log("clicked!");
    genderSel.innerHTML = "Female";
}
var option3 = document.getElementById("option-3");
option3.onclick = function() {
    // console.log("clicked!");
    genderSel.innerHTML = "Others";
}



var btn = document.querySelector("#button");

btn.onclick = getAvatar;

function getAvatar() {
    // console.log("clicked");

    uname = document.querySelector("#name").value;
    var username = uname.toLowerCase();

    var gender = document.querySelector("#selected-gen").innerHTML;
    var gen = gender.toLowerCase();
    var imgUrl = "https://joeschmoe.io/api/v1/";
    if (gen != "others") { var url = imgUrl + gen + "/" + username; } else {
        var url = imgUrl + "random";
    }

    document.querySelector("#avatar-img").src = url;

    //set interval
    var interval = setInterval(function() {
        smsg.style.display = "block";
    }, 2000);

    //clear interval
    setTimeout(function() {
        clearInterval(interval);
        smsg.style.display = "none";
    }, 5000);



    // let p = fetch(`https://joeschmoe.io/api/v1/${gen}/${username}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         document.querySelector("#avatar").src = response;
    //     })


    // const url = "https://cors-anywhere.herokuapp.com/https://joeschmoe.io/api/v1/" + gen + "/" + username;
    // const url = "https://joeschmoe.io/api/v1/" + gen + "/" + username;
    // const url = "https://dog.ceo/api/breeds/image/random";
    // var headers = {};

    // fetch(url, {
    //         method: 'GET',
    //         mode: 'cors',
    //         headers: headers
    //     })
    //     // .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         // document.querySelector("#avatar-img").src = data.message;
    //         // const imgSrc = response.toDataURL("image/png");
    //         // console.log(imgSrc);
    //         // document.querySelector("#avatar-img").src = data.url;

    //         document.querySelector("#avatar-div").innerHTML = data;
    //     })
}