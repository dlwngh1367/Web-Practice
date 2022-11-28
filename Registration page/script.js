var signButton = document.getElementById("signUp");
    signButton.addEventListener("click", function () {
    document.querySelector('input[id="login"]').value = document.querySelector('input[id="login"]').value.toLowerCase();
});

var news = document.getElementById("newsletter");
news.addEventListener("click", function () { alert("SPAM alert !! "); });

function validate() {
    var emailVal = document.getElementById("email").value;
    var reg = /^[a-z]{3}@[a-z]{3}.[a-z]{3}/;   
    var passValidate = document.forms[0].pass.value;
    var passRegulation = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){6,}/;

    if (emailVal.search(reg) === -1) {
        if (document.getElementsByClassName('Class1').length > 0) {
            document.getElementsByClassName('Class1').style.remove();
        }

        document.querySelector("#email").style = "border: 3px solid red";
        var div = document.createElement("div");
        div.innerText = 'Email Value should be non-empty and the format should be xyx@xyz.xyz.';
        div.setAttribute('style', "color:red");
        div.className = "Class1";
        document.querySelector('.textfield:first-child').appendChild(div);
    }

    if (passValidate.search(passRegulation) === -1) {
        if (document.getElementsByClassName('Class3').length > 0) {
            document.getElementsByClassName('Class3').style.remove();
        }

        document.getElementById("pass").setAttribute('style', "border: 2px solid red");

        var div = document.createElement("div");
        div.className = "Class3";

        div.innerText = 'Password should be at least 6 characters, 1 uppercase, 1 lowercase.';
        div.setAttribute('style', "color:red");
        document.querySelector('.textfield:nth-child(3)').appendChild(div);
    
    }

    if (document.forms[0].pass.value !== document.forms[0].pass2.value || (document.forms[0].pass.value === "" && document.forms[0].pass2.value === "")) {
        if (document.getElementsByClassName('Class4').length > 0) {
            document.getElementsByClassName('Class4').style.remove();
        }
        document.getElementById("pass2").setAttribute('style', "border: 2px solid red");

        var div = document.createElement("div");
        div.className = "Class4";

        div.innerText = 'Please retype password.';
        div.setAttribute('style', "color:red");
        document.querySelector('.textfield:nth-child(4)').appendChild(div);

    }


    if (document.getElementById("login").value === "" || document.forms[0].login.value.length > 20) {
        if (document.getElementsByClassName('Class2').length > 0) {
            document.getElementsByClassName('Class2').style.remove();
        }

        document.getElementById("login").setAttribute('style', "border: 3px solid red");

        var div = document.createElement("div");
        div.innerText = 'User name should be non-empty, and less than 20 characters long.';
        div.setAttribute('style', "color:red");
        div.className = "Class2";
        document.querySelector('.textfield:nth-child(2)').appendChild(div);
    }

    if (!document.getElementById("terms").checked) {
        if (document.getElementsByClassName('Class6').length > 0) {
            document.getElementsByClassName('Class6').style.remove();
        }

        var newSpan = document.createElement("span");
        newSpan.className = "Class5";

        newSpan.textContent = 'Check off the box';
        newSpan.setAttribute('style', "color:red;");

        document.getElementById("labelTerms").appendChild(newSpan);

        return false;
    }
} 


