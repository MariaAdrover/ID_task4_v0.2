var button;
var input;
var inputValue;
var element;
var color = ["purple", "red", "green", "yellow", "pink", "orange", "brown", "cyan"];

$(document).ready(function() {
    
    // When the page has been loaded we set the value of the variables button, input and element
    button = $("#button_change");
    input = $("#input_color");
    element = $(".cow_color");

    // We add the listener to the button for when it's clicked 
    $(button).click(function() {
        getTextValue();
        changeColor();
        $(element).html(inputValue);
    });       
});

// This function reads the value of the input of the html
function getTextValue() {    
    inputValue = $(input).val();
}

// Here we look for the value of the text, and if it matches with any of the colors 
// stored in the array color[] then it changes the color of the text too.
function changeColor() {
    for (i = 0; i < color.length; i++) {
        if (inputValue.toLowerCase() == color[i]) {
            $(element).css("color", color[i]);
            break;
        } else {
            $(element).css("color", "red");
        }
    }
}
