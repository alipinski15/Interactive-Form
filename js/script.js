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
const color_menu = document.getElementById("color").children;

for(let j = 1; j < color_menu.length; j++){
    color_menu[j].hidden = true;
}

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
            } else {
                act_inputs[i].disabled = false;
            }
        }
    }
});

//Global variable for the 'Payment' section of the form. 
const payment_menu = document.getElementById("payment");

/*The Event Listener for the 'Payment Info'. This listens for what payment option ois chosen,
then only shows the appropriate payment info necessary. */

payment_menu.addEventListener('change', (e) => {
    const select_pay = document.getElementById("payment").firstElementChild.hidden = true;
    const payment_options = document.querySelectorAll("#payment option");
    const credit = document.getElementById("credit-card");
    const pay_pal = document.getElementById("paypal");
    const bitcoin = document.getElementById("bitcoin");
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
const activities_field = document.getElementsByClassName(".activities");
const credit_field = document.getElementById("cc-num");
const zipcode_field =document.getElementById("zip");
const cvv_field = document.getElementById("cvv");

//Validation functions

function valid_name(name) {
    return /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(name);
}

function valid_email(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

function valid_credit(cardNum){
    return /^\d{4}-?\d{4}-?\d{4}-?\d{4}|\d{3}-?\d{3}-?\d{3}-?\d{3}$/.test(cardNum);
}

function valid_zip(zipcode){
    return /^\d{5}$/.test(zipcode);
}

function valid_cvv(cvv){
    return /^\d{3}$/.test(cvv);
}

