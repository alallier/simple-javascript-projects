var userInputForm = document.getElementById('userInputForm'),
    editButton = document.getElementById('editButton');

editButton.addEventListener('click', function() {
  var inputParagraph = document.getElementById('inputParagraph'),
	    paragraphText,
			inputbox;

	if (editButton.value === 'Edit') {
		inputParagraph.style.display = 'none';

    paragraphText = inputParagraph.innerHTML;

    inputParagraph = document.createElement('input');
		inputParagraph.setAttribute('type', 'text');
		inputParagraph.setAttribute('id', 'inputbox');

		userInputForm.appendChild(inputParagraph);

		inputParagraph.value = paragraphText;

		editButton.value = 'Save';
	}
	if (editButton.value === 'Save') {
		var inputbox = document.getElementById('inputbox');

    inputParagraph.innerHTML = inputbox.value;

		userInputForm.removeChild(inputbox);

		inputParagraph.style.display = 'initial';

		editButton.value = 'Edit';
	}
});