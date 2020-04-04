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




document.getElementById("design").firstElementChild.hidden = true;

const color_select = () => {
    const select_element = document.querySelector("#color");
    const option = document.createElement("option");
    const location = select_element.firstElementChild;
    option.type = "value";
    option.value = " ";
    option.innerHTML = "Please select a T-Shirt theme";
    select_element.insertBefore(option, location);
    option.selected = true;
    
}
color_select();