import AView from "./AView.js";
import textInputField from './TextInputView.js';

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Login");
	}

	async getHtml(){
		const title = this.createHeader2('Log in')
		title.classList.add('text-center');
	
		const form = this.createForm('loginform');
		const usernameInput = textInputField('Username', 'username', 'text');
		const passwordInput = textInputField('Password', 'password', 'password');
		const loginButton = this.createButton('login', 'Login');
		form.appendChild(usernameInput);
		form.appendChild(passwordInput);
		form.appendChild(loginButton);
		
		const registerSuggestion = this.createParagraph('Dont have an account?');
		const registerLink = this.createAnchor('Register here');
		registerLink.href = '/register';
		registerLink.setAttribute("data-link", "");
		registerLink.setAttribute('id', "register-link");
		registerSuggestion.appendChild(registerLink);
	
	
		this.updateView(title, form, registerSuggestion);
		return;
	}
}
		// return `
		// 	<div class="container">
		// 		<h2 class="text-center">Login</h2>
		// 		<br>
		// 		<form action="/login.php" class="loginForm">
		// 			<div class="input-group">
		// 				<label for="username" class="label">Username</label>
		// 				<input type="text" id="username" class="input">
		// 				<span class="error-message"></span>
		// 			</div>
		// 			<br>
		// 			<div class="input-group">
		// 				<label for="password" class="label">Password</label>
		// 				<input type="password" id="password" class="input">
		// 				<span class="error-message"></span>
		// 			</div>
		// 			<button class = "login button" data-action="logged-in">
		// 				Login</button>
		// 			<p>Not registered yet? <a href="/register" id ="registerLink" data-link>Register here</a></p>
		// 		</form>
		// 	</div>
		// 	`;