/*
  BigPortfolio
  Simple system for type based a one page / one project per screen portfolio

  Dependencies: jQuery, fitText, keymaster.js

  @author Uli Scöberl <uli@aplusplus.org>
  @author Marc Kremers <marckremers.com@gmail.com>
*/

(function(W,document,jQuery,undefined) {

var $W = $(W),
    BP = {
      settings: {
        elMinHeight:'100%',
        headlines: {
          compressor: 0.7,
          minFontSize:'40px',
          maxFontSize:'180px'
        }
        
      }
    };

if(typeof W.FOLIO_SETTINGS === 'object') {
  BP.settings = $.extend(BP.settings,W.FOLIO_SETTINGS);  
}


BP.init = function(){
  W.log('Start');

  // initial layout
  $W.on('resize',$.proxy(BP.layout,BP));
  

  // responsive headline sizing
  $("h1,h2").fitText(BP.settings.headlines.compressor, BP.settings.headlines);

  // Bind Key control using keymaster.js
  W.key('down',BP.show_next);
  W.key('up',BP.show_prev);


  // scroll effect
  BP.articles = $('article');

  BP.articles.waypoint(function(direction){

    BP.active = $(this);
    BP.articles.removeClass('active')
    BP.active.addClass('active');

  },{ offset: '50%' });
  


  // layout
  BP.layout();

};

BP.layout = function(){

  // var window_height = $W.height();
  // $('.project, .table, .waypoint_node,ul').height(window_height);
  
  // keep active project in viewport

};

BP.show_next = function(){
  W.log('next…');
};

BP.show_prev = function(){
  W.log('prev…');
};

$(BP.init);

}(window,document,jQuery));