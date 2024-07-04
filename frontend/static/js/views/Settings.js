import AView from "./AView.js";
import textInputField from "./TextInputView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle('Settings');
	}

	setLanguage(button){
		if (button.matches('lang-toggke')) {
			const language = button.getAttribute('language');
			window.localStorage.setItem('language', language);
			document.dispatchEvent(new CustomEvent('viewUpdated'));
		}
	}

	async getHtml(){

		const title = this.createHeader('header', 'tervetuloo', 'h2');
		title.classList.add('text-center');

		const form = this.createForm('settings');
		const firstnameInput = textInputField('firstname', 'Firstname', 'username', 'text');
		const lastnameInput = textInputField('lastname', 'Lastname', 'password', 'password');
		const usernameInput = textInputField('username', 'Username', 'username', 'text');
		const passwordInput = textInputField('password', 'Password', 'password', 'password');
		const confirmPasswordInput = textInputField('password-again', 'Confirm password', 'confirm-password', 'password');
		form.appendChild(firstnameInput);
		form.appendChild(lastnameInput);
		form.appendChild(usernameInput);
		form.appendChild(passwordInput);
		form.appendChild(confirmPasswordInput);
		form.appendChild(signupButton);
		
		window.localStorage.setItem('page', 'Settings');
		this.updateView(title, form);
		return ;
	}
}