function Pass_match()
{
	var pass1=document.getElementById("us_pass").value;
	var pass2=document.getElementById("re_pass").value;
	if(pass1==pass2)
	{
		alert("Password Matched");
	}
	else
	{
		alert("Password Mismatched");
	}
}