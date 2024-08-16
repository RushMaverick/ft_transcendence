import AView from "./AView.js";
import textInputField from "./TextInputView.js";
import PongGame from "./gameCanvas/pongThree.js";
import { loadTranslations } from "../index.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Play");
		this.gameDiv = null;
	}

	searchTranslations(key){
		const language = window.localStorage.getItem('language') || 'english';
		const translations = window.translations || {};
		const currentTranslations = translations[language] || {};
		let search = currentTranslations[key];

		return search;
	}

	async getHtml(){
		window.localStorage.setItem('page', 'CreateGame');
		await loadTranslations('CreateGame');

		if (!sessionStorage.getItem('room_name')) {
			alert('No room name found');
		}
		this.gameDiv = this.createGame('pong');
		this.updateView(this.gameDiv);
		return ;
	}

	async dismount(){
		console.log('Dismounting Play');
		// sessionStorage.removeItem('room_name');
		const canvas = document.querySelector('canvas');
		if (canvas && PongGame.instance) {
			console.log('canvas remove');
			canvas.remove();
			delete PongGame.instance;
		}
		if (!sessionStorage.getItem('playing') && sessionStorage.getItem('room_name')) {
			const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/rooms/${sessionStorage.getItem('room_name')}/delete/`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.getItem('access')
				}
			});
			console.log(response);
			if (response.status !== 204){
				alert('Failed to exit room');
			}
			sessionStorage.removeItem('room_name');
		}
	}
}
