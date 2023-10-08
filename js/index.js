// let refrashHome = document.getElementById("refrash");
// refrashHome.addEventListener('mousedown', refrash)
let scrollToImages = false;
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image");

    window.addEventListener("scroll", function () {
        images.forEach(image => {
            const imageTop = image.getBoundingClientRect().top;
            if (imageTop < window.innerHeight) {
                image.style.transform = "translateY(0)";
                image.style.opacity = 1;
                scrollToImages = true;
            }   
            else{
                image.style.opacity = 0;
            }
        });

        console.log(scrollToImages);
    });
});

// function refrash() {
//     location.onload()
// }