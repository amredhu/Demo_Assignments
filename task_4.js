function validate_pass() {
	// body...
	var x=document.getElementById('test1').value;
	
var a=document.getElementById('test1');
	var y = document.getElementById('test2').value;
	var b=document.getElementById('test2');
	var patt=/[!@#$%^&*/+=]/g;
	var pat = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/
	if (y==""){
		alert("UserName empty");
		return false;
	}
	else if (x==""){
		alert("pass empty");
		
		return false;
	}
	else if(!((x.match(patt)) && (x.match(pat)))){
		alert("Pls Enter Valid Pass");
		a.value="";
		b.value="";
		return false;
	}

	return true;
}