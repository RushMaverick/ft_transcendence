import AView from "./AView.js";
import { getTranslation } from "./TranslationUtils.js";
import { loadTranslations } from "../index.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Profile");
	}

	async getHtml(){
		window.localStorage.setItem('page', 'Profile');
		await loadTranslations('Profile');
		
		const header = this.createHeader('header', 'Profile', 'h1');

		const data = await this.fetchJsonData('static/js/views/profile.json');
		console.log('Fetched Profile Data:', data);
		
		const createProfile = this.showProfile(data);
        const settings = this.createLink('link2', 'Change settings from here', '/settings');
        const stats = this.createLink('link1', 'Change settings from here', '/stats');

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

		const gameHistoryText = getTranslation('game-history', { wins, loss });
		console.log(gameHistoryText);
		const gameHistory = document.createElement('p');
        gameHistory.textContent = gameHistoryText;

		let msofd;
		
		if (wins > loss){
			const winmsg = "Amazing! You are doing great";
			msofd = this.createParagraph('winmsg', winmsg);
		}
		else if (wins < loss){
			const lossmsg = "Shall we play more to get some wins?";
			msofd = this.createParagraph('lossmsg', lossmsg);
		}
		else{
			const tiemsg = "We are even steven. Let's play some more!";
			msofd = this.createParagraph('tiemsg', tiemsg);
			msofd.classList.add('msofd');
		}

		msofd.classList.add('msofd');
		profileView.appendChild(profileTitle);
		profileView.appendChild(profileAvatar);
		profileView.appendChild(gameHistory);
		profileView.appendChild(msofd);
		
		return profileView;
	}
}