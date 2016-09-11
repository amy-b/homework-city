$(document).ready(function(){
//console.log("ready");

//When user chooses a city in the dropdown menu. change the background of the website to match the city
//Step 1: Create a dropdown menu with cities ATX, LA, NUC, SF, and SYD
	$("body").attr("class");
	var cities = ["ATX", "LA", "NYC", "SF", "SYD"]
	cities.forEach(function(element,index){
		$('select').append("<option>"+element+"</option>");
	})
//Step 2: Capture user selection with event $change
	$("form").change(function(){
		console.log($(this));//Shows form in console to ensure correct DOM call

//Step 3: User selection will change photo with corresponding city 
//When user chooses ATX, a photo of ATX will appear 
		if ($("select").val()=="ATX"){
			$("body").attr("class","austin")
			$("form").trigger("reset");
	}
//When user chooses LA, a photo of LA will appear
		else if ($("select").val()=="LA"){
			$("body").attr("class","la")
		}
//When user chooses NYC, a photo of NYC will appear
		else if ($("select").val()=="NYC"){
			$("body").attr("class","nyc")
		}
//When user chooses SF, a photo of SF will appear 
		else if ($("select").val()=="SF"){
			$("body").attr("class","sf")
		}
//When user chooses SYD, a photo of SYD will appear 
		else if ($("select").val()=="SYD"){
			$("body").attr("class","sydney")
		}
	})
});

