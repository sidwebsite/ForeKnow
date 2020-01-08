(function($){
    $(function(){
        // 
        $(window).on('scroll', function(){
            if($(window).scrollTop()) {
                $('#header').addClass('fixed');
                $('.index-content').addClass('scale');
            } else {
                $('#header').removeClass('fixed');
                $('.index-content').removeClass('scale');
            }
        })
        // nav button
        let win = $(window).width();
        if(win > 1200) {
            $('.sub-menu').hover(
                function(){
                    $(this).find('ul').fadeIn();
                },
                function(){
                    $(this).find('ul').fadeOut();
                }
            )
        } else {
            $('.sub-menu').find('.menu-dropdown').on('click', function(){
                $(this).toggleClass('active');
            })
        }
        
        $('#nav-btn').on('click', function(){
            $('#nav').toggleClass('active');
        });
        
                // index banner
        let heroSlider = $('.owl-carousel');
        heroSlider.owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause:true,
            autoplayTimeOut: 8000,
            navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        });
        heroSlider.on("changed.owl.carousel", function(event){
            var item = event.item.index-2;
            $('.item-content').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.item-content').addClass('animated fadeInUp');
        })

        // go to Top
        $('#gotop').click(function(){
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });            
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 200){
                $('#gotop').fadeIn();
            } else {
                $('#gotop').fadeOut();
            }
        });

    })
})($)

