function theDate(){

	var todayDate = new Date();

	var month = todayDate.getMonth();

	var year = todayDate.getFullYear();

	var day = todayDate.getDate();

	document.getElementById("theDate").innerHTML=month + "/" + day + "/" + year;
	//document.getElementById("para").innerHTML=month + day + year;

}
