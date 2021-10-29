const partnersContainer = document.querySelector('.partners__container');
const partnersContainerItems = document.querySelectorAll('.partners__firm');
window.addEventListener('scroll', function(e) {
    let initedPartner = false;
    if(window.innerHeight - 100 > partnersContainer.getBoundingClientRect().top &&
        100 - window.innerHeight < partnersContainer.getBoundingClientRect().top &&
        !initedPartner){
        initedPartner = true;
        partnersContainerItems.forEach(function (item, index) {
            setTimeout(function () {
                item.classList.add('active');
            }, (index+1) * 500)
        })
    }
});
