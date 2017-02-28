// Create a JavaScript document that takes the input from a text box and fills paragraphs with that text
// Variables grab the input box and the paragraphs
var inText = document.getElementById('inputBox'),
    pList = document.getElementsByTagName('p');

// Event listener uses keyups and a function that sets contents of paragraphs to the value of the input box
inText.addEventListener('keyup', function() {
    for (var i = 0; i < pList.length; i++) {
       pList[i].innerHTML = inText.value;
    }
});