import AView from "./AView.js";
import textInputField from './TextInputView.js';

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Register");
	}

	async getHtml(){
		const title = this.createHeader2('Register')
		title.classList.add('text-center');

		const form = this.createForm('registerform');
		const usernameInput = textInputField('Username', 'username', 'text');
		const passwordInput = textInputField('Password', 'password', 'password');
		const confirmPasswordInput = textInputField('Confirm password', 'confirm-password', 'password');
		const loginButton = this.createButton('register', 'Register');
		form.appendChild(usernameInput);
		form.appendChild(passwordInput);
		form.appendChild(confirmPasswordInput);
		form.appendChild(loginButton);
		
		const loginSuggestion = this.createParagraph('Already have an account?');
		const loginLink = this.createAnchor('Log in here');
		loginLink.href = '/login';
		loginLink.setAttribute("data-link", "");
		loginLink.setAttribute('id', "log-in-link");
		loginSuggestion.appendChild(loginLink);

		this.updateView(title, form, loginSuggestion);
		return;
	}
}
	// return `
	// 	<h1>Register</h1>
	// 		<p>Already have an account? <a href="/login" data-link>Login here</a></p>
	// 		<br>
	// 		<form action="/register.php" class="registerForm">
	// 			<div class="input-group">
	// 				<p>Please type your username and password</p>
	// 				<label for="username" class="label">Username</label>
	// 				<input type="text" id="username" class="input"><br>
	// 				<label for="password" class="label">Password</label>
	// 				<input type="text" id="password" class="input">
	// 			</div>
	// 		<button class = "login button" data-action="registered">
	// 			Register</button>
	// 	`;