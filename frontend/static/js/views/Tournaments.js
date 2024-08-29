import AView from "./AView.js";

import textInputField from "./TextInputView.js";
import { loadTranslations, navigateTo } from "../index.js";


export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Tournaments");
	}

	async handleCreate(event) {
		event.preventDefault();
		const tournamentName = event.target.name.value;
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

		fetch(`${import.meta.env.VITE_API_ENDPOINT}` + "/tournaments/", requestOptions)
			.then((response) => response.json())
			.then((result) =>
				{
					sessionStorage.setItem('tournamentId', result.id);
					navigateTo('/tournament');
				}
			)
			.catch((error) => console.error(error));
	}

	createTournamentItem(tournament) {
		const tournamentDiv = document.createElement('div');
		tournamentDiv.classList.add('list-group-item', 'flex', 'space-between');

		// tournament name
		const name = this.createParagraph('_', tournament.name);
		tournamentDiv.appendChild(name);

		// number of participants
		const participants = this.createParagraph('participant-num', `${tournament.participants.length}/4`);
		participants.classList.add('flex');
		tournamentDiv.appendChild(participants);

		tournamentDiv.addEventListener('click', (event) => {
			sessionStorage.setItem('tournamentId', tournament.id);
			navigateTo('/tournament');
		});
		return tournamentDiv;
	}

	createListElement(tournament){
		const li = document.createElement('li');
		li.appendChild(this.createTournamentItem(tournament));
		return li;
	}

	async getHtml(){
		window.localStorage.setItem('page', 'Tournaments');
		await loadTranslations('Tournament');

		const header = this.createHeader('header', 'Tournaments', 'h2');
		// const p = this.createParagraph('welcome', 'You have no tournaments.');
		const createFrom = this.createForm('tournamentform');
		const p = this.createParagraph('create-tournament', 'Create a new tournament');
		const tournamentNameInput = textInputField(
			'name',
			'Name',
			'name',
			'text'
		);
		const createButton = this.createButton('create', 'create', 'Create');
		createFrom.appendChild(p);
		createFrom.appendChild(tournamentNameInput);
		createFrom.appendChild(createButton);
		createFrom.addEventListener('submit', this.handleCreate.bind(this));

		const data = await AView.fetchWithJson('/tournaments/', 'GET');
		if (data && data.length > 0){
			// list of tournaments
			const tournaments = document.createElement('div');
			tournaments.classList.add('tournaments');
			const tournamentsP = this.createParagraph('join-tournament', 'Join a tournament');
			tournaments.appendChild(tournamentsP);
			const tournamentsList = document.createElement('ul');
			tournaments.appendChild(tournamentsList);
			data.forEach(tournament => {
				tournamentsList.appendChild(this.createListElement(tournament));
			});
			this.updateView(header, createFrom, tournaments);
			return ;
		}

		this.updateView(header, createFrom);
		return ;
	}
}
