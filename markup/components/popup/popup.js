const buttonsPopup = document.querySelectorAll('.popup-contact-open');
const popupContainer = document.querySelector('.popup-contact');
const popupClose = document.querySelectorAll('.popup__close');
const buttonUpScroll = document.querySelector('.button-up');

let timeOut;
function goUp() {
    let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        timeOut = setTimeout('goUp()',20);
    } else clearTimeout(timeOut);
}
if(buttonsPopup.length > 0){
    buttonsPopup.forEach(function (item) {
        item.addEventListener('click', function(){
            popupContainer.classList.add('active');
            document.body.classList.add('no-scroll');
        });
    })
}
if(popupClose.length > 0){
    popupClose.forEach(function (item) {
        item.addEventListener('click', function () {
            popupContainer.classList.remove('active');
            document.body.classList.remove('no-scroll');
        })
    })
}
popupContainer.addEventListener('click', function (e) {
    if(e.target === this){
        popupContainer.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
})

window.addEventListener('scroll', function(e) {
    if(getBodyScrollTop() > window.innerHeight && getBodyScrollTop() < (document.body.offsetHeight - window.innerHeight - 200)){
        buttonUpScroll.classList.add('active');
    }else{
        buttonUpScroll.classList.remove('active');
    }
});
buttonUpScroll.addEventListener('click', function () {
    goUp();
})
