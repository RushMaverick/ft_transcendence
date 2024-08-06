import AView from "./AView.js";
import { loadTranslations } from "../index.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("One-vs-one");
	}

	async getHtml(){

		await loadTranslations('Pong');
		const gameDiv = this.createGame('pong');
		const searchDiv = document.createElement('div');
		searchDiv.className = 'searchDiv';

		const searchBar = document.createElement('input');
		searchBar.setAttribute('lang-key', 'searchForFriends');
		searchBar.textContent = this.searchTranslations('searchForFriends');
		searchBar.setAttribute('placeholder', searchBar.textContent);
		searchBar.className = 'form-control';
		
		const searchButton = this.createButton('search', 'btn', 'Search');
		searchButton.classList.add('btn-primary');
		searchButton.setAttribute('lang-key', 'search');
		searchButton.textContent = this.searchTranslations('search');
		searchButton.setAttribute('placeholder', searchButton.textContent);
        searchButton.addEventListener('click', () => {
			history.pushState({ view: 'search', query: searchBar.value }, 'Search Friends', '#search');
            this.searchFriend(searchBar.value);
        });

		searchDiv.appendChild(searchBar);
		searchDiv.appendChild(searchButton);

		window.localStorage.setItem('page', 'OneVsOne');
		this.updateView(searchDiv, gameDiv);
		return ;
	}

	searchTranslations(key){
		const language = window.localStorage.getItem('language') || 'english';
		const translations = window.translations || {};
		const currentTranslations = translations[language] || {};
		let search = currentTranslations[key];
	
		return search;
	}
}