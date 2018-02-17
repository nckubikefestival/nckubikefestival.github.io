$(document).ready(function(){

    // Menu Listeners

    $(".menu.off").find(".menu__wheel--self").click(function(){
        menu ("open");
    })

    $(".menu__burger").click(function(){
        menu ("open");
    })

    $(".menu__close").click(function(){
        menu ("close");
    })

    $(".goto_page").click(function(){  
        var page_no = this.className.replace( "goto_page goto_" ,"" ).replace( "now", "" );        
        $(window).scrollTo( "#page_" + page_no , 300);
        nowPage( page_no );
        if ( $(".menu").hasClass("on") ) {
            menu ("close");
        }
        Waypoint.disableAll()
        setTimeout(function(){ Waypoint.enableAll() }, 300);
    })

    $(".menu__totop").click(function(){
        $(window).scrollTo( "#page_1", 300);        
    })
    

    // Waypoint Listeners

    var waypoint_p1_top = new Waypoint({
        element: document.getElementById('page_1_top'),
        handler: function(direction) { 
            nowPage(1);
        }, 
        offset: 0
    })

    var waypoint_p2_top = new Waypoint({
        element: document.getElementById('page_2_top'),
        handler: function(direction) { nowPage(2); },
        offset: '20%'
    })

    var waypoint_p2_bottom = new Waypoint({
        element: document.getElementById('page_2_bottom'),
        handler: function(direction) { nowPage(2); },
        offset: '20%'  
    })

    var waypoint_p3_top = new Waypoint({
        element: document.getElementById('page_3_top'),
        handler: function(direction) { nowPage(3); },
        offset: '20%'  
    })

    var waypoint_p3_bottom = new Waypoint({
        element: document.getElementById('page_3_bottom'),
        handler: function(direction) { nowPage(3); },
        offset: '20%'  
    })

    var waypoint_p4_top = new Waypoint({
        element: document.getElementById('page_4_top'),
        handler: function(direction) { nowPage(4); },
        offset: '20%'  
    })

    var waypoint_p4_bottom = new Waypoint({
        element: document.getElementById('page_4_bottom'),
        handler: function(direction) { nowPage(4); },
        offset: 'bottom-in-view'        
    })

    var waypoint_p5_top = new Waypoint({
        element: document.getElementById('page_5_top'),
        handler: function(direction) { nowPage(5); },
        offset: '50%'
    })

    
    // Other Listeners

    $("#dept__class--list").find(".swiper-button-next, .swiper-button-prev, .swiper-pagination").click(function(){
        updateSlideNo("dept");
    })

    $("#event__class--list").find(".swiper-button-next, .swiper-button-prev, .swiper-pagination").click(function(){
        updateSlideNo("event");        
    })
    
    $(".register__wheel--self").click(function(){
        window.open( "https://docs.google.com/forms/d/e/1FAIpQLSffgri9t91F6dgQVp0QRv3iii_ouQy8bMSbCLLCGOcGPZ9dDg/viewform" );
    })

    $(".video").click(function(){
        window.open( "https://www.facebook.com/NCKUbikefestival/videos/1451397264988430/" );
    })


    // Event List (Mobile)

    $(".schedule__cont--list").click(function(){
        if ( $( this ).hasClass("on") ) {
            $( this ).removeClass("on").addClass("off");
        }
        else if ( $( this ).hasClass("off") ) {
            $( this ).removeClass("off").addClass("on");
        }
    })




    // Swiper Initialize

    var dept_swiper = new Swiper('#dept__class--list', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        shortSwipes: false,
        longSwipes: false,
        followFinger: false,
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var event_swiper = new Swiper('#event__class--list', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        shortSwipes: false,
        longSwipes: false,
        followFinger: false,
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    // Functions

    function menu ( command ) {
        if ( command == 'open' ) {
            $(".menu").removeClass("off").addClass("on");
            $("body").addClass("no_scroll");
        }
        else if ( command == 'close' ) {
            $(".menu").removeClass("on").addClass("off");
            $("body").removeClass("no_scroll");      
        }
    }

    function nowPage ( num ) {
        $(".goto_"+ num ).siblings().removeClass("now");
        $(".goto_" +num ).addClass("now");
        if ( num == 1 )
            $(".menu__sidebar").fadeOut(500);
        else
            $(".menu__sidebar").fadeIn(500);
        if ( num == 5 )
            $(".intro__scroll").fadeOut(500);            
        else
            $(".intro__scroll").fadeIn(500);
    }
    
    function updateSlideNo ( type ) {
        setTimeout (function() {
            var slide_no = $("."+type+"_.swiper-slide-active").data("swiper-slide-index") + 1 ;
            $("."+type+"__description--cont--text."+type+"_"+slide_no).siblings().removeClass("now");
            $("."+type+"__description--cont--text."+type+"_"+slide_no).addClass("now");
            // $("."+type+"__description--cont."+type+"_"+slide_no).siblings().removeClass("now");
            // $("."+type+"__description--cont."+type+"_"+slide_no).addClass("now");
            $("."+type+"__description--title").text( $("."+type+"_.swiper-slide-active").text() );
            if ( slide_no < 10 ) 
                $("."+type+"__description--no").text( "0"+ slide_no );
            else
                $("."+type+"__description--no").text( slide_no );
        }, 10);
    }

});