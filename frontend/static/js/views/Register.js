import AView from "./AView.js";
import textInputField from './TextInputView.js';

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Register");
	}

	async getHtml(){

	const container = document.querySelector('main');

	container.innerHTML = '';

	const title = document.createElement('h2');
	title.textContent = 'Login';
	title.classList.add('text-center');

	container.appendChild(title);

	const form = document.createElement('form');
	form.classList.add('registerform');

	const usernameInput = textInputField('Username', 'username', 'text');
	const passwordInput = textInputField('Password', 'password', 'password');

	const loginButton = document.createElement('button');
	loginButton.classList.add('register', 'button');
	loginButton.textContent = 'Register';

	form.appendChild(usernameInput);
	form.appendChild(passwordInput);
	form.appendChild(loginButton);
	
	
	const loginSuggestion = document.createElement('p');
	loginSuggestion.textContent = 'Already have an account?';
	const loginLink = document.createElement('a');
	loginLink.textContent = 'Log in here';
	loginLink.href = '/login';
	loginLink.setAttribute("data-link", "");
	loginLink.setAttribute('id', "log-in-link");
	loginSuggestion.appendChild(loginLink);


	this.updateView(form, loginSuggestion);
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