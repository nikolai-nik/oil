(function( $ ) {
	"use strict";

	$( document ).ready( function () {

	$( '#fixed-menu-right' ).on('click', '.navigation-right', function( event ) {
		var $target = $( event.currentTarget ),
			$parent = $target.parent( '.navigation-right' );


			$parent.toggleClass( 'active' );
		})
	});

} ( jQuery ) );
