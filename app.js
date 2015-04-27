var i = 1;

$(document).ready(function(){


	$("#generate").on("click", function(){
			var el = "<div class='line'> #"+i+"<div><button id='color'>Change Color</button></div><div><button id='remove'>Remove</button></div></div>"
			$("#lines").append(el);
			i++;
	});


		$("#lines").on("click", "#color" ,function(){
		$(this).parent().parent().css("background-color", "yellow");
		});
	//it must think that it has already completed this. 

		$("#lines").on("click", "#remove", function(){
		$(this).parent().parent().remove();
		console.log("Hi");
		});
	
	//button pressed, inserts div into dom, each time should enter Line#(i++)
	//add 2 buttons to the new div "change color" "remove"
	//change color should change background of div container of change color container
	//change color back
	//remove button should remove the parent div container of the button that was clicked
});