import AView from "./AView.js";
import FriendRequest from "./FriendRequest.js";

export default class Friends extends AView{
	constructor(params){
		super(params);
		this.setTitle("Friends");

		window.addEventListener('popstate', this.handlePopState.bind(this));
		this.friendRequest = new FriendRequest();
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
		this.createFriendsList(data, friendsList);
		this.updateView(friends, iconContainer, friendsList, searchBar, searchButton);
		
		this.checkIfRequests();
	}

	createFriendsList(data, friendsList) {
        if (data && data.length > 0) {
            data.forEach(friend => {
                friendsList.appendChild(this.createFriendItem(friend));
            });
        } else {
            const noFriendsMessage = this.createParagraph('no-friends', 'You have no friends');
            friendsList.appendChild(noFriendsMessage);
        }
    }

	async checkIfRequests() {
		const requests = await this.fetchJsonData('static/js/views/friendRequest.json');
        const inboxIcon = document.querySelector('.inbox-icon');

		if (!document.querySelector('.inbox-icon')) {
            await this.getHtml();
        }

		if (!inboxIcon) {
			console.error('inboxIcon element not found in the DOM.');
			return;
		}
		
        if (requests && requests['Pending Friend request'].length > 0) {
			const redDot = document.createElement('span');
            redDot.classList.add('red-dot');
            inboxIcon.appendChild(redDot);
        } else {
            console.log('No pending requests found');
        }
		//this is for debugging. leaving it for when connected to backend

		// try {
		// 	const requests = await this.fetchJsonData('static/js/views/friendRequest.json');
		// 	const inboxIcon = document.querySelector('.inbox-icon');
	
		// 	if (!inboxIcon) {
		// 		console.error('inboxIcon element not found in the DOM.');
		// 		return;
		// 	}
	
		// 	console.log('Requests:', requests); // Debugging statement to check the fetched data
	
		// 	if (requests && requests.length > 0) {
		// 		const redDot = document.createElement('span');
		// 		redDot.classList.add('red-dot');
		// 		inboxIcon.appendChild(redDot);
		// 	}
		// } catch (error) {
		// 	console.error('Error fetching or processing friend requests:', error);
		// }
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
		if (!document.querySelector('.list-group')) {
			await this.getHtml();
		}

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
				friendsList.appendChild(this.createFriendItem(friend));
			});
		} else {
			const noResultsMessage = this.createParagraph('no-user-found', `No Such User Found: ${username}`);
			friendsList.appendChild(noResultsMessage);
		}
	}

	async showFriendRequests() {
		const requests = await this.fetchJsonData('static/js/views/friendRequest.json');
		const requestsList = document.createElement('div');
		requestsList.className = 'list-group';
	
		if (requests && requests['Pending Friend request'].length > 0) {
			requests['Pending Friend request'].forEach(request => {
				const requestItem = this.createRequestItem(request);
				if (!requestItem) {
					console.error('Request item creation failed for:', request);
				}
				requestsList.appendChild(requestItem);
			});
		} else {
			const noRequestsMessage = this.createParagraph('no-request', 'You have no friend requests');
			requestsList.appendChild(noRequestsMessage);
		}

		this.updateView(this.createHeader('Friend Requests', 'Friend Requests', 'h1'), requestsList);

		// const inboxIcon = document.querySelector('.inbox-icon .red-dot');
		// if (inboxIcon) {
		//     inboxIcon.remove();
		// }
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
	
		const actions = this.createActions(friend);
		friendDiv.appendChild(actions);

		return friendDiv;
	}

	createActions(friend) {
        const actions = document.createElement('div');
        actions.classList.add('actions');

		if (friend.accepted === false) {
			const acceptButton = this.createButton('accept-button', 'btn', 'Accept');
			acceptButton.addEventListener('click', () => this.friendRequest.acceptFriendRequest(friend.username));
			actions.appendChild(acceptButton);
	
			const ignoreButton = this.createButton('ignore-button', 'btn', 'Ignore');
			ignoreButton.addEventListener('click', () => this.friendRequest.ignoreFriendRequest(friend.username));
			actions.appendChild(ignoreButton);
		} else if (friend.accepted === undefined) {
			const requestButton = this.createButton('request-button', 'request-btn', 'Request');  
			requestButton.addEventListener('click', () => this.friendRequest.sendFriendRequest(friend.username));
			actions.appendChild(requestButton);
		}

        return actions;
    }

	createRequestItem(request) {
		const requestDiv = document.createElement('div');
		requestDiv.classList.add('list-group-item', 'friend');
	
		const avatar = document.createElement('img');
		avatar.src = request.profile.avatar;
		avatar.alt = `${request.from_user}'s avatar`;
		requestDiv.appendChild(avatar);
	
		const usernameLink = document.createElement('a');
		usernameLink.textContent = request.from_user;
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
	
        const actions = this.createActions(request);
        requestDiv.appendChild(actions);
	
		return requestDiv;
	}
	
	navigateToFriendsProfile(friend) {
		
		history.pushState(null, null, `#friends/${friend.id}`);
        this.showFriendsProfile(friend);
    }
	
    showFriendsProfile(friend) {
		this.clearView();
		
		const profileHeader = this.createHeader('Friends', 'Friends', 'h1');
		
		const profileView = document.createElement('div');
		profileView.classList.add('profile');
		
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
		
		const actions = this.createActions(friend);
		profileView.appendChild(actions);
		
		this.updateView(profileHeader, profileView);
	}

	handlePopState(event) {
		const state = event.state;
	
		if (state) {
			if (state.view === 'search') {
				this.searchFriend(state.query);
			} else if (state.view === 'friendRequests') {
				this.showFriendRequests();
			} else if (state.view === 'profile') {
				const friendUsername = state.friendUsername;
				const friend = this.getFriendByUsername(friendUsername); // Implement this method to fetch the friend data by ID
				if (friend) {
					this.navigateToFriendsProfile(friend);
				}
			}
		} else {
			// Default view if no state is found (e.g., first load)
			this.getHtml();
		}
	}

	getFriendByUsername(friendUsername) {
        // Implement this method to fetch the friend data by ID from your data source
        // This is a placeholder implementation
        return this.friends.find(friend => friend.username === friendUsername);
    }
}
