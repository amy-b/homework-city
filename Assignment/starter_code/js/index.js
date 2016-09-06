$(document).ready(function(){
console.log("loaded");
	$("#submit-btn").click(function(){
	event.preventDefault();
	 var city = $("#city-type").val()
	 console.log(city);
	 if (city === "New York" || city === "NYC" || city === "New York City" || city === "new york" || city === "nyc" || city === "new york city"){
	 	console.log("running")
	 city = city.toLowerCase();
	 	$("body").attr("class", "nyc");
	 	$("body").css("background-image", "url(images/nyc.jpg")
	 	$(this).prev("input").val("")
	 }
	// if (city === "San Francisco" || city === "SF" || city === "Bay Area" || city === "san francisco" || city === "sf" || city === "bay area"){
	// 	console.log("running")
	// 	$("body").attr("class", "sf");
	// 	// $("body").css("background-image", "url(images/sf.jpg)")
	// 	$(this).prev("input").val("")
	// }
	// if (city === "Los Angeles" || city === "LA" || city === "LAX" || city === "los angeles" || city === "la" || city === "lax"){
	// 	console.log("running")
	// 	$("body").attr("class", "la");
	// 	// $("body").css("background-image", "url(images/la.jpg)")
	// 	$(this).prev("input").val("")
	// }
	// if (city === "Austin" || city === "ATX" || city === "austin" || city === "atx"){
	// 	console.log("running")
	// 	$("body").attr("class", "austin");
	// 	// $("body").css("background-image", "url(images/austin.jpg)")
	// 	$(this).prev("input").val("")
	// }
	// if (city === "Sydney" || city === "SYD" || city === "sydney" || city === "syd"){
	// 	console.log("running")
	// 	$("body").attr("class", "sydney");
	// 	// $("body").css("background-image", "url(images/sydney.jpg)")
	// 	$(this).prev("input").val("")
	// }
	//})

var cities = ["NYC", "LA", "SF", "ATX", "SYD"];

cities.forEach(function(item, index){
	var currentItem = item;
	$("select").append("<option>"+currentItem+"</option>");
})
$("form").change(function(){
	console.log( $(this));
 }
if (city = [0]) {
	$("body").attr("class", "nyc");
}

if (city = [1]) {
	$("body").attr("class", "la");
}
if (city = [2]) {
	$("body").attr("class", "sf");
}
if (city = [3]) {
	$("body").attr("class", "austin");
}
if (city = [4]) {
	$("body").attr("class", "sydney");
}

})