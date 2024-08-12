import AView from "./AView.js";
import textInputField from "./TextInputView.js";
import PongGame from "./gameCanvas/pongThree.js";
import { loadTranslations } from "../index.js";

import { navigateTo } from "../index.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Game invites");
	}

	searchTranslations(key){
		const language = window.localStorage.getItem('language') || 'english';
		const translations = window.translations || {};
		const currentTranslations = translations[language] || {};
		let search = currentTranslations[key];

		return search;
	}

	async handleAccept(roomId, fromUser) {
		console.log('Accept player:', fromUser);
		try {
			const data = await AView.fetchWithJson(`/rooms/${roomId}/accept_request/`, 'POST', {"from_user": fromUser});
			console.log(data);
			sessionStorage.removeItem('match_id');
			sessionStorage.setItem('room_name', data.Room.id);
			navigateTo('/play');
		} catch (error) {
			console.error('Error accepting invite:', error);
		}
	}

	async handleDecline(roomId, fromUser) {
		console.log('Decline player:', fromUser);
		const data = await AView.fetchWithJson(`/rooms/${roomId}/reject_request/`, 'POST', {"from_user": fromUser});
		console.log(data);
		location.reload();
	}

	createInviteItem(invite) {
		console.log('Invite:', invite);
		const inviteDiv = document.createElement('div');
		inviteDiv.classList.add('list-group-item', 'invite');

		const avatar = document.createElement('img');
		avatar.src = invite.from_user.avatar ? 'http://localhost:8000'+ invite.from_user.avatar.image : null; // change url to env variable
		avatar.alt = `${invite.from_user.username}'s avatar`;
		inviteDiv.appendChild(avatar);

		const usernameLink = document.createElement('a');
		usernameLink.textContent = invite.from_user.username;
		// usernameLink.href = `#friends/${player.username}`;
		// usernameLink.addEventListener('click', (event) => {
		// 	event.preventDefault();
		// 	this.navigateToFriendsProfile(player.username);
		// });
		inviteDiv.appendChild(usernameLink);

		const status = document.createElement('div');
		status.classList.add('status');
		if (invite.from_user.online && typeof invite.from_user.online.is_online !== 'undefined') {
			status.style.backgroundColor = invite.from_user.online.is_online ? 'green' : 'gray';
		} else {
			// Fallback color if online status is unknown
			status.style.backgroundColor = 'gray'; // Or any other default color you prefer
		}
		inviteDiv.appendChild(status);

		const actions = document.createElement('div');
		actions.setAttribute('lang-key', '');
		actions.classList.add('actions');
		const acceptButton = this.createButton('accept-button', 'btn', this.searchTranslations('accept-button'));
		acceptButton.addEventListener('click', () => this.handleAccept(invite.id, invite.from_user.username));
		actions.appendChild(acceptButton);
		const declineButton = this.createButton('decline-button', 'btn', this.searchTranslations('decline-button'));
		declineButton.addEventListener('click', () => this.handleDecline(invite.id, invite.from_user.username));
		actions.appendChild(declineButton);

		inviteDiv.appendChild(actions);

		return inviteDiv;
	}

	createInviteList(data, inviteList) {
        if (data && data['Pending Friend request'] && data['Pending Friend request'].length > 0) {
            data['Pending Friend request'].forEach(invite => {
                inviteList.appendChild(this.createInviteItem(invite));
            });
        }
    }

	async getHtml(){
		window.localStorage.setItem('page', 'GameInvites');
		await loadTranslations('GameInvites');

		const data = await AView.fetchWithJson('/rooms/list_request/', 'GET');
		console.log(data);
		const invitesList =  document.createElement('div');
		invitesList.className = 'list-group';
		this.createInviteList(data, invitesList);

		this.updateView(invitesList);
		return ;
	}
}

