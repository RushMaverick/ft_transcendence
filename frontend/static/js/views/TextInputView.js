const textInputField = (textContent, labelFor, type) => {

	const inputGroup = document.createElement('div');
	inputGroup.classList.add('input-group');

	const inputGroupLabel = document.createElement('label');
	inputGroupLabel.textContent = textContent;
	inputGroupLabel.setAttribute('for', labelFor);

	const inputGroupInput = document.createElement('input');
	inputGroupInput.setAttribute('type', type);
	inputGroupInput.setAttribute('id', labelFor);

	inputGroup.appendChild(inputGroupLabel);
	inputGroup.appendChild(inputGroupInput);

	return inputGroup;
};

export default textInputField;