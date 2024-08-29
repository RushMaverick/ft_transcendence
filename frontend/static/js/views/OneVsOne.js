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

	async handleCreateGame() {
		navigateTo('/create-game');
	}

	async handleInvites() {
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
