import AView from "./AView.js";
import textInputField from "./TextInputView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle('Settings');
	}

	async getHtml(){

		const title = this.createHeader('header', 'tervetuloo', 'h2');
		title.classList.add('text-center');

		const form = this.createForm('settings');
		const usernameInput = textInputField('username', 'Username', 'username', 'text');
		const passwordInput = textInputField('password', 'Password', 'password', 'password');
		const confirmPasswordInput = textInputField('password-again', 'Confirm password', 'confirm-password', 'password');
		const signupButton = this.createButton('savebutton', 'save', 'save');
		
		form.appendChild(usernameInput);
		form.appendChild(passwordInput);
		form.appendChild(confirmPasswordInput);
		form.appendChild(signupButton);
		form.addEventListener('submit', this.handleSettingsFormSubmit.bind(this));
	
		const select = document.createElement('select');
		select.setAttribute('id', 'languageSelect');
		select.classList.add('translations');
		['english', 'finnish', 'spanish'].forEach((lang) => {
			const option = document.createElement('option');
            option.text = lang;
			option.setAttribute('lang-key', lang);
            select.appendChild(option);
		});
		if(select){
			  select.addEventListener('change', (event) => {
				const selectedLanguage = event.target.value;
				window.localStorage.setItem('language', selectedLanguage);
				document.dispatchEvent(new CustomEvent('viewUpdated'));
			})
		}
		
		const buttonDel = this.createButton('deletebutton', 'delete', 'delete account');
		buttonDel.addEventListener('click', (event) => {
			event.preventDefault();
			if (window.confirm('Are you sure you want to delete the Pong account?') == true){
				const data = {
					delete: true,
				};
				// here we would send the delete request to the backend
				console.log(data);
				console.log('deleting account'); //for monitoring
			}
		});

		window.localStorage.setItem('page', 'Settings');
		this.updateView(title, form, select, buttonDel);
		return ;
	}

	//add delete account with a confirmation pop up
	async handleSettingsFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const username = event.target.username.value;
        const password = event.target.password.value;
        const confirmPassword = event.target['confirm-password'].value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Create the JSON object to be sent
        const data = {
            username: username,
            password: password
        };

		console.log(data);

	// do I need to create the settings endpoint? maybe we can connect this later
    //     try {
    //         const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/settings`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         });

    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         const responseData = await response.json();
    //         console.log(responseData);
    //     } catch (error) {
    //         console.error('There was a problem with the fetch operation:', error);
    //     }
    }
}
