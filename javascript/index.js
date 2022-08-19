
// Selects Form Elements in DOM
const form = document.querySelector("form");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
// console.log(form)
// console.log(firstName)
// console.log(lastName)
// console.log(email)
// console.log(password)

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let emailValue = email.value;
    let passwordValue = password.value;

    // if(!firstNameValue) {

    // }

})

function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}