//ELEMENTS
const sliderDiv = document.querySelector('.slider-div')
const imagesDiv = document.querySelector('.images-div')

const arrLeft = document.querySelector('.left')
const arrRight = document.querySelector('.right')

//SLIDER WINDOW SIZE
const canvasWidth = 540
const canvasHeight = 360

//DO NOT CHANGE
let offset = 0

//ARRAY OF IMAGES
let images = 
['images/slide1.jpg', 'images/slide2.jpg', 'images/slide3.jpg', 'images/slide4.jpg']

displayImages()

sliderDiv.style.width = canvasWidth
sliderDiv.style.height = canvasHeight

function displayImages(){//DISPLAY ALL IMAGES FROM images ARRAY
    for(let i = 0; i < images.length; i++){
        let _img = document.createElement('img');
        _img.src = images[i]

        _img.style.width = canvasWidth
        _img.style.height = canvasHeight

        imagesDiv.appendChild(_img)
    }
}

arrLeft.onclick = function(){//Click on the left button
    move('left')
}
arrRight.onclick = function(){//Click on the right button
    move('right')
}

function move(_dir){
    if(_dir === 'left'){
        imagesDiv.style.left = offset + canvasWidth
        offset += canvasWidth
    }else if(_dir === 'right'){
        imagesDiv.style.left = offset + -canvasWidth
        offset += -canvasWidth
    }

    console.log(offset + ' | ' + _dir)
}