let commentsOffset = 0; 
const commentsLine = document.querySelector('.comments__slider-line');

document.querySelector('.comments__arrow-right').addEventListener('click', function(){
    commentsOffset = commentsOffset + 612;
    if (commentsOffset > 1224) {
        commentsOffset = 0;
    }
    commentsLine.style.left = -commentsOffset + 'px';
});

document.querySelector('.comments__arrow-left').addEventListener('click', function(){
    commentsOffset = commentsOffset - 612;
    if (commentsOffset < 0) {
        commentsOffset = 1224;
    }
    commentsLine.style.left = -commentsOffset + 'px';
});

