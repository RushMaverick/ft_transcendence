import AView from "./AView.js";
import textInputField from './TextInputView.js';
import { v4 as uuidv4 } from 'uuid';

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Register");
	}

	async getHtml(){
		const title = this.createHeader('Register', 'h2');
		title.classList.add('text-center');

		const form = this.createForm('registerform');
		const usernameInput = textInputField('Username', 'username', 'text');
		const passwordInput = textInputField('Password', 'password', 'password');
		const confirmPasswordInput = textInputField('Confirm password', 'confirm-password', 'password');
		const registerButton = this.createButton('register', 'Register');
		form.appendChild(usernameInput);
		form.appendChild(passwordInput);
		form.appendChild(confirmPasswordInput);
		form.appendChild(registerButton);
		
		const loginSuggestion = this.createParagraph('Already have an account?');
		const loginLink = this.createAnchor('Log in here');
		loginLink.href = '/login';
		loginLink.setAttribute("data-link", "");
		loginLink.setAttribute('id', "log-in-link");
		loginSuggestion.appendChild(loginLink);

		form.addEventListener('submit', this.handleFormSubmit.bind(this));

		this.updateView(title, form, loginSuggestion);
		return;
	}

	async handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const username = event.target.username.value;
        const password = event.target.password.value;
        const confirmPassword = event.target['confirm-password'].value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

		const newID = uuidv4();
        // Create the JSON object to be sent
        const data = {
            id: newID,
            username: username,
            password: password,
            // profile: {
            //     // avatar: ,
            //     online: true
            // }
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
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