
// Selects Needed Form Elements in DOM
const form = document.querySelector("form");
const inputContainers = document.querySelectorAll(".input-container")
const inputs = document.querySelectorAll("input");
const errorIcons = document.querySelectorAll(".error-icon");
const errorTexts = document.querySelectorAll(".error-text");

// Runs validateInputs() when form is submitted
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs()
})

/* Checks if the value of an input is empty; 
    if it is, it adds "active" to the class of the input and its sibling elements
*/
function validateInputs() {
 for (let i = 0; i < inputs.length; i++) {
    
    if(!inputs[i].value) {
        inputContainers[i].classList.add("active");
        inputs[i].classList.add("active");
        inputs[i].placeholder = ""
        errorIcons[i].classList.add("active");
        errorTexts[i].classList.add("active");
    }
    else {
        
        // Checks if the email input's value has an email format.
        if( i === 2) {
            // if validateEmail() returns true, it removes "active" from the email input and sibling from their class */
            if(validateEmail(inputs[i].value)) {
                inputContainers[i].classList.remove("active");
                inputs[i].classList.remove("active");
                errorIcons[i].classList.remove("active");
                errorTexts[i].classList.remove("active");        
                
            }
            // if not, it keepss the "active" class
            else {
                inputContainers[i].classList.add("active");
                inputs[i].classList.add("active");
                inputs[i].placeholder = ""
                errorIcons[i].classList.add("active");
                errorTexts[i].classList.add("active");
            }
        }

        // Removes "active" from the class of the rest of the inputs that have value (firstName, lastName, password)
        else {
            inputContainers[i].classList.remove("active");
            inputs[i].classList.remove("active");
            errorIcons[i].classList.remove("active");
            errorTexts[i].classList.remove("active");
        }
    }

 }
}

// Validates if a string has the format of an email
function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}