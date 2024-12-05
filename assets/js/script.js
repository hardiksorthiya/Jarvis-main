const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});

// ====================================

$( '.sidebar-nav a' ).on( 'click', function () {
	$( '.sidebar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

$(function(){
  $("#sidebar").load("inc/sidebar.html"); 
});