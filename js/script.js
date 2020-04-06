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

design_select.addEventListener("change", (e) => {
    const shirt_options = document.querySelectorAll("#color option");
    const js_puns = document.querySelectorAll("#design option")[1];
    const i_heart = document.querySelectorAll("#design option")[2];
    for(let i = 1; i < shirt_options.length; i++){
        shirt_options[i].style.display = "none";
        if(i<4){
            shirt_options.className = "js_puns";
        } else {
            shirt_options.className = "i_heart_js";
        }
    }
    if(e.target.value === js_puns.value){
        shirt_options[1].style.display = "block";
        shirt_options[2].style.display = "block";
        shirt_options[3].style.display = "block";
    }
    if(e.target.value === i_heart.value){
        shirt_options[4].style.display = "block";
        shirt_options[5].style.display = "block";
        shirt_options[6].style.display = "block";
    }
});

