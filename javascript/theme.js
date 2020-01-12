(function($){
    // loading
    let startTime = new Date().getTime();    
    $(window).on('load',function(){
        let endTime = new Date().getTime();
        let totalTime = endTime - startTime;
        let progressBar = $('#progress-bar');
        progressBar.css('width',  100 + '%').animate(totalTime, function(){
            $('#loading').delay(800).fadeOut('slow');            
        });
        setTimeout(function(){
            $('body').removeClass('overflow-hidden');
        }, totalTime+600);        
    });

    $(function(){
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

        // language mobile
        let languageMobile = $('#language-mobile');
        $('#language-btn').on('click', function(){
            languageMobile.fadeIn('slow');
        });
        $('#language-mobile-close').on('click', function(){
            languageMobile.fadeOut('slow');
        });

        // search
        let searchModel = $('#search')
        $('#search-btn').on('click', function(){
            searchModel.modal();
        })
        $('#submit-btn').on('click', function(){
            searchModel.modal('hide');
        })
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
    })
})($)

