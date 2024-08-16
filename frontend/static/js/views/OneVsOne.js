import AView from "./AView.js";

import { loadTranslations } from "../index.js";
import { navigateTo } from "../index.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("One-vs-one");
	}

	searchTranslations(key){
		const language = window.localStorage.getItem('language') || 'english';
		const translations = window.translations || {};
		const currentTranslations = translations[language] || {};
		let search = currentTranslations[key];

		return search;
	}

	async handleInvite(playerId) {
		console.log('Invite player:', playerId);

	}

	createPlayerItem(player) {
		console.log('Friend:', player);
		const playerDiv = document.createElement('div');
		playerDiv.classList.add('list-group-item', 'friend');

		const avatar = document.createElement('img');
		avatar.src = player.avatar ? 'http://localhost:8000'+ player.avatar.image : null; // change url to env variable
		avatar.alt = `${player.username}'s avatar`;
		playerDiv.appendChild(avatar);

		// const usernameLink = document.createElement('a');
		// usernameLink.textContent = player.username;
		// usernameLink.href = `#friends/${player.username}`;
		// usernameLink.addEventListener('click', (event) => {
		// 	event.preventDefault();
		// 	this.navigateToFriendsProfile(player.username);
		// });
		// playerDiv.appendChild(usernameLink);

		const status = document.createElement('div');
		status.classList.add('status');
		if (player.online && typeof player.online.is_online !== 'undefined') {
			status.style.backgroundColor = player.online.is_online ? 'green' : 'gray';
		} else {
			// Fallback color if online status is unknown
			status.style.backgroundColor = 'gray'; // Or any other default color you prefer
		}
		playerDiv.appendChild(status);

		const actions = document.createElement('div');
		actions.setAttribute('lang-key', '');
		actions.classList.add('actions');
		const inviteButton = this.createButton('invite-button', 'btn', this.searchTranslations('invite-button'));
		inviteButton.addEventListener('click', () => this.handleInvite(player.id));
		actions.appendChild(inviteButton);

		playerDiv.appendChild(actions);

		return playerDiv;
	}

	async handleFind(event) {
		event.preventDefault();
		const playerName = event.target.name.value;
		console.log(`Player Name: ${playerName}`);
		const result = await AView.fetchWithJson(`/user/search/?username=${playerName}`, 'GET')
		console.log(result);
		const playerDiv = this.createPlayerItem(result);
		this.updateView(playerDiv);
	}

	async handleCreateGame() {
		console.log('Create Game');
		navigateTo('/create-game');
	}

	async handleInvites() {
		console.log('Invites');
		navigateTo('/game-invites');
	}

	async getHtml(){
		window.localStorage.setItem('page', 'OneVsOne');
		await loadTranslations('OneVsOne');

		const createGameButton = this.createButton('create', 'btn', this.searchTranslations('createGame'));
		createGameButton.addEventListener('click', () => {
			this.handleCreateGame();
		});

		const invitesButton = this.createButton('invites', 'btn', this.searchTranslations('invites'));
		invitesButton.addEventListener('click', () => {
			this.handleInvites();
		});

		this.updateView(createGameButton, invitesButton);
		return ;
	}
}
