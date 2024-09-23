var code = ''; // initialize to null value
var getCode = ' ';
var btnvalue;
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

// Function to generate combination of characters
function generateCode() {
    // Generate character multiple times using a loop
    for (i = 1; i <= 8; i++) {
        var char = Math.random() * str.length;
        code += str.charAt(char); // accumulate the generated character into a string of 8 characters
    }
    return code; // return the final accumulated string when the loop ends
}

// Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

// Disable Button
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue; // enable/disable button
    if (btnvalue == true) { // test if button is disabled or enabled
        // set button and label color translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        // set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

// run function if detected user had entered a character in textbox
function evaluateCode() {
    getCode = document.getElementById("codeentered").value; // get character entered
    var charset1 = getCode.trim(); // remove any hidden characters entered
    var charset2 = code.trim(); // remove any hidden characters generated
    
    // test if code entered matches the number of generated characters
    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false); // if match, run the function to enable the button
    }
}
