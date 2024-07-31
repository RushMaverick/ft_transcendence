import AView from "./AView.js";
import textInputField from "./TextInputView.js";
import { v4 as uuidv4 } from "uuid";

export default class extends AView {
	constructor(params) {
		super(params); //call the constructor of the parent class
		this.setTitle("Register");
	}

	async getHtml() {
		const title = this.createHeader("register", "Register", "h1");
		title.classList.add("text-center");

		const form = this.createForm("registerform");
		const usernameInput = textInputField(
			"username",
			"Username",
			"username",
			"text"
		);
		const passwordInput = textInputField(
			"password",
			"Password",
			"password",
			"password"
		);
		const confirmPasswordInput = textInputField(
			"confirm-password",
			"Confirm password",
			"confirm-password",
			"password"
		);

		const passwordRequirements = this.createParagraph('password-requirements', 'Password needs to have at least 8 letters, one character, one number, and one special character.')
		passwordRequirements.classList.add('password-requirements');
		
		const checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');
		checkbox.setAttribute('id', 'checkbox');
		checkbox.classList.add('inline');
		
		const privacy = this.createAnchor(
			'privacy', 
			'I have read and agree to the Pong sites '
		);
		privacy.classList.add('inline');
		const privacyLink = this.createLink(
			'privacy-link', 
			'PRIVACY POLICY', 
			'/privacypolicy'
		);
		privacyLink.classList.add('inline-link');
		privacyLink.setAttribute('privacy-link', '');
		privacyLink.setAttribute('id', 'privacy-link');
		
		const button = this.createParagraph('paragraph');
		const registerButton = this.createButton("register-button", "Register");
		button.appendChild(registerButton);

		form.appendChild(usernameInput);
		form.appendChild(passwordInput);
		form.appendChild(passwordRequirements);
		form.appendChild(confirmPasswordInput);
		form.appendChild(checkbox);
		form.appendChild(privacy);
		form.appendChild(privacyLink);
		form.appendChild(button);
		
		const loginSuggestion = this.createParagraph(
			'login',
			'Already have an account?'
		);
		loginSuggestion.classList.add('inline');
		const loginLink = this.createLink('login-link', 'Log in here', '/login');
		loginLink.setAttribute('data-link', '');
		loginLink.setAttribute('id', 'log-in-link');
		loginLink.classList.add('inline-link-spaced');

		form.addEventListener('submit', this.handleFormSubmit.bind(this));

		window.localStorage.setItem('page', 'Register');
		this.updateView(title, form, loginSuggestion, loginLink);
		return;
	}

	async handleFormSubmit(event) {
		event.preventDefault(); // Prevent the default form submission behavior

		// Create the JSON object to be sent
		const checkbox = document.getElementById('checkbox');
		if (checkbox.checked == false){
			alert('To register, please read and agree to our Privacy Policy');
		}
		else{

		const username = event.target.username.value;
		const password = event.target.password.value;
		const confirmPassword = event.target["confirm-password"].value;

		if (!username || !password || !confirmPassword) {
			alert("Please fill in all required fields.");
			return;
		}

		if (password !== confirmPassword) {
			alert("Passwords do not match!");
			return;
		}

		if (/\s/.test(username)) {
			alert("Username should not contain spaces.");
			return;
		}

		if (/\s/.test(password)) {
			alert("Password should not contain spaces.");
			return;
		}

		const specialCharacterRegex = /[^a-zA-Z0-9]/;
		if (!specialCharacterRegex.test(password)) {
			alert("Password must contain at least one special character.");
			return;
		}

		const data = {
			username: username,
			password: password,
			confirm_password: confirmPassword,
		};

		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_ENDPOINT}/user/`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			if (!response.ok) {
				const errorData = await response.json();
				let errorMessage;
				if (errorData.username && errorData.username.length > 0) {
					errorMessage = errorData.username[0];
				} else if (errorData.password && errorData.password.length > 0) {
					errorMessage = errorData.password[0];
				} else
					errorMessage = 'Unknown error';
            	alert(`Registeration failed: ${errorMessage}`);
           		return;
			}

			const responseData = await response.json();
			console.log(responseData);
			document.dispatchEvent(new CustomEvent('registrationSuccess'));
		} catch (error) {
			console.error("There was a problem with the fetch operation:", error);
		}
	}
}
}
