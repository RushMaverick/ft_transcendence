import AView from "./AView.js";
import { loadTranslations, navigateTo } from "../index.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Tournament");
		this.socket = null;
		this.participantsList = null;
	}

	async handleStartButton(event){
		this.socket.send(JSON.stringify({
			'cmd': 'start',
		}));
	}

	socketOnMessageHandler(event){
		// console.log('socketOnMessageHandler');
		// console.log(JSON.parse(event.data));
		let tournament = JSON.parse(event.data);

		if (tournament.winner){
			console.log('winner');
			console.log(tournament.winner);
			alert(`Winner: ${tournament.winner.username}`);
			sessionStorage.removeItem('tournamentId');
			this.socket.close();
			return;
		}
		const joined = /(\w+) joined the tournament/;
		const left = /(\w+) left the tournament/;
		if (JSON.stringify(tournament).match(joined) || JSON.stringify(tournament).match(left)){
			this.updateParticipantsList();
			return;
		}
		if (tournament.match_id == null || tournament.room_name == null){
			return;
		}
		sessionStorage.setItem('match_id', tournament.match_id);
		sessionStorage.setItem('room_name', tournament.room_name);
		navigateTo('/play');
	}

	async handleJoin(tournamentId) {
		console.log(`Join Tournament Name: ${tournamentId}`);

		const url = `ws://localhost:8000/ws/tournament/${tournamentId}/?token=${sessionStorage.getItem('access')}`
		console.log("Tournaments.js: getHtml()");
		console.log(this.socket);
		if (this.socket === null){
			this.socket = new WebSocket(url);
			this.socket.onerror = function(error) {
				console.error("WebSocket Error:", error);
			};
			this.socket.onopen = function() {
				console.log('Tournament WebSocket connection established.');
				//Start screen before players have connected.
			};
			//This will be used instead of animate() to update the game state.
			this.socket.onmessage = this.socketOnMessageHandler.bind(this);
			this.socket.onclose = function(event) {
				if (event.wasClean) {
					console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
				} else {
					console.error('[close] Connection died');
				}
			};
		}
	}

	createPlayerItem(player) {
		console.log('player:', player);
		const playerDiv = document.createElement('div');
		playerDiv.classList.add('list-group-item', 'flex', 'align-items-end');

		const avatar = document.createElement('img');
		avatar.src = player.avatar ? 'http://localhost:8000'+ player.avatar.image : null; // change url to env variable
		avatar.alt = `${player.username}'s avatar`;
		playerDiv.appendChild(avatar);

		const usernameLink = document.createElement('a');
		usernameLink.textContent = player.username;
		// usernameLink.href = `#players/${player.username}`;
		// usernameLink.addEventListener('click', (event) => {
		// 	event.preventDefault();
		// 	this.navigateToplayersProfile(player.username);
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

		return playerDiv;
	}

	createListElement(participant){
		const li = document.createElement('li');
		li.appendChild(this.createPlayerItem(participant));
		return li;
	}

	async updateParticipantsList(){
		const data = await AView.fetchWithJson(`/tournaments/${sessionStorage.getItem('tournamentId')}/`, 'GET');
		console.log(data);
		if (data.participants){
			this.participantsList.innerHTML = '';
			data.participants.forEach(participant => {
				this.participantsList.appendChild(this.createListElement(participant));
			});
		}
	}

	async loadPage(){
		const data = await AView.fetchWithJson(`/tournaments/${sessionStorage.getItem('tournamentId')}/`, 'GET');
		if (!data.id){
			console.error(data.error);
			return;
		}

		const header = this.createHeader('h2', data.name, 'h2');

		const participants = document.createElement('div');
		participants.classList.add('participants');
		const participantsHeader = this.createParagraph('participants', 'Participants');
		participants.appendChild(participantsHeader);
		this.participantsList = document.createElement('ul');
		participants.appendChild(this.participantsList);
		await this.updateParticipantsList();

		const startButton = this.createButton('start', 'btn', 'Start');
		startButton.addEventListener('click', this.handleStartButton.bind(this));

		this.updateView(header, participants, startButton);
		return ;
	}

	async getHtml(){
		window.localStorage.setItem('page', 'Tournament');
		await loadTranslations('Tournament');

		if (!sessionStorage.getItem('tournamentId')){
			alert('No tournament selected');
			return ;
		}

		await this.handleJoin(sessionStorage.getItem('tournamentId'));

		await this.loadPage();
		return ;
	}

	async dismount(){
		console.log('Tournament dismount');
		// if (this.socket){
		// 	this.socket.close();
		// }
		// sessionStorage.removeItem('tournamentId');
	}
}
