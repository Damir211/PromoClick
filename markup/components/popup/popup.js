const buttonsPopup = document.querySelectorAll('.popup-contact-open');
const popupContainer = document.querySelector('.popup-contact');
const popupClose = document.querySelectorAll('.popup__close');
const buttonUpScroll = document.querySelector('.button-up');
const utmLinksArray = document.querySelectorAll('.utm-link-tel');

let defaultPhoneNumber = {
  text: '+7 499 490 60 28',
  link: 'tel:+74994906028',
};


function getParameterByName(name) {
    let newName = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    let regex = new RegExp("[\\?&]" + newName + "=([^&#]*)");
    let results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Give the URL parameters variable names
let content = getParameterByName('utm_content');

const utmNames = [
    {
        utmList: [  'provedenie_reklamnyh_akciy_',
                    'marketingovoe_agentstvo',
                    'reklamnoe_agentstvo',
                    'prodvizhenie_tovara',
                    'provedenie_promo_akciy',
                    'chekovoe_promo_poisk',
                    'motivacionnye_programmy',
                    'prodvizhenie_produktov',
                    'marketingovye_agentstva'],
        phoneInfo: {
            text: '+7 499 348 89 35',
            link: 'tel:+74993488935'
        }
    },
];

if(content.length > 0){
    utmNames.forEach(function (item) {
        if(item.utmList.some((item) => item === content)){
            console.log('есть совпадение');
            defaultPhoneNumber = item.phoneInfo;
        }
    })
}

utmLinksArray.forEach(function (item) {
    item.textContent = defaultPhoneNumber.text;
    item.href = defaultPhoneNumber.link;
})

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
