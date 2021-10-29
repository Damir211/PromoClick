const mobileOpen = document.querySelector('.header__menubtn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelectorAll('.mobile-close-menu');


mobileOpen.addEventListener('click', function () {
    mobileMenu.classList.add('active');
    document.body.classList.add('no-scroll');
})
if(mobileMenuClose.length > 0){
    mobileMenuClose.forEach(function (item) {
        item.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            if(!item.classList.contains('button')){
                document.body.classList.remove('no-scroll');
            }
        })
    })
}
mobileMenu.addEventListener('click', function (e) {
    if(e.target === this){
        mobileMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
})
