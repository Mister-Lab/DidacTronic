var prevScrollpos = window.pageYOffset;


// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos)
  
  
		{
         document.getElementById("navbar2").style.top = "0";
         document.getElementById("navbar1").style.top = "-50px";
		 
        }
        
	else
    
    
		{
          document.getElementById("navbar2").style.top = "-50px";
          document.getElementById("navbar1").style.top = "0px";
        }
        
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});


/* ______________________top Scrollbar____________________________ */


//Get the button
var mybutton = document.getElementById("myTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* __________________________________________________ */


















