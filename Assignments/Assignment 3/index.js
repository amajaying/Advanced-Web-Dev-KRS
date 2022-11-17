var fname = "Ajay";
var lname = "Khatri";
var birthYear = 2003;
var date = new Date();
var currentYear = date.getFullYear();

var age = currentYear - birthYear;

console.log("My name is " + fname + " " + lname + " and I am " + age + " years old and I'm learning JavaScript.");

// For images in food menu
var imgs = document.getElementsByClassName("menu-item");
imgs[1].style.backgroundImage = "url('./img/FOOD1.jpeg')";
imgs[2].style.backgroundImage = "url('./img/FOOD2.jpeg')";
imgs[3].style.backgroundImage = "url('./img/FOOD3.jpeg')";
imgs[4].style.backgroundImage = "url('./img/FOOD4.jpeg')";
imgs[5].style.backgroundImage = "url('./img/FOOOD3.jpeg')";
imgs[6].style.backgroundImage = "url('./img/FOOOD2.jpeg')";
imgs[7].style.backgroundImage = "url('./img/foodd.jpeg')";