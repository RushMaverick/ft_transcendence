import AView from "./AView.js";
import textInputField from "./TextInputView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Settings");
	}

	async getHtml(){

		const title = this.createHeader('header', 'tervetuloo', 'h2');
		title.classList.add('text-center');

		const form = this.createForm('settings');
		const usernameInput = textInputField('username', 'Username', 'username', 'text');
		const passwordInput = textInputField('password', 'Password', 'password', 'password');
		const confirmPasswordInput = textInputField('password-again', 'Confirm password', 'confirm-password', 'password');
		const registerButton = this.createButton('save', 'save');
		form.appendChild(usernameInput);
		form.appendChild(passwordInput);
		form.appendChild(confirmPasswordInput);
		form.appendChild(registerButton);
		
		// const loginSuggestion = this.createParagraph('Already have an account?');
		// const loginLink = this.createAnchor('Log in here');
		// loginLink.href = '/login';
		// loginLink.setAttribute("data-link", "");
		// loginLink.setAttribute('id', "log-in-link");
		// loginSuggestion.appendChild(loginLink);

		// form.addEventListener('submit', this.handleFormSubmit.bind(this));
		window.localStorage.setItem('page', 'Settings');
		this.updateView(title, form);
		return ;
	}
}