let images = [

    "/img/img-sld/IMG_51100.png",
    "/img/img-sld/IMG_5199.jpg",
    "/img/img-sld/IMG_5191.jpg"
];

document.image.src = images[0];

let sliderLeft = document.querySelector(".slider_left");
let sliderRigth = document.querySelector(".slider_rigth");

let count = 0;

function moveRigth (){
    count++;
    if(count > images.length-1)
    {
        count = 0;
    }
    document.image.src = images[count];
}

let interval = setInterval(moveRigth, 4000);
sliderRigth.addEventListener("click", function()
{
    clearInterval(interval);
    moveRigth();
    interval = setInterval(moveRigth, 4000);

})

function moveLeft (){
    count++;
    if(count < 0)
    {
        count = images.length - 1;
    }
    document.image.src = images[count];
}
sliderLeft.addEventListener("click", function()
{
    clearInterval(interval);
    moveRigth();
    interval = setInterval(moveRigth, 4000);
})