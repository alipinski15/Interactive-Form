/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
Written by: Aaron Lipinski
******************************************/

//This function places 'Focus' on the 'input' with the ID of "name".

const focus_name = () => {
    document.getElementById("name").focus();
}
focus_name()

/*Targets the 'input' element 'other-title' and hides it. If the 'other' title is selected,
a text field will be displayed to enter a Job Role. */

document.getElementById("other-title").hidden = true;
const job_role = document.getElementById("title");
job_role.addEventListener("change", (e) => {
    let other = document.querySelectorAll("#title option")[5];
    let job_title = document.getElementById("other-title");
    if(event.target.value === other.value){
        job_title.hidden = false;
    } else {
        job_title.hidden = "true";
    }
});
 
//Hides the 'Select Theme' option in the Design Menu.

document.getElementById("design").firstElementChild.hidden = true;

//Adds the 'Please select a T-shirt theme' to the color selection menu.

const color_select = () => {
    const select_element = document.querySelector("#color");
    const option = document.createElement("option");
    const location = select_element.firstElementChild;
    option.innerHTML = "Please select a T-Shirt theme";
    select_element.insertBefore(option, location);
    option.selected = true;
    document.getElementById("color").firstElementChild.hidden = true;
}
color_select();

/*Creates an Event Listener on the Design menu. Selecting the theme 'JS Puns'
option, only shows the JS Puns color options in the Color drop down menu. Selecting 
the 'I heart JS' theme, only shows the I Heart color options*/

const design_select = document.getElementById("design");
const color_menu = document.getElementById("color");

for(let j = 1; j < color_menu.length; j++){
    color_menu[j].style.display = "none";
}

// const colorMenu_hide = () => {
//     const color_menu = document.getElementById("color");
//     const menu_message = document.createElement("p")
//     const location = color_menu.firstElementChild;
//     location.appendChild(menu_message)
//     color_menu.insertBefore(menu_message, location);
//     menu_message.innerHTML = "Please select a shirt design";
// }
// colorMenu_hide();


design_select.addEventListener("change", (e) => {
    const shirt_options = document.querySelectorAll("#color option");
    const js_puns = document.querySelectorAll("#design option")[1];
    const i_heart = document.querySelectorAll("#design option")[2];
    for(let i = 1; i < shirt_options.length; i++){
        shirt_options[i].style.display = "none";
        if(e.target.value === js_puns.value){
            shirt_options[1].selected = true;
            shirt_options[1].style.display = "block";
            shirt_options[2].style.display = "block";
            shirt_options[3].style.display = "block";
        } else if(e.target.value === i_heart.value){
            shirt_options[4].selected = true;
            shirt_options[4].style.display = "block";
            shirt_options[5].style.display = "block";
            shirt_options[6].style.display = "block";
        }
    }
});

//Global variables for at 'Activities section of the form. 

const activities = document.querySelector('.activities');
const total = document.createElement('label');
activities.appendChild(total);
let total_cost = 0;

/*The Event Listener for the 'Activities' section. This listens for the activities chosen,
adds the total of those event and displays them at the bottom of the section. Then compares
the Dates and Times of the events chosen and disables any conflicting events with the same Date and Time.*/

activities.addEventListener('change', (e) => {
    const is_checked = e.target.checked;
    const cost = parseInt(e.target.getAttribute("data-cost"));
    const act_inputs = document.querySelectorAll(".activities input");
    const selected = e.target.getAttribute("data-day-and-time");
    if(is_checked){
        total_cost += cost;
        total.innerHTML = "Total= $ " + total_cost;
    } else {
        total_cost -= cost;
        total.innerHTML = "Total= $ " + total_cost;
    }
    if(total_cost === 0){
        total.style.display = "none";
    } else {
        total.style.display = "block";
    }
    for(let i = 1; i < act_inputs.length; i++){
        const calender = act_inputs[i].getAttribute("data-day-and-time");
        if(calender === selected && e.target !== act_inputs[i]){
            if(is_checked){
                act_inputs[i].disabled = true;
                act_inputs[i].parentElement.style.color = "#252a2b";
            } else {
                act_inputs[i].disabled = false;
                act_inputs[i].parentElement.style.color = "inherit";
            }
        }
    }
});

//Global variable for the 'Payment' section of the form. 
const payment_menu = document.getElementById("payment");
const credit = document.getElementById("credit-card");
const pay_pal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");

/*The Event Listener for the 'Payment Info'. This listens for what payment option ois chosen,
then only shows the appropriate payment info necessary. */

payment_menu.addEventListener('change', (e) => {
    document.getElementById("payment").firstElementChild.hidden = true;
    if(e.target.value === "credit card"){
        credit.style.display = "block";
        pay_pal.style.display = "none";
        bitcoin.style.display = "none";
    } else if(e.target.value === "paypal"){
        credit.style.display = "none";
        pay_pal.style.display = "block";
        bitcoin.style.display = "none";
    } else if(e.target.value === "bitcoin"){
        credit.style.display = "none";
        pay_pal.style.display = "none";
        bitcoin.style.display = "block";
    }
});

//Global variables for Form Validation. 

const name_field = document.getElementById("name");
const email_field = document.getElementById("mail");
const activities_field = document.querySelectorAll(".activities input");
const credit_field = document.getElementById("cc-num");
const zipcode_field =document.getElementById("zip");
const cvv_field = document.getElementById("cvv");


//*********Validation functions***********//

//---------------Name Field-----------------//
/* The next three functions check to see if the values inputted in the fields provided, match the Regex provided.
   If they are not correct a message is displayed. Or the particular Field title is changes to red. 
   Once requirements are correct, the Title turns green. */

function valid_name(name) {
    return /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(name);
}

function name_tip_showORHide(show, element, blank){
    if(show){
        element.nextElementSibling.style.borderColor = "red";
        element.textContent = "Please provide a valid Name (Upper and Lowercase only, hyphens accepted)";
        element.style.color = "red";
    }else {
        element.nextElementSibling.style.borderColor = "rgb(111, 157, 220)";
        element.textContent = "Name:";
        element.style.color = "green";
    }
    if(blank){
        element.style.color = "inherit";
    }
}

function createListenerName(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.previousElementSibling;
      const blank = text == "";
      name_tip_showORHide(showTip, tooltip, blank);
    };
}

//---------------Email Field-----------------//
/* The next three functions check to see if the values inputted in the fields provided, match the Regex provided.
   If they are not correct a message is displayed. Or the particular Field title is changes to red. 
   Once requirements are correct, the Title turns green. */

function valid_email(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

function email_tip_showORHide(show, element, blank){
    if(show){
        element.nextElementSibling.style.borderColor = "red";
        element.textContent = "Please provide a valid email address";
        element.style.color = "red";
    } else {
        element.nextElementSibling.style.borderColor = "rgb(111, 157, 220)";
        element.textContent = "Email:";
        element.style.color = "green";
    }
    if(blank){
        element.style.color = "inherit";
    }
} 

function createListenerEmail(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.previousElementSibling;
      const blank = text == "";
      email_tip_showORHide(showTip, tooltip, blank);
    };
}

//---------------Activities Field-----------------//

//Checks to see if any of the checkboxes have been selected.
function activity_selected(){
    for(let i = 0; i < activities_field.length; i++){
        if(activities_field[i].type === "checkbox"){
            if(activities_field[i].checked){
                return true;
            } 
        }
    }
    return false;
}


//---------------Credit Card Field-----------------//
/* The next three functions check to see if the values inputted in the fields provided, match the Regex provided.
   If they are not correct a message is displayed. Or the particular Field title is changes to red. 
   Once requirements are correct, the Title turns green. */

function valid_credit(cardNum){
    return /^\d{4}-?\d{4}-?\d{4}-?\d{4}|\d{3}-?\d{3}-?\d{3}-?\d{3}$/.test(cardNum);
}

function credit_tip_showORHide(show, element, blank){
    if(show){
        element.nextElementSibling.style.borderColor = "red";
        element.style.fontColor = "red";
        element.style.fontSize = "95%";
        element.style.color = "red";
    } else {
        element.nextElementSibling.style.borderColor = "rgb(111, 157, 220)";
        element.style.borderColor = "black";
        element.style.color = "green";
    }
    if(blank){
        element.style.color = "inherit";
    }
} 

function createListenerCredit(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.previousElementSibling;
      const blank = text == "";
      credit_tip_showORHide(showTip, tooltip, blank);
    };
}

//---------------Zip Code Field-----------------//
/* The next three functions check to see if the values inputted in the fields provided, match the Regex provided.
   If they are not correct a message is displayed. Or the particular Field title is changes to red. 
   Once requirements are correct, the Title turns green. */

function valid_zip(zipcode){
    return /^\d{5}$/.test(zipcode);
}

function zip_tip_showORHide(show, element, blank){
    if(show){
        element.nextElementSibling.style.borderColor = "red";
        element.style.fontColor = "red";
        element.style.fontSize = "95%";
        element.style.color = "red";
    } else {
        element.nextElementSibling.style.borderColor = "rgb(111, 157, 220)";
        element.style.borderColor = "black";
        element.style.color = "green";
    }
    if(blank){
        element.style.color = "inherit";
    }
} 

function createListenerZip(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.previousElementSibling;
      const blank = text == "";
      zip_tip_showORHide(showTip, tooltip, blank);
    };
}

//---------------CVV Field-----------------//
/* The next three functions check to see if the values inputted in the fields provided, match the Regex provided.
   If they are not correct a message is displayed. Or the particular Field title is changes to red. 
   Once requirements are correct, the Title turns green. */

function valid_cvv(cvv){
    return /^\d{3}$/.test(cvv);
}
function cvv_tip_showORHide(show, element, blank){
    if(show){
        element.nextElementSibling.style.borderColor = "red";
        element.style.fontColor = "red";
        element.style.fontSize = "95%";
        element.style.color = "red";
    } else {
        element.nextElementSibling.style.borderColor = "rgb(111, 157, 220)";
        element.style.borderColor = "black";
        element.style.color = "green";
    }
    if(blank){
        element.style.color = "inherit";
    }
}       

function createListenerCvv(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.previousElementSibling;
      const blank = text == "";
      cvv_tip_showORHide(showTip, tooltip, blank);
    };
}

//These are the Event Listeners for each Input field. 

name_field.addEventListener('input', createListenerName(valid_name));
email_field.addEventListener('input', createListenerEmail(valid_email));
credit_field.addEventListener('input', createListenerCredit(valid_credit));
zipcode_field.addEventListener('input', createListenerZip(valid_zip));
cvv_field.addEventListener('input', createListenerCvv(valid_cvv));

//Global variable for register button. 

const register_button = document.querySelector("form");

/*This adds a Listener to the Register button. When the register button is pressed. All fields are checked for valid Info,
if a field is blank or requirements are not met. Alert messages display in the appropriate area.*/

register_button.addEventListener('submit', (e) => {
    if(!valid_name(name_field.value)){
        name_field.style.borderColor = "red";
        name_field.previousElementSibling.textContent = "Please provide a valid name";
        name_field.previousElementSibling.style.color = "red";
        e.preventDefault();
    } 
    if(!valid_email(email_field.value)){
        email_field.style.borderColor = "red";
        email_field.previousElementSibling.textContent = "Please provide a valid email";
        email_field.previousElementSibling.style.color = "red";
        e.preventDefault();
    }
    if(!activity_selected()){
        const message = document.createElement("span");
        const location = activities.firstElementChild;
        message.innerHTML = " (Please choose an Activity)";
        message.style.fontSize = "80%";
        message.style.color = "red";
        location.appendChild(message);
        location.style.color = "red";
    }
    if(!valid_credit(credit_field.value) && payment_menu[1].value === "credit card"){
        credit_field.style.borderColor = "red";
        credit_field.previousElementSibling.style.color = "red";
        e.preventDefault();
    } 
    if(!valid_zip(zipcode_field.value) && payment_menu[1].value === "credit card"){
        zipcode_field.style.borderColor = "red";
        zipcode_field.previousElementSibling.style.color = "red";
        e.preventDefault();
    }
    if(!valid_cvv(cvv_field.value) && payment_menu[1].value === "credit card"){
        cvv_field.style.borderColor = "red";
        cvv_field.previousElementSibling.style.color = "red";
        e.preventDefault();
    }
});