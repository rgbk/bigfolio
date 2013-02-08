/*
function nextTile(){
    window_height = $(window).height();
	$('html').scrollTo(+=window_height, 800 );
}
*/

function browser_size(){
    window_height = $(window).height();
    $('.project, .table, .waypoint_node').each(function() {
    	$(this).height(window_height);
    });
}
$(document).ready(function() {
	browser_size();
	jQuery(".title").fitText(0.7, { minFontSize: '72px', maxFontSize: '280px' })

	var list = document.querySelector( 'ul' );
	var type = window.location.search.slice( 1 ) || 'cards';
	list.className = type;
	window.addEventListener( 'resize', updateHeight, false );
	updateHeight();
	function updateHeight() {
		list.style.height = window.innerHeight + 'px';
		stroll.bind( 'ul' );
	}
/*
     $("#testtitle").hover(function(){

         
    $("#test").show(); //Show tooltip
    }, function() {
        $("#test").hide(); //Hide tooltip
    })

$('#testtitle').mousemove(function(e){
    $("#test").css({left:e.pageX-120, top:e.pageY-80});
});
*/
	
});
$(document).keydown(function(e){
    if (e.keyCode == 37) { 
       alert( "left pressed" );
       return false;
    }
    if (e.keyCode == 38) { 
       previousTile();
       return false;
    }
    if (e.keyCode == 39) { 
       alert( "right pressed" );
       return false;
    }
    if (e.keyCode == 40) { 
       nextTile();
       return false;
    }
});
$(window).resize(function() {
	browser_size();
})
