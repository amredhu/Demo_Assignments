country=['India','USA','UK'];
state=[['Delhi','Kar','HRY','MP'],['Texas','Boston','New York','Las Vegas'],['London','Manchester','Berkshire']];
district=[[['North','South'],['Blore','EC'],['Jind','Rohtak'],['Bhopal','Indore']],[['North','South'],['North','South'],['North','South'],['North','South']]]

function fillcountry() {
	// body...
	var countrydd = document.getElementById('country');
	for (i=0;i<country.length;i++){
		var con = document.createElement('option');
		con.text=country[i];
		countrydd.add(con,i+1);
	}
}

function fillstate() {
	// body...
	var country = document.getElementById('country');
	var selectedidx = country.selectedIndex;
	var statedd = document.getElementById('state');
	statedd.innerText=null;
	var i =0;
	var ele = document.createElement('option');
	ele.text = "--Select--";
	statedd.add(ele,)
	for (i=0;i<state[selectedidx-1].length;i++){
		var ele = document.createElement('option');
		ele.text=state[selectedidx-1][i];
		statedd.add(ele,i+1);
	}
}

function filldistrict() {
	// body...
	var country = document.getElementById('country');
	var selectedidx = country.selectedIndex;
	var state=document.getElementById('state');
	var selidx = state.selectedIndex;
	var districtdd = document.getElementById('district');
	districtdd.innerText=null;

	var i=0;
	var ele = document.createElement('option');
	ele.text="--Select--";
	districtdd.add(ele,i);
	for (i=0;i<district[selectedidx-1][selidx-1].length;i++){
		var ele = document.createElement('option');
		ele.text=district[selectedidx-1][selidx-1][i];
		districtdd.add(ele,i+1);
	}
}