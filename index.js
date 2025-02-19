$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle')
    });

    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });

    $('.login-form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });

    $(window).on('load sroll', function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');

        $('.login-form').removeClass('popup');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#${id}"]').addClass('active');
            }
        });
    });
});