import AView from "./AView.js";
import textInputField from './TextInputView.js';
import { v4 as uuidv4 } from 'uuid';

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Register");
	}

	// fileInputField(labelText, name) {
	// 	const container = document.createElement('div');
	// 	container.classList.add('form-group');
		
	// 	const label = document.createElement('label');
	// 	label.setAttribute('for', name);
	// 	label.textContent = labelText;
		
	// 	const input = document.createElement('input');
	// 	input.setAttribute('type', 'file');
	// 	input.setAttribute('id', name);
	// 	input.setAttribute('name', name);
	// 	input.classList.add('form-control');
		
	// 	container.appendChild(label);
	// 	container.appendChild(input);
		
	// 	return container;
	// }

	async getHtml(){

		const title = this.createHeader('register', 'Register', 'h1');
		title.classList.add('text-center');

		const form = this.createForm('registerform');
		const usernameInput = textInputField('username', 'Username', 'username', 'text');
		const passwordInput = textInputField('password', 'Password', 'password', 'password');
		const confirmPasswordInput = textInputField('confirm-password','Confirm password', 'confirm-password', 'password');
		const registerButton = this.createButton('register-button', 'Register');

		const checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');
		const privacy = this.createAnchor('privacy', 'I have read and agree to the Pong sites ');
		const privacyLink = this.createLink('privacy-link', 'PRIVACY POLICY', '/privacypolicy');
		privacy.appendChild(privacyLink);

		form.appendChild(usernameInput);
		form.appendChild(passwordInput);
		form.appendChild(confirmPasswordInput);
		form.appendChild(checkbox);
		form.appendChild(privacy);
		form.appendChild(registerButton);
		

		const loginSuggestion = this.createParagraph('login', 'Already have an account?');
		const loginLink = this.createAnchor('login-link', 'Log in here');
		loginLink.href = '/login';
		loginLink.setAttribute('data-link', "");
		loginLink.setAttribute('id', "log-in-link");

		form.addEventListener('submit', this.handleFormSubmit.bind(this));
		
		window.localStorage.setItem('page', 'Register');
		this.updateView(title, form, loginSuggestion, loginLink);
		return ;
	}

	async handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

		// Create the JSON object to be sent
		// const popup = document.createElement();

		const policy = "PRIVACY POLICY\n \
		We are committed to protecting and respecting your privacy. \
		By registering our website, you consent to the collection and use of your data such as username \
		and information about the played games ans described in this privacy policy.\n \
		We use your username to participate in games and personalize your gaming experience.\n \
		We use your information about played games to track your progress and create statistics.\n \
		We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, \
		as described in this Privacy Policy. Once your data is no longer needed, we will securely delete or anonymize it.\n \
		Under the General Data Protection Regulation (GDPR), you have the following rights:\n\
		You can request a copy of the personal data we hold about you. \n \
		You can request that we correct any inaccurate or incomplete data. \n \
		You can request that we delete your personal data under certain conditions. \n \
		You can request that we restrict the processing of your data under certain conditions. \n \
		You can request that we transfer your data to another organization, or directly to you, under certain conditions. \n \
		You can object to our processing of your personal data under certain conditions. \n \
		If you make a request, we have one month to respond to you. \n \
		If you would like to exercise any of these rights, please contact us at our email: [Your Contact Email].";

		if (confirm(policy))
		{
			const txt = "You pressed OK!";
			console.log(txt);
		  } else {
			const txt = "You pressed Cancel!";
			console.log(txt);
		  }
        const username = event.target.username.value;
        const password = event.target.password.value;
        const confirmPassword = event.target['confirm-password'].value;

		if (!username || !password || !confirmPassword) {
			alert("Please fill in all required fields.");
			return;
		}

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

		const data = {
            username: username,
            password: password,
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