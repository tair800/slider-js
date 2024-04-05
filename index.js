let sliderImg = document.querySelector(".img");
let images = [`a.jpg`, `b.jpg`, `c.jpg`,`d.jpg`];
let i = 0;

let prevBtn = document.querySelector(".prev").addEventListener("click", function () {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
});

let nextBtn = document.querySelector(".next").addEventListener("click", function () {
    if (i >= images.length - 1) i = -1;
    i++
    return setImg();
});


function setImg() {
    return sliderImg.setAttribute(`src`, `images/` + images[i])
};
