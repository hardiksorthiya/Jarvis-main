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


// =========================================

var input = document.getElementById( 'file-upload' );
var infoArea = document.getElementById( 'file-upload-filename' );

input.addEventListener( 'change', showFileName );

function showFileName( event ) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = 'File name: ' + fileName;
}

var input = document.getElementById( 'uplo-hp-two' );
var infoArea = document.getElementById( 'file-upload-filename-two' );

input.addEventListener( 'change', showFileName );

function showFileName( event2 ) {
  var input = event2.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = 'File name: ' + fileName;
}