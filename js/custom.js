// When the user scrolls the page, execute stickyDesc 
window.onscroll = function() {stickyDesc()};

// Get the description
var description = document.getElementById("description");

// Get the offset position of the description
var sticky = description.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyDesc() {
  if (window.pageYOffset > sticky) {
    description.classList.add("fixed-top")
  } else {
    description.classList.remove("fixed-top");
  }
}

$(document).ready(function(){
	$('#content-link').click(function(event){
	console.log(1)

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    event.preventDefault();
	});

	$('#history-link, #history-close').on("click", function (event){

	    event.preventDefault();
		$('#history').toggleClass('active');
	})

	$('#personality-link, #personality-close').on("click", function (event){

	    event.preventDefault();
		$('#personality').toggleClass('active');
	})
});

