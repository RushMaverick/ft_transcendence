import AView from "./AView.js";
import textInputField from "./TextInputView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle('Settings');
		this.avatarUrl = '';
	}

	async getHtml(){

		const title = this.createHeader('header', 'Update user information', 'h2');
		title.classList.add('text-center');

		// Change username form
		const formUsername = this.createForm('change-username');
		const changeUsernameP1 = this.createParagraph('change-user', 'Change username');
		const usernameInput = textInputField('username', 'Username', 'username', 'text');
		const passwordInput = textInputField('password', 'Password', 'password', 'password');
		const saveButton = this.createButton('savebutton', 'save', 'save');
		formUsername.appendChild(changeUsernameP1);
		formUsername.appendChild(usernameInput);
		formUsername.appendChild(passwordInput);
		formUsername.appendChild(saveButton);
		formUsername.addEventListener('submit', this.handleUsernameChange.bind(this));

		// Change password form
		const formPassword = this.createForm('change-password');
		const changePasswordP1 = this.createParagraph('change-pw', 'Change password');
		const oldPwInput = textInputField('currentpassword', 'Current Password', 'currentpassword', 'password');
		const newPwInput = textInputField('newpassword', 'New Password', 'newpassword', 'password');
		const confirmNewPwInput = textInputField('password-again', 'Confirm password', 'confirmpassword', 'password');
		const savePwButton = this.createButton('savebutton', 'save', 'save');
		formPassword.appendChild(changePasswordP1);
		formPassword.appendChild(oldPwInput);
		formPassword.appendChild(newPwInput);
		formPassword.appendChild(confirmNewPwInput);
		formPassword.appendChild(savePwButton);
		formPassword.addEventListener('submit', this.handlePasswordChange.bind(this));

		const select = document.createElement('select');
		select.setAttribute('id', 'languageSelect');
		select.classList.add('translations');
		const option = document.createElement('option');
		option.selected = 'Language';
		option.setAttribute('lang-key', 'language');
		select.appendChild(option);
		['English', 'Finnish', 'Swedish'].forEach((lang) => {
			const option = document.createElement('option');
            option.text = lang;
			option.setAttribute('lang-key', lang);
            select.appendChild(option);
		});
		if(select){
			select.addEventListener('change', (event) => {
				const selectedLanguage = event.target.value;
				const language = selectedLanguage.toLowerCase();
				window.localStorage.setItem('language', language);
				document.dispatchEvent(new CustomEvent('viewUpdated'));
			})
		}

		const buttonDel = this.createButton('deletebutton', 'delete', 'delete account');
		buttonDel.addEventListener('click', async (event) => {
			event.preventDefault();
			if (window.confirm('Are you sure you want to delete the Pong account?') == true){
				const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/user/${sessionStorage.getItem('userId')}/`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + sessionStorage.getItem('access')
					}
				});
				if (response.ok) {
					sessionStorage.setItem('isLoggedIn', 'false');
					sessionStorage.removeItem('access');
					sessionStorage.removeItem('refresh');
					sessionStorage.removeItem('userId');
					location.reload();
				} else {
					alert('Failed to delete account');
				}
			}
		});

		const avatarContainer = this.fileInputField('update-avatar', 'avatar');

		window.localStorage.setItem('page', 'Settings');
		this.updateView(title, avatarContainer, formUsername, formPassword, select, buttonDel);
		await this.fetchAvatar();
		return ;
	}

    async fetchAvatar() {
		try{
			const data = await AView.fetchWithJson('/profile/avatar/');
			if (data && data.image) {
				this.avatarUrl = data.image;
				console.log(this.avatarUrl);
				this.updateAvatarDisplay();
			} else {
				console.error('Profile data or avatar URL is missing');
			}
		} catch(error){
			console.error('Error in fetching avatar');
		}
    }

	updateAvatarDisplay() {
        const avatar = document.querySelector('.avatar');
		if (avatar) {
			avatar.style.backgroundImage = `url(${this.avatarUrl})`;
		} else {
			console.error('Avatar element not found');
		}
    }

	fileInputField(labelText, name) {
		const container = document.createElement('div');
		container.classList.add('avatar-container');

		const avatarDisplay = document.createElement('div');
		avatarDisplay.classList.add('avatar');

		const label = document.createElement('label');
		label.classList.add('avatar-label');
		container.appendChild(label);

		const input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.setAttribute('id', name);
		input.setAttribute('name', name);
		input.classList.add('avatar-input');
		input.style.display = 'none';
		input.addEventListener('change', this.handleAvatarUpload.bind(this));

		const uploadButton = this.createButton('uploadbutton', 'Upload', 'Upload Avatar');
		uploadButton.addEventListener('click', () => input.click());
		// uploadButton.classList.add('upload-button');

		container.appendChild(avatarDisplay);
		container.appendChild(uploadButton);
		container.appendChild(input);

		return container;
	}

    async handleAvatarUpload(event) {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/profile/avatar/`, {
                method: 'POST',
				headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('access') },
                body: formData
            });

			if (!response.ok) {
				let errorMessage = "Unknown error occurred. Please try again.";

				try {
					const errorData = await response.json();
					errorMessage = errorData.detail || errorData.message || errorMessage;
				} catch {
					errorMessage = "Unable to parse error response.";
				}

				alert(`Uploading avatar failed: ${errorMessage}`);
				return;
			}

            const responseData = await response.json();
			console.log(responseData);
            this.avatarUrl = responseData.image; // Extract the updated avatar URL from the profile object
            this.updateAvatarDisplay();
        } catch (error) {
            console.error('There was a problem with the file upload operation:', error);
        }
    }

	async handleUsernameChange(event) {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        // Create the JSON object to be sent
        const data = {
            'username': username,
            'password': password,
			'confirm_password': password
        };

		const result = await AView.fetchWithJson(`/user/${sessionStorage.getItem('userId')}/`, 'PUT', data);
		console.log(result);
		if (result && result.id) {
			sessionStorage.setItem('isLoggedIn', 'false');
			sessionStorage.removeItem('access');
			sessionStorage.removeItem('refresh');
			sessionStorage.removeItem('userId');
			location.reload();
		}
    }

	async handlePasswordChange(event) {
		event.preventDefault();

		const currentPassword = event.target.currentpassword.value;
		const newPassword = event.target.newpassword.value;
		const confirmPassword = event.target.confirmpassword.value;

		if (newPassword !== confirmPassword) {
			alert('Passwords do not match!');
			return;
		}

		// Create the JSON object to be sent
		const data = {
			'password': currentPassword,
			'new_password': newPassword,
			'confirm_new_password': confirmPassword
		};

		const result = await AView.fetchWithJson(`/user/${sessionStorage.getItem('userId')}/`, 'PATCH', data);
		console.log(result);
		if (result && result.success) {
			sessionStorage.setItem('isLoggedIn', 'false');
			sessionStorage.removeItem('access');
			sessionStorage.removeItem('refresh');
			sessionStorage.removeItem('userId');
			location.reload();
		}
	}
}


