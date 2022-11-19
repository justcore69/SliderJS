const sliderDiv = document.querySelector('.slider-div')
const imagesDiv = document.querySelector('.images-div')

//SLIDER WINDOW SIZE
const canvasWidth = 540;
const canvasHeight = 360;

let images = 
['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.jpg', '/images/slide4.jpg']

displayImages()

sliderDiv.style.width = canvasWidth;
sliderDiv.style.height = canvasHeight;

function displayImages(){
    for(let i = 0; i < images.length; i++){
        let _img = document.createElement('img');
        _img.src = images[i]

        _img.style.width = canvasWidth

        imagesDiv.appendChild(_img)
    }
}

imagesDiv.onclick = function(){
    move('right')
}

function move(_dir){
    _dir === 'right' ? imagesDiv.style.left = canvasWidth : imagesDiv.style.left = canvasWidth
    console.log('jj')
}