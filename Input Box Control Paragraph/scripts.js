// Create a JavaScript document that takes the input from a text box and fills paragraphs with that text

var inText = document.getElementById('inputBox'),
    pList = document.getElementsByTagName('p');

inText.addEventListener('keyup', function() {
    console.log(pList);
    for (var i = 0; i < pList.length; i++) {
       pList[i].innerHTML = inText.value;
    }
});