import AView from "./AView.js";
import { getTranslation } from "./TranslationUtils.js";
import { loadTranslations } from "../index.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Profile");
		this.user_id = null;
		if (params && params.user_id){
			this.user_id = params.user_id;
		}
	}

	async getHtml(){
		window.localStorage.setItem('page', 'Profile');
		await loadTranslations('Profile');

		const header = this.createHeader('header', 'Profile', 'h1');

		if (!this.user_id){
			this.user_id = sessionStorage.getItem('userId');
		}
		const user = await AView.fetchWithJson(`/user/${this.user_id}/`, 'GET');
		const stats = await AView.fetchWithJson(`/matches/stats/${this.user_id}`, 'GET');

		if (user == null || stats == null) {
			alert("An error occurred while fetching user data");
			return;
		}
		let data = {
			"username": user.username,
			"avatar": `${import.meta.env.VITE_BASE_URL}` + user.avatar.image,
			"wins": stats.Stats.wins,
			"loses": stats.Stats.loses
		}

		const createProfile = this.showProfile(data);
		const matchHistoryLink = this.createLink('link3', 'View Match History', `/history/${this.user_id}`);

		this.updateView(header, createProfile, matchHistoryLink);
		return ;
	}

	showProfile(my) {

		const profileView = document.createElement('div');
		profileView.classList.add('profile');

		const profileTitle = this.createHeader('myProfile',`${my.username}`, 'h3');

		const profileAvatar = document.createElement('img');
		profileAvatar.src = my.avatar;
		profileAvatar.alt = `${my.username}'s avatar`;

		const wins = my.wins;
		const loss = my.loses;

		const gameHistoryText = getTranslation('game-history', { wins, loss });
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
