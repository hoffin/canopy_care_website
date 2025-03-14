$(document).ready(function() {
    if ($('.before-after').length) {
        console.log('Initializing before-after carousel from dedicated JS file');
        
        $('.before-after').owlCarousel({
            navigation: true,
            navigationText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            slideSpeed: $('.before-after').attr('data-slide-speed') || 2000,
            paginationSpeed: $('.before-after').attr('data-pagination-speed') || 1000,
            autoPlay: $('.before-after').attr('data-autoplay') === 'true',
            stopOnHover: true,
            singleItem: true,
            lazyLoad: false,
            addClassActive: true,
            afterInit: function() {
                console.log('Before-after carousel initialized successfully');
                
                // Make sure images are visible
                $('.before-container img, .after-container img').css({
                    'display': 'block',
                    'visibility': 'visible',
                    'opacity': '1'
                });
            }
        });
    }
}); 