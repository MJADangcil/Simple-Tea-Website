var imgIndex = 0;
var gradient = "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))";
var backgrounds = [
    "../assets/Corp gift tea web site content/coffee gift sets/simple coffee with a gift box.jpg",
    "../assets/Corp gift tea web site content/coffee gift sets/simple coffee with travel mug.jpg",
    "../assets/Corp gift tea web site content/featured projects/code red.jpg",
    "../assets/Corp gift tea web site content/coffee gift sets/simple coffee with porcelain cup with lid.jpg",
    "../assets/Corp gift tea web site content/images for small slider/jasmine.jpg",
    "../assets/Corp gift tea web site content/images for small slider/google.jpg",
    "../assets/Corp gift tea web site content/tea gift sets boxes/Tea traveler 10.jpg",
    "../assets/Corp gift tea web site content/tea gift sets boxes/zen.jpg"
];

// window.onload = function () {

//     function changeImage() {

//         document.body.style.background = gradient + ', url("' + backgrounds[imgIndex] + '") no-repeat center center fixed';
//         document.body.style.backgroundSize = "60%";

//         imgIndex++;
//         imgIndex = imgIndex % backgrounds.length;

        
//     }
//     //setInterval(fadeOut, 2000);
//     window.setInterval(changeImage, 2000);
//     //setInterval(fadeIn, 2000);
// }

function fadeOut() {
    
    
    for (var i = 1; i < 100; i += 1) { // change the += 1 for different smoothness
        (function (i) {
            setTimeout(function () {
                document.getElementById("bg").style.opacity = 1 - (i * 0.01);
            }, i * 10);
        })(i);
    }

    
}

function fadeIn() {
    for (var i = 1; i < 100; i += 1) { // change the += 1 for different smoothness
        (function (i) {
            setTimeout(function () {
                document.getElementById("bg").style.opacity = i * 0.01;
            }, i * 10);
        })(i);
    }
}