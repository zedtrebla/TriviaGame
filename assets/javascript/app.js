
//countdown
var countDown = 45; 
var x = setInterval(function() {

    var distance = countDown - 1;
    
    var seconds = Math.floor((distance % (1000 * 45)) / 1000);
    
    document.getElementById("demo").innerHTML = seconds;
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

//answers 
var Wrong = 10;
var Correct = 0; 
var answer ["Sting", "The impression that I get", "Star Wars Episode 4: A New Hope", "True", "Who's The Boss", "88 MPH", "False", "White", "Blue", "Jake/Elwood"];


$(document).ready(function(){ 

	var a = $("#example div").length;

	if (a = answer) {
		$(correct++);
	} 
	else {
		$(wrong -1);
	}

});

//win or lose


}