const buttonsPopup = document.querySelectorAll('.popup-contact-open');
const popupContainer = document.querySelector('.popup-contact');
const popupClose = document.querySelectorAll('.popup__close');
const buttonUpScroll = document.querySelector('.button-up');
const utmLinksArray = document.querySelectorAll('.utm-link-tel');
const popupInputs = document.querySelectorAll('.require-or');
const popupInputsButton = document.querySelector('.require-or-button');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
let validatePopupForm = false;
popupInputs.forEach(function (item) {
    item.addEventListener('input', function () {
        validatePopupForm = false
        if(item.classList.contains('require-or-email')){
            if(validateEmail(item.value)){
                validatePopupForm = true;
            }
        }
        if(item.classList.contains('require-or-tel')){
            if(item.value.length > 17){
                validatePopupForm = true;
            }
        }
        if(validatePopupForm){
            popupInputsButton.classList.remove('disabled');
        }else{
            popupInputsButton.classList.add('disabled');
        }
    })
})

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
    },{
        utmList: [  'marketingovoe_agentstvo_728_90',
            'marketingovoe_agentstvo_640_200',
            'marketingovoe_agentstvo_640_100',
            'marketingovoe_agentstvo_336_280',
            'marketingovoe_agentstvo_300_250',
            'marketingovoe_agentstvo_240_400',

            'prodvizhenie_produktov_728_90',
            'prodvizhenie_produktov_640_200',
            'prodvizhenie_produktov_640_100',
            'prodvizhenie_produktov_336_280',
            'prodvizhenie_produktov_300_250',
            'prodvizhenie_produktov_240_400',

            'motivacionnye_programmy_728_90',
            'motivacionnye_programmy_640_200',
            'motivacionnye_programmy_640_100',
            'motivacionnye_programmy_336_280',
            'motivacionnye_programmy_300_250',
            'motivacionnye_programmy_240_400',

            'chekovoe_promo_728_90',
            'chekovoe_promo_640_200',
            'chekovoe_promo_640_100',
            'chekovoe_promo_336_280',
            'chekovoe_promo_300_250',
            'chekovoe_promo_240_400',

            'provedenie_promo_akciy_728_90',
            'provedenie_promo_akciy_640_200',
            'provedenie_promo_akciy_640_100',
            'provedenie_promo_akciy_336_280',
            'provedenie_promo_akciy_300_250',
            'provedenie_promo_akciy_240_400',

            'prodvizhenie_tovara_728_90',
            'prodvizhenie_tovara_640_200',
            'prodvizhenie_tovara_640_100',
            'prodvizhenie_tovara_336_280',
            'prodvizhenie_tovara_300_250',
            'prodvizhenie_tovara_240_400',

            'reklamnye_agentstva_728_90',
            'reklamnye_agentstva_640_200',
            'reklamnye_agentstva_640_100',
            'reklamnye_agentstva_336_280',
            'reklamnye_agentstva_300_250',
            'reklamnye_agentstva_240_400',

            'marketingovye_agentstva_728_90',
            'marketingovye_agentstva_640_200',
            'marketingovye_agentstva_640_100',
            'marketingovye_agentstva_336_280',
            'marketingovye_agentstva_300_250',
            'marketingovye_agentstva_240_400',

            'provedenie_reklamnyh_akciy_728_90',
            'provedenie_reklamnyh_akciy_640_200',
            'provedenie_reklamnyh_akciy_640_100',
            'provedenie_reklamnyh_akciy_336_280',
            'provedenie_reklamnyh_akciy_300_250',
            'provedenie_reklamnyh_akciy_240_400',
        ],
        phoneInfo: {
            text: '+7 499 113 70 38',
            link: 'tel:+74991137038'
        }
    }
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
