var addButton = document.getElementById('addButton'),
    addedHTMLContainer = document.getElementById('addedHTMLContainer');

addButton.addEventListener('click', function() {
  var addElement = document.getElementById('addElement'),
	    addText = document.getElementById('addText'),
			elementToAdd,
			text;

  elementToAdd = addElement.value;

  elementToAdd = document.createElement(elementToAdd);

	addedHTMLContainer.appendChild(elementToAdd);

  text = addText.value;

	text = document.createTextNode(text);

	elementToAdd.appendChild(text);
});