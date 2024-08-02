import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Tournaments");
	}

	async handleStartButton(event){
		this.socket.send(JSON.stringify({
			'cmd': 'start',
		}));
	}

	async getHtml(){
		const header = this.createHeader('header', 'Tournaments', 'h2');
		const p = this.createParagraph('welcome', 'You have no tournaments.');
		const url = `ws://localhost:8000/ws/tournament/1/?token=${localStorage.getItem('access')}`
		this.socket = new WebSocket(url);
		this.socket.onerror = function(error) {
			console.error("WebSocket Error:", error);
		};
		this.socket.onopen = function() {
			console.log('Tournament WebSocket connection established.');
			//Start screen before players have connected.
		};
		//This will be used instead of animate() to update the game state.
		this.socket.onmessage = function(event) {
			console.log(JSON.parse(event.data));
			// store the data in local storage
			let tournament = JSON.parse(event.data);
			localStorage.setItem('match_id', tournament.match_id);
			localStorage.setItem('room_name', tournament.room_name);
			console.log('getHtml()');
			console.log(tournament.match_id);
			console.log(tournament.room_name);

		};

		const startButton = this.createButton('start', 'btn', 'Start');
		startButton.addEventListener('click', this.handleStartButton.bind(this));



		window.localStorage.setItem('page', 'Tournaments');
		this.updateView(header, p, startButton);
		return ;
	}
}
