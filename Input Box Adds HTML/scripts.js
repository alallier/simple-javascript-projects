var addButton = document.getElementById('addButton'),
    addedHTMLContainer = document.getElementById('addedHTMLContainer');

addButton.addEventListener('click', function() {
  var addElement = document.getElementById('addElement'),
	    addText = document.getElementById('addText'),
	   	editButton = document.getElementById('editButton'),
			elementToAdd,
			text,
			deleteButton;

  elementToAdd = addElement.value;

  elementToAdd = document.createElement(elementToAdd);

	addedHTMLContainer.appendChild(elementToAdd);

  text = addText.value;

	text = document.createTextNode(text);

	elementToAdd.appendChild(text);

	deleteButton = document.createElement('button');
	deleteButton.setAttribute('class', 'deleteButton');
	deleteButton.innerHTML = 'Delete';

	elementToAdd.appendChild(deleteButton);

	deleteButton.addEventListener('click', deleteButton);
});

editButton.addEventListener('click', function() {
	var pickColor = document.getElementById('pickColor'),
			pickFontSize = document.getElementById('pickFontSize');

	elementToAdd.style.color = pickColor.value;

	elementToAdd.style.fontSize = pickFontSize.value;
});

function deleteButton(event) {
  //addedHTMLContainer.removeChild(elementToAdd);
	console.log('Hello world');
}