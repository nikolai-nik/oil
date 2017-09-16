(function( $ ) {
	"use strict";

	$( document ).ready( function () {

		$( '#fixed-menu-right' ).on('click', '.navigation-right', function( event ) {
			var $target = $( event.currentTarget ),
				$parent = $target.parent( '.navigation-right' );


			$parent.toggleClass( 'active' );
		});

	// Here
	
	

	$('div[data-type="background"]').each(function(){
    	var $bgobj = $(this);

 		$( window ).scroll( function() {
        	var yPos = -( $( window ).scrollTop() / $bgobj.data('speed')); 
        	var coords = '50% '+ yPos + 'px';
     
        	$bgobj.css({ backgroundPosition: coords });
    	} ); 
	} );  

	});// end ready

} ( jQuery ) );
