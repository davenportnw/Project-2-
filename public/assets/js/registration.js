
// // Grab Elements from FORM
let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('psw');
let repeatpassword = document.getElementById('psw-repeat');


function registration() {
    //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(name=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(name))
		{
			alert('Name field required only alphabet characters');
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(uname=='')
		{
			alert('Please enter the user name.');
		}
		else if(!letters.test(uname))
		{
			alert('User name field required only alphabet characters');
		}
		else if(password=='')
		{
			alert('Please enter Password');
		}
		else if(repeatpassword=='')
		{
			alert('Enter Confirm Password');
		}
		else if(!pwd_expression.test(pwd))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
		else if(password != repeatpassword)
		{
			alert ('Password not Matched');
		}
		else if(document.getElementById("psw").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("psw").value.length > 12)
		{
			alert ('Password max length is 12');``
		}
		else
		{				                            
               alert('Thank You for Login & You are Redirecting to the main Website');
			   // Redirecting to other page or webste code. 
			   window.location = "#"; 
		}
}


registration();

