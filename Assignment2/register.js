const Username = document.getElementById("Username");
const Password = document.getElementById("Password");
const Register = document.getElementById("Register");

Register.addEventListener("click", () => {
    let user = Username.value;
    let pass = Password.value;
    if(user === "" || pass === "") {
        console.log("Hello");
        alert("Fill all the entries");
    }
    else {
        localStorage.setItem(user, pass);
        location.href = "index.html";
    }
});