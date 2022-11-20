//ELEMENTS
const sliderDiv = document.querySelector('.slider-div')
const imagesDiv = document.querySelector('.images-div')

const arrLeft = document.querySelector('.left')
const arrRight = document.querySelector('.right')

//SLIDER CANVAS SIZE
const canvasWidth = 540
const canvasHeight = 360

//-----SETTINGS-----

let useOverflowHidden = true //Hide images if it's outside the slider container

let useAutoSlide = true //Automatic slide switching
let autoSlideDelay = 3 //Delay between switching slides in seconds (Don't works if useAutoSlide = false)
let autoSlideSide = 'right' //'left' or 'right'

let showDots = true; //Show dots under the slider

let slideAnimationSpeed = 1 //Slide animation speed

//------------------

//ARRAY OF IMAGES | the aspect ratio must match the canvas size
let images = 
['images/slide1.jpg', 'images/slide2.jpg', 'images/slide3.jpg', 'images/slide4.jpg']

//DO NOT CHANGE
let offset = 0

syncWithSize()
displayImages()
applyCSS()

autoSlide()

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

function syncWithSize(){//CSS SYNC WITH CANVAS SIZE
    const arrows = document.querySelectorAll('.arrow-div')
    arrows.forEach((arr) => {arr.style.height = canvasHeight})
    const right = document.querySelector('.right')
    right.style.left = canvasWidth - canvasWidth / 100 * 25
}

function applyCSS(){
    if(useOverflowHidden){
        sliderDiv.style.overflow = 'hidden'
    }else{
        sliderDiv.style.overflow = 'visible'
    }
}

async function autoSlide(){
    if(useAutoSlide){
        move(autoSlideSide)
        await delay(autoSlideDelay)
        autoSlide()
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
        if(offset === 0){
            offset = -(images.length*canvasWidth - canvasWidth)
            imagesDiv.style.left = offset
        }
        else{
            imagesDiv.style.left = offset + canvasWidth
            offset += canvasWidth
        }
    }
    else if(_dir === 'right'){
        if(offset + -canvasWidth - canvasWidth < -images.length*canvasWidth){
            offset = 0
            imagesDiv.style.left = offset
        }
        else{
            imagesDiv.style.left = offset + -canvasWidth
            offset += -canvasWidth
        }
    }

    //console.log(offset + ' | ' + _dir)
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time * 1000));
}