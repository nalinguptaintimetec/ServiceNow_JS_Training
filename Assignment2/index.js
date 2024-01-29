const Username = document.getElementById("Username");
const Password = document.getElementById("Password");
const Login = document.getElementById("Login");

Login.addEventListener("click", () => {
let user = Username.value;
let pass = localStorage.getItem(user);
if(user === "" || pass === "") {
    console.log("Hello");
    alert("Fill all the entries");
}
else {
    if(pass === null) {
        alert("Not a valid Username");
    }
    else {
        console.log(Password.value);
        if(Password.value == pass) {
            location.href = "gallery.html";
        }
        else alert("Incorrect Password");
    }
}
console.log(user);
console.log(pass);
});