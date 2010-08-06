$.validator.addMethod("validHour", function(value, element) {
	if(value.length == 5){
		var splittime = value.split(":");
		var retcode = parseInt(splittime[0], 10) <= 23 && parseInt(splittime[1], 10) <= 59;
		return retcode;
	}
	return true;
}, "Preencha com uma hora válida.");
