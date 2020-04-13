# Interactive Form
 
This project was all about creating functionality to a register form. Each section of the form had specific requirements to fulfil. 

Name field needed to be in focus when form was loaded. It needed to check if a valid name including first and last name. I added a conditional message if the requirements were not met.

The email field fallows the same requirements and behaviors as the Name field.

The Job Role menu check to see if the 'Other' option is selected, if it is a new input field is created and appended to the DOM. If it is un-selected, the field disappears.

The T-shirt info field allows you to select a t-shirt size, design and color option. The color menu is hidden until you choose a design option. Once a design option is chosen, then the appropriate color option for that design is given. 

The Activities section allows you to check which events you would like to attend. Once an event is chosen, the cost of that event is added to the bottom with a Total Cost element. If you choose an event that direct conflicts based on Date and Time, the conflicting event is disabled and greyed out. 

The Last section is the Payment Info. By default the Credit Card option is selected only showing the card info fields. If you choose Paypal, then a message appears with appropriate info. Same with the Bitcoin option. As with the name and email fields, if invalid info is entered you get a message displayed requesting the required info for that field.

If all required info for the from is present and correct. You can submit via the Register button at the bottom. If any field is blank or incorrect, clicking the register button will display a message on the areas that are required or need the correct information. 