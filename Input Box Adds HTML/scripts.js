var addButton = document.getElementById('addButton'),
    addedHTMLContainer = document.getElementById('addedHTMLContainer');

addButton.addEventListener('click', function() {
  var addElement = document.getElementById('addElement'),
	    addText = document.getElementById('addText'),
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
	deleteButton.innerHTML = 'Delete';

	elementToAdd.appendChild(deleteButton);

  deleteButton.addEventListener('click', function() {
    addedHTMLContainer.removeChild(elementToAdd);
	})
});