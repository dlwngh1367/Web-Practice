
    var isValid = true;
    let email = document.forms["myForm"]["email"].value;
    let login = document.forms["myForm"]["login"].value;
    let pass = document.forms["myForm"]["pass"].value;
    let pass2 = document.forms["myForm"]["pass2"].value;
    var termscheckBox = document.getElementById("terms");
    regexp = /\S+@\S+\.\S+/;
    var m;
  
      //Email validation
    if (email == "" || email == null) {
      document.getElementById('message').style.visibility = "visible";
      document.getElementById('message').innerHTML = "Email id should be non-empty";
      isValid = false;
    }
  
    else if(((regexp.test(email))==false))
    {
      document.getElementById('message').style.visibility = "visible";
      document.getElementById('message').innerHTML = "Email id is not valid";
      isValid = false;
    }
  
    else {
      document.getElementById('message').style.visibility = "hidden";
    }
  
  
  
    //login blank validation
    if (login == "" || login == null) {
      document.getElementById('message1').style.visibility = "visible";
      document.getElementById('message1').innerHTML = "login name should be non-empty";
      isValid = false;
    }
  
    //login length validation
    else if ((login.length < 20)) {
      document.getElementById('message1').style.visibility = "visible";
      document.getElementById('message1').innerHTML = "Login name should not be less than 20 characters long";
      isValid = false;
    }
  
    else {
      document.getElementById('message1').style.visibility = "hidden";
      //let login2= login.toLowerCase();
  
    }
  
    //Password validation
    if (pass == "" || pass == null) {
      document.getElementById('message2').style.visibility = "visible";
      document.getElementById('message2').innerHTML = "Password should be non-empty";
      isValid = false;
    }
  
    else if ((pass.length < 6)) {
      document.getElementById('message2').style.visibility = "visible";
      document.getElementById('message2').innerHTML = "Password should be at least 6 characters long";
      isValid = false;
    }
  
    else if(( !(m = pass.match(/[A-Z]/g)) || m.length < 1) || ( !(m = pass.match(/[a-z]/g)) || m.length < 1))
    {
      document.getElementById('message2').style.visibility="visible";
      document.getElementById('message2').innerHTML="Password should have one upper and one lower case letter";
      isValid =  false;
    }
  
    /*else if( !(m = pass.match(/[a-z]/g)) || m.length < 1) 
      {
      document.getElementById('message2').style.visibility="visible";
      document.getElementById('message2').innerHTML="Password should have one upper and one lower case letter";
      isValid =  false;
    }*/
  
    else {
      document.getElementById('message2').style.visibility = "hidden";
    }
  
  
    /*Password upper case and lower case validation
      if( !(m = pass.match(/[A-Z]/g)) || m.length < 1) 
      {
        document.getElementById('message2').style.visibility="visible";
        document.getElementById('message2').innerHTML="Password should have one upper and one lower case letter";
        isValid =  false;
      }
      
      
      else if( !(m = pass.match(/[a-z]/g)) || m.length < 1) 
      {
      document.getElementById('message2').style.visibility="visible";
      document.getElementById('message2').innerHTML="Password should have one upper and one lower case letter";
      isValid =  false;
    }
  
    else {
      document.getElementById('message2').style.visibility = "hidden";
    }
  */
  
  
  
  
  
    //Confirm password validation
    if (pass2 == "" || pass2 == null) {
      document.getElementById('message3').style.visibility = "visible";
      document.getElementById('message3').innerHTML = "Password should be non-empty";
      isValid = false;
    }
  
    else if (pass != pass2) {
      document.getElementById('message3').style.visibility = "visible";
      document.getElementById('message3').innerHTML = "Password not matching";
      isValid = false;
    }
  
  
    else {
      document.getElementById('message3').style.visibility = "hidden";
    }
  
   //Checkbox terms validation
  
    if (termscheckBox.checked == false) {
      document.getElementById('message5').style.visibility = "visible";
      document.getElementById('message5').innerHTML = "Please accept Terms and conditions";
      isValid = false;
    }
  
    else {
      document.getElementById('message5').style.visibility = "hidden";
    }
    return isValid;
  
  
  }
  
  function newsletterval()
  {
  
    var isValid = true;
    let newslettercheckbox = document.getElementById("newsletter");
   //Checkbox newsletter validation
    if (newslettercheckbox.checked == true) {
  
      document.getElementById("newsletter").addEventListener("click", alert("Be alert from Spams!"));
         isValid = false;
    }
    
          else{
            document.getElementById('message4').style.visibility="hidden";
            }
          }