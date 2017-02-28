// Create a JavaScript document that takes the input from a text box and fills paragraphs with that text
// Variables grab the input box and the paragraphs
var inText = document.getElementById('inputBox'),
    pCheck = document.getElementsByName('check'),
    pList = document.getElementsByTagName('p');

// Event listener uses keyups and a function that sets contents of paragraphs to the value of the input box
inText.addEventListener('keyup', function() {

    // Loops through paragraph tags, uses if to check for whether the checkboxes are checked or not
    // If they are checked, do not print into paragraph, if box is unchecked, print into paragraph
    for (var i=0; i < pCheck.length; i++) {
      if (!pCheck[i].checked) {
         pList[i].innerHTML = inText.value;
      }
    }
});