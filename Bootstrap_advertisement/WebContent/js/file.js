var attempt=3;
function user_check(){  
var name=document.myform.email.value;  
var password=document.myform.pwd.value;  
  
if (name == "anujchamp97@gmail.com" && password == "zxcvb") {
		alert("SuccessFully Logged In");
		document.myform.email.value = "";
		document.myform.pwd.value = "";
		document.writeln("<br><h1>Welcome Anuj</h1>");
		document.writeln("<br><a href='details.html'><h3>Your Profile</h3></a>");
	} else {
		if (attempt == 0) {
			alert("Attempts over");
		} else {
			attempt = attempt - 1;
			alert("Wrong id or password, login unsuccessful, " + attempt + " attempts available");
			if (attempt == 0) {
				document.getElementById("name").disabled = true;
				document.getElementById("password").disabled = true;
				document.getElementById("myform").disabled = true;
				document.writeln("<h1>You are Not Authorized to Access</h1>");
			}
		}
	}
	return false;
}
function registermethod() {
	var first = document.getElementById("fname").value;
	var last = document.getElementById("lname").value;
	var user = document.getElementById("uname").value;
	var pswd = document.getElementById("pwd").value;
	var mail = document.getElementById("email").value;
	var phone= document.getElementById("phone").value;
	if (first != "" && last != "" && user != "" && pswd != "" && mail!="" && phone!="") {
		alert("Registered Successfully!");
	}
}