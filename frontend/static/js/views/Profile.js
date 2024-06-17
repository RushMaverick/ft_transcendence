import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Profile");
		
		this.userData = {
			name: 'Test Name',
			email: 'testmail@test.com',
			pictureUrl: 'https://source.unsplash.com/200'
		};
	}

	
	
	fetchName(userData){
		const base = document.createElement('section');
		const name = this.userData.name;
		base.textContent = 'username : ' + name;
		
		return base;
	}
	
	fetchEmail(userData){
		const base = document.createElement('section');
		const email = this.userData.name;
		base.textContent = 'email : ' + email;
		
		return base;
	}
	
	fetchPicture(userData){
		const img = document.createElement('IMG');
		img.src = this.userData.pictureUrl;
		return img;
	}

	async getHtml(userData){
		const header = this.createHeader('Welcome User!', 'h1');
		const userName = this.fetchName(userData);
		const userEmail = this.fetchEmail(userData);
		const profilePicutre = this.fetchPicture(userData);
        const message = this.createParagraph("Here you could see your profile page.");
        const stats = this.createParagraphWithLink("Check out your game stats", "/statistics");
        const settings = this.createParagraphWithLink("Change settings from here", "/settings");
        const friends = this.createParagraphWithLink("Checkout who is online", "/friends");
		
		this.updateView(header, userName, userEmail, profilePicutre, message, stats, settings, friends);
		return ;
	}
}