$(document).ready(function(){
console.log("ready");

//When user types city name and clicks submit, a photo of the city will appear in the background.
	$("#submit-btn").click(showPhoto);
//If user submits:
//"New York" or "New York City" or "NYC" make the background of the page nyc.jpg
	
//"San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
//"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
//"Austin" or "ATX" make the background of the page austin.jpg
//"Sydney" or "SYD" make the background of the page sydney.jpg

function showPhoto(){
	event.preventDefault();
	//cities variable holds the current item
	var city = $("#city-type").val()
}

var cities = ("NYC", "LA", "SF", "ATX", "SYD");


	// 	$("#submit-btn").click(function(){
	event.preventDefault();
	var city = $("#city-type").val()
	 console.log(city);
	 if (city === "New York" || city === "NYC" || city === "New York City" || city === "new york" || city === "nyc" || city === "new york city"){
	 	console.log("running")
	 //city = city.toLowerCase();
	 	$("body").attr("class", "nyc");
	 	$("body").css("background-image", "url(images/nyc.jpg")
	 	$(this).prev("input").val("")
	 }
	 })
