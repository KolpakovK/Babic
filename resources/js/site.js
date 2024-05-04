$(document).ready(function() {
    
    $("form").addClass("needs-validation");
    $("form").attr("novalidate",true);
    
    $('.needs-validation').each(function() {
        $(this).on('submit', function(event) {
            if (!this.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            $(this).addClass('was-validated');
        });
    });
    
    $(document).scroll(function () {
        headerScroll();
        updateAnimations();
    });
    
    headerScroll();
    updateAnimations();
    
    $(".carousel-content").each((index,element)=>{
        let maxHeight = 0;
        
        $(this).find(".carousel-item").each((i,el)=>{
            let slideWidth = $(el).width();
            maxHeight = maxHeight < $(el).height() ? $(el).height() : maxHeight;
            $(el).css("left",i*slideWidth)
        });
        
        $(element).height(maxHeight);
        $(element).attr("slide",1);
        $(element).attr("max-slides",$(this).find(".carousel-item").length);
    });
});

function headerScroll(){
    let scroll = $(this).scrollTop();
        let topDist = 10;
        
        if (parseInt(scroll) > topDist) {
            $('.header').addClass("is-scrolled");
        } else {
            $('.header').removeClass("is-scrolled");
        }
}

function updateAnimations(){
    $('.has-anim').each( function(){
        let position = $(this).offset().top;
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        
        
        if (position < scroll + windowHeight - 200) {
            $(this).addClass('anim-triggered');
        }
    });
}

// Carousel
$(".next").click((e)=>{
    let parent = $( e.target ).closest(".carousel-container").find(".carousel-content");
    let current_slide = +parent.attr("slide");
    let max_slides = +parent.attr("max-slides");
    
    if (current_slide<max_slides){
        current_slide++;
    }
    else{
        current_slide=1;
    }
    
    parent.attr("slide",current_slide);
    rebuildSlides(current_slide,parent);
});

$(".prev").click((e)=>{
    let parent = $( e.target ).closest(".carousel-container").find(".carousel-content");
    let current_slide = +parent.attr("slide");
    let max_slides = +parent.attr("max-slides");
    
    if (current_slide>1){
        current_slide--;
    }
    else{
        current_slide=max_slides;
    }
    
    parent.attr("slide",current_slide);
    rebuildSlides(current_slide,parent);
});

function rebuildSlides(slide,slider){
    slide -= 1;
    
    slider.find(".carousel-item").each((i,el)=>{
        let slideWidth = $(el).width();
        let new_i = i - slide ;
        $(el).css("left",new_i*slideWidth)
    });
}

$(".burger").click(function(){
    $(".header-nav").toggleClass("active");
    $(".header").toggleClass("active");
});