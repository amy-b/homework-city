$(document).ready(function(){
console.log("ready");

//When user types city name and clicks submit, a photo of the city will appear in the background.
	$("submit-btn").submit(changePhoto)
	var city = ("nyc", "la", "sf", "atx", "syd");

//If user submits:
//"New York" or "New York City" or "NYC" make the background of the page nyc.jpg
	if (city === "New York" || city === "New York City" || city === "NYC"){
		console.log("new york")
		$("body").attr("class", "nyc");
		$(this).prev("input").val();
//if not, keep default 
	}
//"San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
	else if (city === "San Francisco" || city === "SF" || city === "Bay Area"){
		console.log("run");
		$("body").attr("class", "sf");
		$(this).prev("input").val();
	}
//"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
	if (city === "Los Angeles" || city === "LA" || city === "LAX"){
		console.log("run");
		$("body").attr("class", "la");
		$(this).prev("input").val();
	}
//"Austin" or "ATX" make the background of the page austin.jpg

//"Sydney" or "SYD" make the background of the page sydney.jpg

	});
function changePhoto(){
	event.preventDefault();
	var city = $("#city-type").val();
	console.log(city)
}




