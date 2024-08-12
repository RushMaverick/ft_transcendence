import AView from "./AView.js";
import textInputField from "./TextInputView.js";
import PongGame from "./gameCanvas/pongThree.js";
import { loadTranslations } from "../index.js";
import { navigateTo } from "../index.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Create game");
	}

	searchTranslations(key){
		const language = window.localStorage.getItem('language') || 'english';
		const translations = window.translations || {};
		const currentTranslations = translations[language] || {};
		let search = currentTranslations[key];

		return search;
	}



	createPlayerItem(player) {
		console.log('Player:', player);
		const playerDiv = document.createElement('div');
		playerDiv.classList.add('list-group-item', 'friend');

		const avatar = document.createElement('img');
		avatar.src = player.avatar ? 'http://localhost:8000'+ player.avatar.image : null; // change url to env variable
		avatar.alt = `${player.username}'s avatar`;
		playerDiv.appendChild(avatar);

		const usernameLink = document.createElement('a');
		usernameLink.textContent = player.username;
		// usernameLink.href = `#friends/${player.username}`;
		// usernameLink.addEventListener('click', (event) => {
		// 	event.preventDefault();
		// 	this.navigateToFriendsProfile(player.username);
		// });
		playerDiv.appendChild(usernameLink);

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
		inviteButton.addEventListener('click', () => this.handleInvite(player.username));
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
		if (result.detail === 'User not found.'){
			alert('Failed to find player');
			return;
		}
		const playerDiv = this.createPlayerItem(result);
		this.updateView(playerDiv);
	}

	async createRoom(){
		const result = await AView.fetchWithJson('/rooms/create_room/', 'POST', {});
		console.log(result);
		if (!result){
			alert('Failed to create room');
		}
		sessionStorage.removeItem('match_id');
		sessionStorage.setItem('room_name', result.id);
	}

	async handleInvite(username) {
		await this.createRoom();
		console.log('Invite player:', username);
		const result = await AView.fetchWithJson('/rooms/one_vs_one_invitation/', 'POST', { "guest": username});
		console.log(result);
		if (!result){
			alert('Failed to invite player');
		}
		navigateTo('/play');
	}

	async getHtml(){
		window.localStorage.setItem('page', 'CreateGame');
		await loadTranslations('CreateGame');

		// await this.createRoom();

		const findPlayerFrom = this.createForm('tournamentform');
		const findPlayerInput = textInputField(
			'name',
			'Name',
			'name',
			'text'
		);
		const findButton = this.createButton('find', 'find', this.searchTranslations('findPlayers'));
		findPlayerFrom.appendChild(findPlayerInput);
		findPlayerFrom.appendChild(findButton);
		findPlayerFrom.addEventListener('submit', this.handleFind.bind(this));

		// const gameDiv = this.createGame('pong');

		this.updateView(findPlayerFrom);
		return ;
	}

	async dismount(){
		console.log('Dismounting CreateGame');
		// const result = await AView.fetchWithJson(`/rooms/delete/`, 'POST', {});
		// console.log(result);
	}
}
