const headerLogo = document.querySelector('.header .logo');
const headerElement = document.querySelector('.header');
window.addEventListener('scroll', function(e) {
    if(getBodyScrollTop() > 100){
        headerLogo.classList.add('pointer');
        headerElement.classList.add('scrolled');
    }else{
        headerLogo.classList.remove('pointer');
        headerElement.classList.remove('scrolled');
    }
});
const linkScrollTo = document.querySelectorAll('[data-scroll-to]');
if(linkScrollTo.length > 0){
    linkScrollTo.forEach(function (item) {
        item.addEventListener('click', function () {
            let id = item.dataset.scrollTo;
            let scrollTarget = document.getElementById(id);
            let topOffset = document.querySelector('.header').offsetHeight;
            let elementPosition = scrollTarget.getBoundingClientRect().top;
            let offsetPosition = elementPosition - topOffset;
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        })
    })
}
