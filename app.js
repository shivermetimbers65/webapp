let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let inputusername = document.getElementById("inputusername");
let title = document.getElementById("title");

signinbtn.onclick = function(){
    inputusername.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
}

signupbtn.onclick = function(){
    inputusername.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");
}