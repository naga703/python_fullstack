alert("welcome to nriit learning management system")
let heading = document.getElementById
("welcome");
heading.innerHTML ="Welcome Future Software Engineers"
console.log("heading element:",heading)
let msg = document.getElementById("message")
msg.innerHTML = "Javascript is fun"
console.log("Message element:",msg)
function showmessage() {
    alert("welcome to NRIIT learning management system")
}
function changeHeading(){
    document.getElementById("welcome").
    innerHTML="welcome python fullstack developers"
}
let heading1=document.querySelector("#welcome")
console.group("Heading element:",heading1)
let button = document.getElementById("btnGreeting");

button.addEventListener("click",function()
{
    alert("welcome to javascript event handling");
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit",function (event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (!name ||!email ||!password){
        alert("Please fill in all fields.");
        return;
    }
    alert("Registration sucessfull!");
    console.log("Name:",name);
    console.log("Email:",email);
    console.log("Password:",password);
})