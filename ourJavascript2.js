var submit = document.getElementById("submit"); 

submit.onclick = function(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Oliver" && password == "123"){
alert ("Login successfully");
window.location = "success.html"; 
return true;
}
}