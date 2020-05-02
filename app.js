function showLogIn() {
    document.getElementById("log-in-container").style.display = "block";
    document.getElementById("sign-up-container").style.display = "none";
}

function showSignUp(){
    document.getElementById("log-in-container").style.display = "none";
    document.getElementById("sign-up-container").style.display = "block";
}

var inputs = document.getElementsByClassName("inputs");
var inputs2 = document.getElementsByClassName("inputs2");

function checkInputs(){
    for (i = 0; i < inputs.length; i++) {    
        if (inputs[i].value === ""){
            inputs[i].style.boxShadow = "0px 0px 1.5px 1.5px rgba(255,0,0,1)";
        } else if (inputs[i].value !== ""){
            inputs[i].style.boxShadow = "none";
        }
    }
}

function checkInputs2(){
    for (i = 0; i < inputs2.length; i++) {    
        if (inputs2[i].value === ""){
            inputs2[i].style.boxShadow = "0px 0px 1.5px 1.5px rgba(255,0,0,1)";
        } else if (inputs2[i].value !== ""){
            inputs2[i].style.boxShadow = "none";
        }
    }
}

function showHidePass() {
    var pass = document.getElementById("pass-input");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }

function showHidePass2() {
    var pass2 = document.getElementById("pass-input2");
    if (pass2.type === "password") {
      pass2.type = "text";
    } else {
      pass2.type = "password";
    }
  }