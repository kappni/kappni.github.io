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
    anchors: ['firstSection', 'secondSection', 'thirdSection' ],
    menu: '#menu',
    licenseKey: '07DE8664-ECAB41E7-B9CBCF6F-62A507F6',
    verticalCentered: false,
    fixedElements: 'header, footer',
    //paddingTop: '120px',
    afterLoad: function(anchorLink, index) {
      //$header_top.css('background', 'rgba(0, 47, 77, .3)');
      //$nav.css('background', 'rgba(0, 47, 77, .25)');
      // if (index == 5) {
      //     $('#fp-nav').hide();
      //   }
    },
  
    onLeave: function(index, nextIndex, direction) {
      // if(index == 5) {
      //   $('#fp-nav').show();
      // }
    }, 
  }); 