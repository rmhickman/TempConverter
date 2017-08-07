
var outputTemp = 0;
var button = document.getElementById("converter");
button.addEventListener("click", determineConverter)


function toCelsius (inputAmount) {
	var cTemp = ( inputAmount - 32 ) / 1.8;
	document.getElementById("outputTemp").innerHTML = cTemp;
	

}

function toFahrenheit (inputAmount) {
	var fTemp = ( inputAmount * 1.8) + 32;
	document.getElementById("outputTemp").innerHTML = fTemp;
	
}

function determineConverter () {
	var inputTemp = document.getElementById("inputTemp").value

	if (document.getElementById("c").checked) {
		toCelsius(inputTemp);
	} else if (document.getElementById("f").checked) {
		toFahrenheit(inputTemp);
	} else {
		alert("Celsius of Fahrenheit?");
	}	
}

function colorChange (type, value) {
	if ((type === "c" && value > 32) || (type === "f" && value > 90)) {
	        document.getElementById("inputTemp").style.color = "red";
	} else if ((type === "c" && value < 0) || (type === "f" && value < 32)) {
	        str.fontcolor("blue");
	} else {
	        str.fontcolor("green");
	}

}
