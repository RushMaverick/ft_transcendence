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
		form.appendChild(usernameInput);
		form.appendChild(passwordInput);
		form.appendChild(confirmPasswordInput);
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
		if (confirm("PRIVACY POLICY\n\n We are committed to protecting and respecting your privacy. By registering our website, you consent to the collection and use of your data such as username and information about the played games ans described in this privacy policy.\n We use your username to participate in games and personalize your gaming experience.\n We use your information about played games to track your progress and create statistics.\n ")) 
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