import AView from "./AView.js";

import PongGame from "./gameCanvas/pongThree.js";
import textInputField from "./TextInputView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Tournaments");
		this.socket = null;
	}

	async handleStartButton(event){
		this.socket.send(JSON.stringify({
			'cmd': 'start',
		}));
	}

	socketOnMessageHandler(event){
		console.log(JSON.parse(event.data));
		// store the data in local storage
		let tournament = JSON.parse(event.data);

		if (tournament.match_id == null || tournament.room_name == null){
			return;
		}
		sessionStorage.setItem('match_id', tournament.match_id);
		sessionStorage.setItem('room_name', tournament.room_name);
		console.log('getHtml()');
		console.log(tournament.match_id);
		console.log(tournament.room_name);
		// navigateTo('/one-vs-one');
		const canvas = document.querySelector('canvas');
		if (canvas && PongGame.instance) {
			console.log('canvas remove');
			canvas.remove();
			delete PongGame.instance;
			this.updateView();
		}
		console.log('createGame');
		let gameDiv = this.createGame('pong');
		this.updateView(gameDiv);
		// this.updateView();
	}

	async handleCreate(event) {
		event.preventDefault();
		const tournamentName = event.target.name.value;
		console.log(`Tournament Name: ${tournamentName}`);
		const myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer " + sessionStorage.getItem('access'));
		myHeaders.append("Content-Type", "application/json");

		const body = {
			'name': tournamentName,
		};

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: JSON.stringify(body),
			redirect: "follow"
		};

		fetch("http://localhost:8000/api/tournaments/", requestOptions)
			.then((response) => response.json())
			.then((result) => console.log(result))
			.catch((error) => console.error(error));
	}

	async handleJoin(event) {
		event.preventDefault();
		const tournamentId = event.target.id.value;
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

	async getHtml(){
		const header = this.createHeader('header', 'Tournaments', 'h2');
		const p = this.createParagraph('welcome', 'You have no tournaments.');
		const createFrom = this.createForm('tournamentform');
		const tournamentNameInput = textInputField(
			'name',
			'Name',
			'name',
			'text'
		);
		const createButton = this.createButton('create', 'create', 'Create');
		createFrom.appendChild(tournamentNameInput);
		createFrom.appendChild(createButton);
		createFrom.addEventListener('submit', this.handleCreate.bind(this));

		const joinForm = this.createForm('joinform');
		const tournamentIdInput = textInputField(
			'id',
			'id',
			'id',
			'number'
		);
		const joinButton = this.createButton('join', 'join', 'Join');
		joinForm.appendChild(tournamentIdInput);
		joinForm.appendChild(joinButton);
		joinForm.addEventListener('submit', this.handleJoin.bind(this));

		const startButton = this.createButton('start', 'btn', 'Start');
		startButton.addEventListener('click', this.handleStartButton.bind(this));

		window.localStorage.setItem('page', 'Tournaments');
		this.updateView(header, p, createFrom, joinForm, startButton);
		return ;
	}
}
