var $header_top = document.getElementsByName("header")[0];
var $nav = document.getElementsByName("nav")[0];


// toggle menu 
document.getElementById('hamburger-icon').addEventListener('click', function() {
    this.parentElement.classList.toggle('open-menu');
    this.classList.toggle('open');
});




new fullpage('#fullpage', {
    //sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
    sectionSelector: 'section',
    navigation: true,
    navigationPosition: 'right',
    controlArrows: false,
    anchors: ['home', 'about', 'skills', 'contact' ],
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
      for (let item of index.item.getElementsByTagName("h2")) {
        item.classList.toggle('active');
      }
    },
  
    onLeave: function(index, nextIndex, direction) {
      for (let item of index.item.getElementsByTagName("h2")) {
        item.classList.toggle('active');
      }
    }, 
  }); 