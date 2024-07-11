import AView from "./AView.js";
import {
    sendFriendRequest,
    acceptFriendRequest,
    ignoreFriendRequest
} from "./FriendRequest.js";

export default class extends AView {
	constructor(params){
		super(params);
		this.setTitle("Friends");

		window.addEventListener('popstate', (event) => {
            this.handlePopState(event);
        });
	}

	createFriendItem(friend, isFriend = true) {
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
	
		if (!isFriend) {
			const requestButton = this.createButton('request-button', 'request-btn', 'Request');
			requestButton.classList.add('btn-primary', 'request-btn');	
			requestButton.addEventListener('click', () => this.sendFriendRequest(friend.id));
			friendDiv.appendChild(requestButton);
		}

		return friendDiv;
	}
	
	async getHtml(){
		const friends = this.createHeader('Friends', 'Friends', 'h1');
		const friendsList =  document.createElement('div');
		friendsList.className = 'list-group';

		const searchBar = document.createElement('input');
		searchBar.setAttribute('type', 'text');
		searchBar.setAttribute('placeholder', 'Search for friends...');
		searchBar.className = 'form-control';
	
		const searchButton = this.createButton('search', 'btn', 'Search');
		searchButton.classList.add('btn-primary');		
        searchButton.addEventListener('click', () => {
            history.pushState({ view: 'search', query: searchBar.value }, 'Search Friends', '#search');
            this.searchFriend(searchBar.value);
        });

        const inboxIcon = document.createElement('span');
        inboxIcon.classList.add('inbox-icon');
        inboxIcon.innerHTML = '<i class="fas fa-envelope"></i>'; 
        inboxIcon.addEventListener('click', () => {
            history.pushState({ view: 'friendRequests' }, 'Friend Requests', '#friend-requests');
            this.showFriendRequests();
        });

        const iconContainer = document.createElement('div');
        iconContainer.classList.add('icon-container');
        iconContainer.appendChild(inboxIcon);

		const data = await this.fetchJsonData('static/js/views/friends.json');
		if (data && data.length > 0) {
			data.forEach(friend => {
				const friendDiv = document.createElement('div');
				friendsList.appendChild(this.createFriendItem(friend));
			});

			this.updateView(friends, iconContainer, friendsList, searchBar, searchButton);
		} else {
			const noFriendsMessage = this.createParagraph('You have no friends');
			this.updateView(friends, iconContainer, noFriendsMessage, searchBar, searchButton);
		}

		this.checkIfRequests();
	}

	async checkIfRequests() {
        const requests = await this.fetchJsonData('static/js/views/friendRequest.json');
        const inboxIcon = document.querySelector('.inbox-icon');

        if (requests && requests.length > 0) {
            const redDot = document.createElement('span');
            redDot.classList.add('red-dot');
            inboxIcon.appendChild(redDot);
        }
    }

	navigateToFriendsProfile(friend) {
	
		history.pushState(null, null, `#friends/${friend.id}`);
		this.clearView();
	
		const profileHeader = this.createHeader('Friends', 'Friends', 'h1');
	
		const profileView = document.createElement('div');
		profileView.classList.add('friends-profile');
	
		const profileTitle = this.createHeader('Friends',`${friend.username}`, 'h3');
		
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

		const gameHistory = this.createParagraph('game-history', `Win : ${friend.wins}🏆\t\tLoss : ${friend.loses}💀`)

		
		profileView.appendChild(profileTitle);
		profileView.appendChild(profileAvatar);
		profileView.appendChild(onlineStatus);
		profileView.appendChild(gameHistory);
		if (!friend.isFriend) {
			const requestButton = this.createButton('request-button', 'btn', 'Request');
			requestButton.classList.add('btn-primary');	
			requestButton.addEventListener('click', () => this.sendFriendRequest(friend.username));
			profileView.appendChild(requestButton);
		}

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
		
		if (!friendsList) {
            console.error('friendsList element not found in the DOM.');
            return;
        }
		friendsList.innerHTML = '';

		// const result = await response.json();
		const result = await this.fetchJsonData('static/js/views/search.json');
		if (result && result.length > 0) {
			result.forEach(friend => {
				const isFriend = friend.isFriend; 
				friendsList.appendChild(this.createFriendItem(friend, isFriend));
			});
		} else {
			const noResultsMessage = this.createParagraph(`No Such User Found: ${username}`);
			friendsList.appendChild(noResultsMessage);
		}
	}

	async showFriendRequests() {
		const requests = await this.fetchJsonData('static/js/views/friendRequest.json');
		const requestsList = document.createElement('div');
		requestsList.className = 'list-group';
	
		if (requests && requests.length > 0) {
			requests.forEach(request => {
				const requestItem = this.createRequestItem(request);
				if (!requestItem) {
                    console.error('Request item creation failed for:', request);
                }
				requestsList.appendChild(requestItem);
			});
	
			this.updateView(this.createHeader('Friend Requests', 'Friend Requests', 'h1'), requestsList);
		} else {
			const noRequestsMessage = this.createParagraph('You have no friend requests');
			this.updateView(this.createHeader('Friend Requests', 'Friend Requests', 'h1'), noRequestsMessage);
		}

		const inboxIcon = document.querySelector('.inbox-icon .red-dot');
        if (inboxIcon) {
            inboxIcon.remove();
        }
	}

	createRequestItem(request) {
		const requestDiv = document.createElement('div');
		requestDiv.classList.add('list-group-item', 'friend');
	
		const avatar = document.createElement('img');
		avatar.src = request.profile.avatar;
		avatar.alt = `${request.username}'s avatar`;
		requestDiv.appendChild(avatar);
	
		const usernameLink = document.createElement('a');
		usernameLink.textContent = request.username;
		usernameLink.href = `#friends/${request.id}`;
		usernameLink.addEventListener('click', (event) => {
			event.preventDefault();
			this.navigateToFriendsProfile(request);
		});
		requestDiv.appendChild(usernameLink);
	
		const status = document.createElement('div');
		status.classList.add('status');
		status.style.backgroundColor = request.profile.online ? 'green' : 'gray';
		requestDiv.appendChild(status);
	
		const acceptButton = this.createButton('accept-button', 'btn', 'Accept');
		acceptButton.classList.add('btn-success', 'request-button');
		acceptButton.addEventListener('click', () => this.acceptFriendRequest(request.id));
		requestDiv.appendChild(acceptButton);
	
		const ignoreButton = this.createButton('ignore-button', 'btn', 'Ignore');
		ignoreButton.classList.add('btn-danger', 'request-button');
		ignoreButton.addEventListener('click', () => this.ignoreFriendRequest(request.id));
		requestDiv.appendChild(ignoreButton);
	
		return requestDiv;
	}

	handlePopState(event) {
		const state = event.state;
	
		if (state) {
			if (state.view === 'search') {
				this.searchFriend(state.query);
			} else if (state.view === 'friendRequests') {
				this.showFriendRequests();
			} else if (state.view === 'profile') {
				const friendId = state.friendId;
				const friend = this.getFriendById(friendId); // Implement this method to fetch the friend data by ID
				if (friend) {
					this.navigateToFriendsProfile(friend);
				}
			}
		} else {
			// Default view if no state is found (e.g., first load)
			this.getHtml();
		}
	}

	getFriendById(friendId) {
        // Implement this method to fetch the friend data by ID from your data source
        // This is a placeholder implementation
        return this.friends.find(friend => friend.id === friendId);
    }
}
