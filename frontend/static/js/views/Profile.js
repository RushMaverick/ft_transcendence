import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Profile");
		
		this.userData = {
			name: 'Test Name',
			email: 'testmail@test.com',
			pictureUrl: 'https://snworksceo.imgix.net/drt/7a10426e-6523-4304-8532-2d230f9bab9b.sized-1000x1000.jpg?w=1000&dpr=2'
		};
	}

	fetchName(userData){
		const base = document.createElement('section');
		const name = this.userData.name;
		base.textContent = name;
		
		return base;
	}
	
	fetchEmail(userData){
		const base = document.createElement('section');
		const email = this.userData.email;
		base.textContent = email;
		
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
		const header = this.createHeader('testheader', 'h2');
		const userNameBase = this.createParagraph('usernamebase');
		const userName= this.fetchName(userData);
		const userEmailBase = this.createParagraph('emailbase');
		const userEmail = this.fetchEmail(userData);
		const profilePicutre = this.fetchPicture(userData);
        const message = this.createParagraph("Here you could see your profile page.");
        const stats = this.createLink('link1', "Check out your game stats", "/statistics");
        const settings = this.createLink('link2', "Change settings from here", "/settings");
        const friends = this.createLink('link3', "Checkout who is online", "/friends");

		window.localStorage.setItem('page', 'Profile');
		this.updateView(header, userNameBase, userName, userEmailBase, userEmail, profilePicutre, message, stats, settings, friends);
		return ;
	}
}