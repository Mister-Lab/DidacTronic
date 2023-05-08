//-------------------------	
	function hide(id)
	{
		if(document.getElementById(id))
		{    //check the element exists and can be accessed
		var ele = document.getElementById(id);    //get hold of the element
		ele.style.display="none";}
	}
			
//-------------------------	
	function show(element,link) 
	{
		var elements = new Array("electro1","electro2","electro3","electro4","electro5","electro6");

		for (var i=0; i<elements.length; i++)
		{
		document.getElementById(elements[i]).style.display='none';
		document.getElementById(i+1).className='NoActived-Link';
		}

		document.getElementById(element).style.display='block';
		document.getElementById(link).className='Actived-Link'
	}
	
	function nextSlide() 
	{
    var q = function(sel) { return document.querySelector(sel); }   
    q(".slides").appendChild(q(".slides img:first-child"));
	}
	setInterval(nextSlide, 5000)

