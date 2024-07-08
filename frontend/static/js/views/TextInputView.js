const textInputField = (langkey, textContent, name, type) => {

	const inputGroup = document.createElement('div');
	inputGroup.classList.add('input-group');

	const inputGroupLabel = document.createElement('label');
	inputGroupLabel.textContent = textContent;
	inputGroupLabel.setAttribute('for', name);
	inputGroupLabel.setAttribute('lang-key', langkey);

	const inputGroupInput = document.createElement('input');
	inputGroupInput.setAttribute('type', type);
	inputGroupInput.setAttribute('id', name);
	inputGroupInput.setAttribute('name', name);
	inputGroupInput.setAttribute('lang-key', langkey);
	inputGroupInput.classList.add('form-control');

	inputGroup.appendChild(inputGroupLabel);
	inputGroup.appendChild(inputGroupInput);

	return inputGroup;
};

export default textInputField;