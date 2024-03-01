$('document').ready(function() {

    $('span.pbio').hide();
    $('td.title').bind('mouseover', function() {
        $('span.pbio').fadeIn();
    });
    
    //typed.js
$('tr#p2').mouseenter(function() {
    var typed2 = new Typed('#typed2', {
        strings: ["Design and development of a website for a local real estate photography company."],
        typeSpeed: 10,
        showCursor: false,
      });
}).mouseleave(function() {
    $('#typed2').typed('reset');
    $('#typed2').hide();
})
 //   
$('tr#p3').mouseenter(function() {
    var typed3 = new Typed('#typed3', {
        strings: ["Design and Development of this portfolio website."],
        typeSpeed: 10,
        showCursor: false,
      });
}).mouseleave(function() {
    $('#typed3').typed('reset');
    $('#typed3').hide();
})
//
$('tr#p4').mouseenter(function() {
    var typed4 = new Typed('#typed4', {
        strings: ["Check out my videography, photography, and graphic design samples."],
        typeSpeed: 10,
        showCursor: false,
      });
}).mouseleave(function() {
    $('#typed4').typed('reset');
    $('#typed4').hide();
})
//
$('tr#p5').mouseenter(function() {
    var typed5 = new Typed('#typed5', {
        strings: ["A school project of making an interactive WWU Campus trivia map."],
        typeSpeed: 10,
        showCursor: false,
      });
}).mouseleave(function() {
    $('#typed5').typed('reset');
    $('#typed5').hide();
})
//
$('tr#p6').mouseenter(function() {
    var typed5 = new Typed('#typed6', {
        strings: ["A personal blog where I share my projects, interests, hobbies, and other fun stuff."],
        typeSpeed: 10,
        showCursor: false,
      });
}).mouseleave(function() {
    $('#typed6').typed('reset');
    $('#typed6').hide();
})

    
var typed = new Typed('#typed', {
    strings: ['Portfolio: Sophia Zhuk'],
    typeSpeed: 60,
    showCursor: true,
    });

var typed6 = new Typed('#typed6', {
    strings: ['...'],
    typeSpeed: 30,
    backSpeed: 0,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true
});


})

//
$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
 });
 $('.clickable-row').each(function() {
    var $th = $(this);
    $th.on('click', function() {
      window.open($th.attr('data-href'), $th.attr('data-target'));
    });
  });