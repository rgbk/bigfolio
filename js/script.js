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
        headlines: {
          compressor: 0.7,
          minFontSize:'72px',
          maxFontSize:'280px'
        }
        
      }
    };


BP.init = function(){
  W.log('Start');

  // initial layout
  $W.on('resize',$.proxy(BP.layout,BP));
  

  // responsive headline sizing
  $(".title").fitText(BP.settings.headlines.compressor, BP.settings.headlines);

  // Bind Key control using keymaster.js
  W.key('down',BP.show_next);
  W.key('up',BP.show_prev);


  // scroll effect
  $('ul').addClass('cards');
  


  // layout
  BP.layout();

};

BP.layout = function(){

  var window_height = $W.height();
  $('.project, .table, .waypoint_node,ul').height(window_height);
  
  $('ul').height(window.innerHeight+'px');
  W.stroll.bind( 'ul' );
};

BP.show_next = function(){
  W.log('next…');
};

BP.show_prev = function(){
  W.log('prev…');
};

$(BP.init);

}(window,document,jQuery));