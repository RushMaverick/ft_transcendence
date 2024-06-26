import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);
		this.setTitle("Friends");
	}

	createFriendItem(friend) {
		const friendDiv = document.createElement('div');
		friendDiv.classList.add('list-group-item', 'friend');
	
		const avatar = document.createElement('img');
		avatar.src = friend.profile.avatar;
		avatar.alt = `${friend.username}'s avatar`;
		friendDiv.appendChild(avatar);
	
		const usernameLink = document.createElement('a');
		usernameLink.textContent = friend.username;
		usernameLink.href = `#friends/${friend.id}`;
		usernameLink.addEventListener('click', (event) => {
			event.preventDefault();
			this.navigateToFriendsProfile(friend);
		});
		friendDiv.appendChild(usernameLink);
	
		const status = document.createElement('div');
		status.classList.add('status');
		status.style.backgroundColor = friend.profile.online ? 'green' : 'gray';
		friendDiv.appendChild(status);
	
		return friendDiv;
	}
	

	async getHtml(){
		const friends = this.createHeader('Friends', 'h1');
		const friendsList =  document.createElement('div');
		friendsList.className = 'list-group';

		const searchBar = document.createElement('input');
		searchBar.setAttribute('type', 'text');
		searchBar.setAttribute('placeholder', 'Search for friends...');
		searchBar.className = 'form-control';
	
		const searchButton = this.createButton('btn', 'Search');
		searchButton.classList.add('btn-primary');		
		searchButton.addEventListener('click', () => this.searchFriend(searchBar.value));
	
		const data = await this.fetchJsonData('static/js/views/friends.json');

		if (data && data.length > 0) {
			data.forEach(friend => {
				const friendDiv = document.createElement('div');
				friendsList.appendChild(this.createFriendItem(friend));
			});

			this.updateView(friends, friendsList, searchBar, searchButton);
		} else {
			const noFriendsMessage = this.createParagraph('You have no friends');
			this.updateView(friends, noFriendsMessage, searchBar, searchButton);
		}

	}

	navigateToFriendsProfile(friend) {
	
		history.pushState(null, null, `#friends/${friend.id}`);
		this.clearView();
	
		const profileHeader = this.createHeader('Friends', 'h1');
	
		const profileView = document.createElement('div');
		profileView.classList.add('friends-profile');
	
		const profileTitle = this.createHeader(`${friend.username}`, 'h3');
		
		const profileAvatar = document.createElement('img');
		profileAvatar.src = friend.profile.avatar;
		profileAvatar.alt = `${friend.username}'s avatar`;
	
		// const onlineStatus = this.createParagraph(`Online: ${friend.profile.online ? 'Yes' : 'No'}`);
		const onlineStatus = document.createElement('div');
        onlineStatus.classList.add('online-status');
        const statusDot = document.createElement('div');
        statusDot.classList.add('status');
		statusDot.style.backgroundColor = friend.profile.online ? 'green' : 'gray';
        const statusText = document.createElement('span');
        statusText.textContent = `Online: ${friend.profile.online ? 'Yes' : 'No'}`;
		onlineStatus.appendChild(statusText);
		onlineStatus.appendChild(statusDot);

		const winning = friend.wins;
		const losing = friend.loses;

		const gameHistory = this.createParagraph(`Win : ${friend.wins}🏆\t\tLoss : ${friend.loses}💀`)

		profileView.appendChild(profileTitle);
		profileView.appendChild(profileAvatar);
		profileView.appendChild(onlineStatus);
		profileView.appendChild(gameHistory);

		this.updateView(profileHeader, profileView);
	}

	async searchFriend(username) {
		// const payload = { user: username };
		// const response = await fetch('/api/search', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(payload)
		// });
		
		const friendsList = document.querySelector('.list-group');
		friendsList.innerHTML = '';

		// const result = await response.json();
		const result = await this.fetchJsonData('static/js/views/search.json');
		if (result && result.length > 0) {
			result.forEach(friend => {
				friendsList.appendChild(this.createFriendItem(friend));
			});
		} else {
			const noResultsMessage = this.createParagraph(`No Such User Found: ${username}`);
			friendsList.appendChild(noResultsMessage);
		}
	}
}
