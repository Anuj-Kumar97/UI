function calc_dob() { 
    var age=document.getElementById("yr").value;
    var day = new Date();
    var year=day.getFullYear();
    var dob=year-age;
    document.write("Date of birth :"+dob);
}

function get_name(){
	var name=document.getElementById("name").value;
	document.write("Hello "+name+", how are you?");
}

function submitDivision() {
	var x = document.getElementById("num1").value;
	var y = document.getElementById("num2").value;
	if (validateDiv(num2))
		document.write("Result is: " + (x / y));
	else
		document.write("Invalid Input!");
}

function validateDiv() {
	var n = document.forms["divForm"]["num2"].value;
	if (n == 0) {
		alert("Number 2 Must be Greater than 0");
		return false;
	}
	else
		return true;
}

function submitTable(){
	var x=confirm("Do you to generate the table")
	if(x==true){
		var d=document.getElementById("table").value;
		var i=0;
		var tables=new Array();
		for(i=1;i<=10;i++)
		{
			tables[i]=d*i;
			document.writeln(tables[i]);
		}
	}
}

function alpha_check(){
	var ch = document.getElementById("alph").value;
	if(ch=='a'||ch=='A'||ch=='e'||ch=='E'||ch=='i'||ch=='I'||ch=='o'||ch=='O'||ch=='u'||ch=='U')
		document.write("Alphabet " + ch + " is a Vowel");
	else
		document.write("Alphabet " + ch + " is not a Vowel");
}

function prime_check(){
	var x=document.getElementById("n1").value;
	var y=document.getElementById("n2").value;
	var i = 0;
	var j = 0;
	var k = 0;
	var flag = 0;
	var primes = new Array();
	for (i = x; i <= y; i++) {
		if (i <= 1) {
			continue;
		}
		flag = 1;
		for (j = 2; j <= (i / 2); ++j) {
			if (i % j == 0) {
				flag = 0;
				break;
			}
		}
		if (flag == 1) {
			primes[k] = i;
			k++;
		}
	}
	for (i = 0; i < k; i++) {
		document.writeln(primes[i]);
	}
}

function fact_check(){
	var i=document.getElementById("num").value;
	var fact=1;
	var j=0;
	for(j=1;j<=i;j++){
		fact=fact*j;
	}
	document.write("Factorial:"+fact);
}

function take_input(){
	var user_id=document.getElementsById("user").value;
	var paswd=document.getElementsById("pwd").value;
}