$(document).ready(function(){
//console.log("ready");

//When user types city name and clicks submit, a photo of the city will appear in the background.
	$("submit-btn").click(changeBackground);

	function changeBackground(){
		event.preventDefault();
		var city = $('#city-type').val(); //grabs user input and stores as a variable
		
		//"New York" or "New York City" or "NYC" make the background of the page nyc.jpg
		if (city === "New York" || city === "New York City" || city === "NYC"){
			$("body").attr("class", "nyc");
		
		//"San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
		} else if (city === "San Francisco" || city === "SF" || city === "Bay Area"){
		$("body").attr("class", "sf");
		
		//"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
		} else if (city === "Los Angeles" || city === "LA" || city === "LAX"){
		$("body").attr("class", "la");

		//"Austin" or "ATX" make the background of the page austin.jpg
		} else if (city === "Austin" || city === "ATX"){
		$("body").attr("class", "atx");

		//"Sydney" or "SYD" make the background of the page sydney.jpg
		} else if (city === "Sydney" || city === "SYD"){
		$("body").attr("class", "syd");
		}
	}
});

