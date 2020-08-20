var $header_top = $('header');
var $nav = $('nav');


// toggle menu 
$header_top.find('#hamburger-icon').on('click', function() {
    $(this).parent().toggleClass('open-menu');
    $(this).toggleClass('open');
});




new fullpage('#fullpage', {
    //sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
    sectionSelector: 'section',
    navigation: true,
    navigationPosition: 'right',
    controlArrows: false,
    anchors: ['home', 'about', 'skills' ],
    menu: '#menu',
    licenseKey: '07DE8664-ECAB41E7-B9CBCF6F-62A507F6',
    verticalCentered: true,
    fixedElements: 'header, footer',
    paddingTop: '70px',
    paddingBottom: '60px',
    scrollOverflow: true,
    autoScrolling: true,
    //scrollBar: false,
    afterLoad: function(anchorLink, index) {
      $(index.item).find("h2").toggleClass("active");
    },
  
    onLeave: function(index, nextIndex, direction) {
      $(index.item).find("h2").toggleClass("active");
    }, 
  }); 