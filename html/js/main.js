hs.captionId = 'the-caption';
hs.outlineType = 'rounded-white';
window.onload = function() {
    hs.preloadImages(5);
}

$(function() {

    (function() {
        var slider = $('.slider').bxSlider({
            mode: 'fade',
            speed: 1000,
            auto: true,
            pause: 6000,
            controls: false,
            pager: true,
            useCSS: false,
            onSlideAfter: function(){
                if(this.auto){
                    slider.startAuto();
                }
            }
        });
    })();

});