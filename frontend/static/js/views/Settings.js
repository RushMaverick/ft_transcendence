import AView from "./AView.js";
import textInputField from "./TextInputView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle('Settings');
	}

	setLanguage(button){
		console.log(button.getAttribute('language'));
		console.log('languages event listener ok');
		if (button.matches('lang-toggle')) {
			console.log('we should change the lang');
			const language = button.getAttribute('language');
			window.localStorage.setItem('language', language);
			document.dispatchEvent(new CustomEvent('viewUpdated'));
		}
	}

	async getHtml(){

		const title = this.createHeader('header', 'tervetuloo', 'h2');
		title.classList.add('text-center');

		const form = this.createForm('settings');
		const firstnameInput = textInputField('firstname', 'Firstname', 'firstname', 'text');
		const lastnameInput = textInputField('lastname', 'Lastname', 'lastname', 'password');
		const usernameInput = textInputField('username', 'Username', 'username', 'text');
		const passwordInput = textInputField('password', 'Password', 'password', 'password');
		const confirmPasswordInput = textInputField('password-again', 'Confirm password', 'confirm-password', 'password');
		const signupButton = this.createButton('save', 'save');
		form.appendChild(firstnameInput);
		form.appendChild(lastnameInput);
		form.appendChild(usernameInput);
		form.appendChild(passwordInput);
		form.appendChild(confirmPasswordInput);
		form.appendChild(signupButton);
		
		const buttonEn = this.createLanguageButton('english', 'lang-toggle', 'English');
		const buttonFi = this.createLanguageButton('finnish', 'lang-toggle', 'Finnish');
		const buttonSp = this.createLanguageButton('spanish', 'lang-toggle', 'Spanish');
		
		buttonEn.addEventListener("click", this.setLanguage(buttonEn));
		buttonFi.addEventListener("click", this.setLanguage(buttonFi));
		buttonSp.addEventListener("click", this.setLanguage(buttonSp));
		
		window.localStorage.setItem('page', 'Settings');
		this.updateView(title, form, buttonEn, buttonFi, buttonSp);
		return ;
	}
}