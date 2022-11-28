
function validate() {
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const newsletter = document.getElementById('newsletter')

	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === ''|| usernameValue.length > 20 ) {
		setErrorFor(username, 'Username should be non-empty and less than 20');
	} else {
		setSuccessFor(username);
		return true;
	}
	
    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === ''){
		setErrorFor(password, 'Password cannot be blank');
	} 
    else if (passwordValue.length < 6) {
		setErrorFor(password, 'password should be at least 6 characters long');
    }  else if(( !(v = passwordValue.match(/[A-Z]/g)) || v.length < 1) || ( !(v = passwordValue.match(/[a-z]/g)) || v.length < 1))
        { setErrorFor(password, 'password should have 1 uppercase, 1 lowercase');
    }else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
	return false;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^[a-z]{3}@[a-z]{3}.[a-z]{3}/.test(email);
}

newsletter.addEventListener("click",newsletterval);




function newsletterval(){
    alert("Spam alert!!!!");
}

var signButton = document.getElementById("signUp");
    signButton.addEventListener("click", function () {
    document.querySelector('input[id="login"]').value = document.querySelector('input[id="login"]').value.toLowerCase();
});

