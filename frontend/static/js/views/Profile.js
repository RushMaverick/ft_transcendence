import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Profile");
	}

	fetchName(userData){
		const base = document.createElement('section');
		const name = this.userData.name;
		base.textContent = name;
		
		return base;
	}

	fetchPicture(userData){
		const img = document.createElement('img');
		img.src = this.userData.pictureUrl;
		img.width = 300;
		img.width = 200;
		return img;
	}

	async getHtml(userData){
		const header = this.createHeader('header', 'testheader', 'h2');
		const userNameBase = this.createParagraph('usernamebase');
		const userName= this.fetchName(userData);
		const profilePicutre = this.fetchPicture(userData);
        const message = this.createParagraph('message');
        const settings = this.createLink('link2', 'Change settings from here', '/settings');
        const stats = this.createLink('link1', 'Change settings from here', '/stats');

		window.localStorage.setItem('page', 'Profile');
		this.updateView(header, userNameBase, userName, profilePicutre, message, settings, stats);
		return ;
	}
}