var inputParagraph = document.getElementById('inputParagraph'),
    editButton = document.getElementById('editButton');

editButton.addEventListener('click', function() {
  if (editButton.value === "Edit") {

	  inputParagraph.contentEditable = true;

	  editButton.value = "Save";
	}
	else if (editButton.value === "Save") {

	  inputParagraph.value = inputParagraph.innerHTML;

    inputParagraph.contentEditable = false;

	  editButton.value = "Edit";
	}
});