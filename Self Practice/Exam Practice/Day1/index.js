const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', () => {
        removeClass()
        image.classList.add('active')
    })
});

function removeClass() {
    images.forEach(image => {
        image.classList.remove('active')
    });

}


var flags = '{"countries":['{"country":"Ireland",}']}'