function capsalpha(e) {
	// body...
	//var x=document.getElementById("capsalpha").value;
	if (!(e.which>=65 && e.which<=91)){
		e.preventDefault();
	}
}

function alponly(e) {
	// body...
	if (!((e.which>=65 && e.which<=90) || (e.which>=97 && e.which<=122))){
		e.preventDefault();
	}
}

function hiddisplay() {
	// body...
	var x=	document.getElementById("task3");
	if (x.style.display==="none"){
		x.style.display="block";
	}
	else{
		x.style.display="none";
		document.getElementById("taskp").innerHTML="ClickME";
	}
}

function concatfn(argument) {
	// body...
	var x=document.getElementById('txtnm1').value;
	var y=document.getElementById('txtnm2').value;
	window.alert(x+y);
}

function convert(argument) {
	// body...
	var x = document.getElementById('txtdoll').value;
	alert("Amount in Rupees:"+x*70);
}

function Coordin(e) {
	// body...
	var x = e.clientX;
	var y = e.clientY;
	var coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coords;
}

function popalert() {
	// body...
	window.alert("Hello Sir, How may I be of service?");
}

function lodwind(argument) {
	// body...
	window.open("https://www.google.com");
}