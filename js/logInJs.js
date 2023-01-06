localStorage.setItem("username",["Ali","sam","sara","joan"]);
localStorage.setItem("password",["000","111","222","333"]);

let userName1= localStorage.getItem("username");
let password1= localStorage.getItem("password");


/* function checkLogInCustomer(){
    let usernameLog = document.forms["myLog"]["username"].value;
    let passwordLog = document.forms["myLog"]["password"].value;
    if(userName1.includes(usernameLog) && password1.includes(passwordLog) && usernameLog!="" && passwordLog!=""){
        window.location.href = "Instructor.html";
    }
    else{
        alert("Invalid Data");
    }
} */
/* function checkLogInInstructor(){
    let usernameLog = document.forms["myLog"]["username"].value;
    let passwordLog = document.forms["myLog"]["password"].value;
    if(userName1.includes(usernameLog) && password1.includes(passwordLog) && usernameLog!="" && passwordLog!=""){
        window.location.href = "Admin.html";
    }
    else{
        alert("Invalid Data");
    }
} */

function InstructLogIn(){
    window.location.href = "Instructor.html";
}
function CustomerLogIn(){
    window.location.href = "#";
}
