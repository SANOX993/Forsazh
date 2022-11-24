let aboutOffset = 0; // смещение слева
let aboutScrollOffset = 0; 
const aboutLine = document.querySelector('.about__slider-line');
const aboutScroll = document.querySelector('.about__slider-cursor');


// работа слайдера 
document.querySelector('.about__slider-right').addEventListener('click', function(){
    aboutOffset = aboutOffset + 630;
    if (aboutOffset > 2000) {
        aboutOffset = 0;
    }
    aboutLine.style.left = -aboutOffset + 'px';
});

document.querySelector('.about__slider-left').addEventListener('click', function(){
    aboutOffset = aboutOffset - 630;
    if (aboutOffset < 0) {
        aboutOffset = 1890;
    }
    aboutLine.style.left = -aboutOffset + 'px';
});
// работа слайдера 


// работа скрола
document.querySelector('.about__slider-right').addEventListener('click', function(){
    aboutScrollOffset = aboutScrollOffset + 25.3;
    if (aboutScrollOffset > 75.9) {
        aboutScrollOffset = 0;
    }
    aboutScroll.style.left = aboutScrollOffset + '%';
});

document.querySelector('.about__slider-left').addEventListener('click', function(){
    aboutScrollOffset = aboutScrollOffset - 25.3;
    if (aboutScrollOffset < 0) {
        aboutScrollOffset = 75.9;
    }
    aboutScroll.style.left = aboutScrollOffset + '%';
});
// работа скрола

//нажатие на картинку 

document.querySelector('.about__slider-images-image1').addEventListener('click', function(){
    aboutScrollOffset = 0;
    aboutScroll.style.left = aboutScrollOffset + 'px';
    aboutOffset = 0;
    aboutLine.style.left = -aboutOffset + '%';
});

document.querySelector('.about__slider-images-image2').addEventListener('click', function(){
    aboutScrollOffset = 25.3;
    aboutScroll.style.left = aboutScrollOffset + '%';
    aboutOffset = 630;
    aboutLine.style.left = -aboutOffset + 'px';
});

document.querySelector('.about__slider-images-image3').addEventListener('click', function(){
    aboutScrollOffset = 50.6;
    aboutScroll.style.left = aboutScrollOffset + '%';
    aboutOffset = 1260;
    aboutLine.style.left = -aboutOffset + 'px';
});

document.querySelector('.about__slider-images-image4').addEventListener('click', function(){
    aboutScrollOffset = 75.9;
    aboutScroll.style.left = aboutScrollOffset + '%';
    aboutOffset = 1890;
    aboutLine.style.left = -aboutOffset + 'px';
});

//нажатие на картинку 