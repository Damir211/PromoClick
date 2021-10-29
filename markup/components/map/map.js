const regionsArea = document.querySelectorAll('[data-tooltip]');
const mapTooltip = document.querySelector('.map-tooltip');
const regionTooltipName = document.querySelector('.map-tooltip-region');


if(regionsArea.length > 0){
    regionsArea.forEach(function (item) {
        if(window.innerWidth > 991){
            item.addEventListener('mouseout', function () {
                mapTooltip.classList.remove('active');
            });
            item.addEventListener('mouseover', function () {
                mapTooltip.classList.add('active');
                regionTooltipName.textContent = item.dataset.tooltip;
            });
            item.addEventListener('mousemove', function (e) {
                mapTooltip.style.left = (e.clientX + 20) + 'px';
                mapTooltip.style.top = (e.clientY + 20) + 'px';
            });
        }
    })
}
