import AView from "./AView.js";
import textInputField from './TextInputView.js';

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Login");
	}

	createHeader() {
        const header = document.createElement('h1');
        header.textContent = "Welcome to Pong game";
        return header;
    }

    createParagraph(text) {
        const p = document.createElement('p');
        p.textContent = text;
        return p;
    }

	async getHtml(){
		const container = document.querySelector('main');
		container.innerHTML = '';

		const title = document.createElement('h2');
		title.textContent = 'Login';
		title.classList.add('text-center');

		container.appendChild(title);

		const form = document.createElement('form');
		form.classList.add('loginform');

		const usernameInput = textInputField('Username', 'username', 'text');
		const passwordInput = textInputField('Password', 'password', 'password');

		const loginButton = document.createElement('button');
		loginButton.classList.add('login', 'button');
		loginButton.textContent = 'Login';

		form.appendChild(usernameInput);
		form.appendChild(passwordInput);
		form.appendChild(loginButton);
		
		
		const registerSuggestion = document.createElement('p');
		registerSuggestion.textContent = 'Not registered yet?';
		const registrationLink = document.createElement('a');
		registrationLink.textContent = 'Register here';
		registrationLink.href = '/register';
		registrationLink.setAttribute("data-link", "");
		registrationLink.setAttribute('id', "register-link");
		registerSuggestion.appendChild(registrationLink);


		this.updateView(form, registerSuggestion);
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