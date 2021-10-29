function getBodyScrollTop()
{
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}


const graphicsElementsCircle = document.querySelectorAll('.solution__canvas');
if(graphicsElementsCircle.length > 0){
    graphicsElementsCircle.forEach(function (item) {
        let percent = 0;
        let color = '#000000';
        if(item.dataset.percent){
            percent = +item.dataset.percent;
        }
        if(item.dataset.color){
            color = item.dataset.color
        }
        let bar = new ProgressBar.Circle(item, {
            strokeWidth: 9,
            easing: 'easeInOut',
            duration: 1400,
            color,
            trailColor: '#e8e8e8',
            trailWidth: 9,
            svgStyle: null
        });
        let inited = false;
        window.addEventListener('scroll', function(e) {
            if(window.innerHeight - 100 > item.getBoundingClientRect().top && 100 - window.innerHeight < item.getBoundingClientRect().top && !inited){
                inited = true;
                bar.animate(percent);
                item.insertAdjacentHTML('beforeend','<span class="percent-text" style="color: '+ color +'">'+ percent * 100 +'%</span>')
            }
        });
    })
}

if(document.getElementById('phone-mask')){
    let documentPhoneInput = document.getElementById('phone-mask');
    let phoneMask = IMask(
        documentPhoneInput, {
            mask: '+{7} (000) 000 00-00',
        });
    documentPhoneInput.onfocus = function(){
        if(this.value.length === 0){
            this.value = "+7 (";
            phoneMask.updateValue();
        }
    }
}
