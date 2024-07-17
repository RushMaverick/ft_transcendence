import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Profile");
	}

	async getHtml(){
		const header = this.createHeader('header', 'Profile', 'h2');

		const data = await this.fetchJsonData('static/js/views/profile.json');

		const createProfile = this.showProfile(data);
        const settings = this.createLink('link2', 'Change settings from here', '/settings');
        const stats = this.createLink('link1', 'Change settings from here', '/stats');

		window.localStorage.setItem('page', 'Profile');
		this.updateView(header, createProfile, settings, stats);
		return ;
	}

	showProfile(my) {
		
		const profileView = document.createElement('div');
		profileView.classList.add('profile');
		
		const profileTitle = this.createHeader('myProfile',`${my.username}`, 'h3');
		
		const profileAvatar = document.createElement('img');
		profileAvatar.src = my.profile.avatar;
		profileAvatar.alt = `${my.username}'s avatar`;
		
		const wins = my.wins;
		const loss = my.loses;
		const gameHistoryText = `Win: ${wins}🏆\tLoss: ${loss}💀`;
		const gameHistory = this.createParagraph('game-history', gameHistoryText);

		let msg;

		if (wins > loss)
			msg = "Amazing! You are doing great";
		else if (wins < loss)
			msg = "Shall we play more to get some wins?";
		else
			msg = "We are even steven. Let's play some more!";

		const msofd = this.createParagraph('msofd', msg);
		msofd.classList.add('msofd');
		
		profileView.appendChild(profileTitle);
		profileView.appendChild(profileAvatar);
		profileView.appendChild(gameHistory);
		profileView.appendChild(msofd);
		
		return profileView;
	}
}