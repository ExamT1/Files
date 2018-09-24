var submit = document.getElementById("submit");

var users = [
   { username: "andreas", password: "lundqvist"}, 
   { username: "vladthias", password: "pepke"},
   { username: "frederik", password: "densyge"}
]

submit.onclick = function() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

for(var i = 0; i < users.length; i++) {

    if (username == users[i].username && password == users[i].password) {
        window.location = "welcome.html";
        return true;
        }
    }
    alert("Wrong username or password")
}