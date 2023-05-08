/* _   Nav     _______________________________________________ */
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


















