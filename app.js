var i = 1;

$(document).ready(function(){


	$("#generate").on("click", function(){
			var el = "<div>Line #"+i+"<button id='color'>Change Color</button><button id='remove'>Remove</button></div>"
			$("#lines").append(el);
			i++;
	});


		$("#lines").click(function(){
		$("#color").css("background-color", "yellow");
		});
	

		$("#lines").click(function(){
		$("#remove").remove();
		console.log("Hi");
		});
	
	//button pressed, inserts div into dom, each time should enter Line#(i++)
	//add 2 buttons to the new div "change color" "remove"
	//change color should change background of div container of change color container
	//change color back
	//remove button should remove the parent div container of the button that was clicked
});