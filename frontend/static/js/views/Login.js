window.isLoggedIn = false;

import AView from "./AView.js";
import textInputField from "./TextInputView.js";

export default class extends AView {
	constructor(params) {
		super(params); //call the constructor of the parent class
		this.setTitle('Login');
	}

	async getHtml() {
		const title = this.createHeader('log-in', 'Log In', 'h1');
		title.classList.add('text-center');

		const form = this.createForm('loginform');
		const usernameInput = textInputField(
			'username',
			'Username',
			'username',
			'text'
		);
		const passwordInput = textInputField(
			'password',
			'Password',
			'password',
			'password'
		);
		const loginButton = this.createButton('log-in', 'Login');
		form.appendChild(usernameInput);
		form.appendChild(passwordInput);
		form.appendChild(loginButton);

		const registerSuggestion = this.createParagraph(
			'register',
			"Don't have an account?"
		);
		registerSuggestion.classList.add('inline');
		const registerLink = this.createAnchor('register-link', 'Register here');
		registerLink.href = '/register';
		registerLink.setAttribute('data-link', '');
		registerLink.setAttribute('id', 'register-link');
		registerLink.classList.add('inline-link-spaced')

		form.addEventListener('submit', this.handleFormSubmit.bind(this));

		window.localStorage.setItem('page', 'Login');
		this.updateView(title, form, registerSuggestion, registerLink);
		return;
	}

	async handleFormSubmit(event) {
		event.preventDefault();

		const username = event.target.username.value;
		const password = event.target.password.value;
		
		const data = {
			username: username,
			password: password,
		};
		
		
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_ENDPOINT}/token/`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
				);
				if (!response.ok) {
					let errorMessage = "Unknown error occurred. Please try again.";
					
					try {
						const errorData = await response.json();
						errorMessage = errorData.detail || errorData.message || errorMessage;
					} catch {
						errorMessage = "Unable to parse error response.";
					}
					
					alert(`Login failed: ${errorMessage}`);
					return;
				}
				const responseData = await response.json();
				if (responseData.access) {
					sessionStorage.setItem("access", responseData.access);
					sessionStorage.setItem("refresh", responseData.refresh);
					sessionStorage.setItem('isLoggedIn', 'true');
					const user = await AView.fetchWithJson('/user/', 'GET', null);
					if (user && user.id) {
						sessionStorage.setItem('userId', user.id);
					}
					sessionStorage.setItem('username', username);
					window.isLoggedIn = true;
					
					// alert('Login successful!');
				document.dispatchEvent(new CustomEvent('loginSuccess', { detail: { path: '/dashboard' } }));
			} else {
				console.error("Login failed:", responseData.message);
			}
		} catch (error) {
			console.error("There was a problem with the fetch operation:", error);
			alert("There was a problem with the login operation. Please try again.");
		}
	}
}
