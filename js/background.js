var current = 0;
var gradient = "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))";

window.onload = function(){

    function changeImage() {

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

        document.body.style.background = gradient + ', url("' + backgrounds[current] + '") no-repeat center center fixed';
        document.body.style.backgroundSize = "60%";
        
        current++;
        current = current %backgrounds.length;
    }
    window.setInterval(changeImage, 1500);
}