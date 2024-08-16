import AView from "./AView.js";
import FriendRequest from "./FriendRequest.js";
import { getTranslation } from "./TranslationUtils.js";
import { loadTranslations, navigateTo } from "../index.js";

export default class Friends extends AView{
	constructor(params){
		super(params);
		this.setTitle("Friends");

		window.addEventListener('popstate', this.handlePopState.bind(this));
		this.friendRequest = new FriendRequest();
		this.params = params;
		this.friends = [];
	}

	async getHtml(){
		window.localStorage.setItem('page', 'Friends');
		await loadTranslations('Friends');

		// const language = window.localStorage.getItem('language') || 'english';
		// const translations = window.translations || {};
		// const currentTranslations = translations[language] || {};
		// let search = currentTranslations['searchForFriends'];

		const friends = this.createHeader('Friends', 'Friends', 'h1');
		const friendsList =  document.createElement('div');
		friendsList.className = 'list-group';

		const searchBar = document.createElement('input');
		searchBar.setAttribute('lang-key', 'searchForFriends');
		searchBar.textContent = this.searchTranslations('searchForFriends');
		searchBar.setAttribute('placeholder', searchBar.textContent);
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

		const data = await this.fetchJsonData('/friends/list/');
		// add accepted to each friend object
		data.friends.forEach(friend => {
			friend.accepted = true;
		});
		// console.log(data);
		this.friends = data;
		if (data){
			this.createFriendsList(data, friendsList);
			this.updateView(friends, iconContainer, friendsList, searchBar, searchButton);
		}
		else{
			this.updateView(friends, iconContainer, searchBar, searchButton);
		}


		this.checkIfRequests();

		if (this.params.view && this.params.view === 'friends' && this.params.username) {
            this.navigateToFriendsProfileByusername(this.params.username);
        }
	}

	searchTranslations(key){
		const language = window.localStorage.getItem('language') || 'english';
		const translations = window.translations || {};
		const currentTranslations = translations[language] || {};
		let search = currentTranslations[key];

		return search;
	}

	createFriendsList(data, friendsList) {
		console.log('data:', data);
		console.log(data.friends);
        if (data && data.friends && data.friends.length > 0) {
            data.friends.forEach(friend => {
                friendsList.appendChild(this.createFriendItem(friend));
            });
        } else {
            // const noResultsMessageText = getTranslation('no-user-found', { username });
            // const noResultsMessage = this.createParagraph('no-user-found', noResultsMessageText);
            // friendsList.appendChild(noResultsMessage);
        }
    }

	async checkIfRequests() {
		const requests = await this.fetchJsonData('/friends/list_request/');
        const inboxIcon = document.querySelector('.inbox-icon');

		if (!document.querySelector('.inbox-icon')) {
            await this.getHtml();
        }

		if (!inboxIcon) {
			console.error('inboxIcon element not found in the DOM.');
			return;
		}

        if (requests && requests['Pending Friend request']) {
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
		const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/user/search/?username=${username}`, {
				method: 'GET',
				headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + sessionStorage.getItem('access')
					},
					// body: JSON.stringify(payload)
				});
		if (!document.querySelector('.list-group')) {
			await this.getHtml();
		}

		const friendsList = document.querySelector('.list-group');

		if (!friendsList) {
			console.error('friendsList element not found in the DOM.');
			return;
		}
		friendsList.innerHTML = '';

		const result = await response.json();
		// const result = await this.fetchJsonData('static/js/views/search.json');
		console.log(result);
		// if (result && result.length > 0) {
		// 	result.forEach(friend => {
		// 		friendsList.appendChild(this.createFriendItem(friend));
		// 	});
		if (result) {
			friendsList.appendChild(this.createFriendItem(result));
		} else {
			const noResultsMessage = this.createParagraph('no-user-found', `No Such User Found: ${username}`);
			friendsList.appendChild(noResultsMessage);
		}
	}

	async showFriendRequests() {
		const requests = await this.fetchJsonData(`/friends/list_request/`);
		const requestsList = document.createElement('div');
		requestsList.className = 'list-group';

		if (requests && requests['Pending Friend request']) {
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

		this.updateView(this.createHeader('Friend-Requests', 'Friend Requests', 'h1'), requestsList);

		const inboxIcon = document.querySelector('.inbox-icon .red-dot');
		if (inboxIcon) {
		    inboxIcon.remove();
		}
	}

	createFriendItem(friend) {
		console.log('Friend:', friend);
		const friendDiv = document.createElement('div');
		friendDiv.classList.add('list-group-item', 'friend');

		const avatar = document.createElement('img');
		avatar.src = friend.avatar ? `${import.meta.env.VITE_BASE_URL}`+ friend.avatar.image : null; // change url to env variable
		avatar.alt = `${friend.username}'s avatar`;
		friendDiv.appendChild(avatar);

		const usernameLink = document.createElement('a');
		usernameLink.textContent = friend.username;
		usernameLink.href = `profile/${friend.id}`;
		usernameLink.addEventListener('click', (event) => {
			event.preventDefault();
			this.navigateToFriendsProfile(friend.id);
		});
		friendDiv.appendChild(usernameLink);

		const status = document.createElement('div');
		status.classList.add('status');
		if (friend.is_online) {
			status.style.backgroundColor = friend.is_online ? 'green' : 'gray';
		} else {
			// Fallback color if online status is unknown
			status.style.backgroundColor = 'gray'; // Or any other default color you prefer
		}
		friendDiv.appendChild(status);

		const actions = this.createActions(friend);
		friendDiv.appendChild(actions);

		return friendDiv;
	}

	createActions(friend, request_id) {
        const actions = document.createElement('div');
		actions.setAttribute('lang-key', '');
        actions.classList.add('actions');

		console.log('createActions:Friend:', friend);

		if (friend.accepted === false) {
			let accept = this.searchTranslations('accept-button');
			const acceptButton = this.createButton('accept-button', 'btn', accept);
			acceptButton.addEventListener('click', () => this.friendRequest.acceptFriendRequest(friend.username, request_id));
			actions.appendChild(acceptButton);

			let ignore = this.searchTranslations('ignore-button');
			const ignoreButton = this.createButton('ignore-button', 'btn', ignore);
			ignoreButton.addEventListener('click', () => this.friendRequest.ignoreFriendRequest(friend.username, request_id));
			actions.appendChild(ignoreButton);
		} else if (friend.accepted === undefined) {
			let request = this.searchTranslations('request-button');
			const requestButton = this.createButton('request-button', 'request-btn', request);
			requestButton.addEventListener('click', () => this.friendRequest.sendFriendRequest(friend.username));
			actions.appendChild(requestButton);
		}

        return actions;
    }

	createRequestItem(request) {
		const requestDiv = document.createElement('div');
		requestDiv.classList.add('list-group-item', 'friend');
		console.log('Request:', request);
		console.log(request);
		const avatar = document.createElement('img');
		avatar.src = request.from_user.avatar ? `${import.meta.env.VITE_BASE_URL}${request.from_user.avatar.image}` : null; // change url to env variable;
		avatar.alt = `${request.from_user}'s avatar`;
		requestDiv.appendChild(avatar);

		const usernameLink = document.createElement('a');
		usernameLink.textContent = request.from_user.username;
		usernameLink.href = `profile/${request.from_user.id}`;
		usernameLink.addEventListener('click', (event) => {
			event.preventDefault();
			this.navigateToFriendsProfile(request.from_user.id);
		});
		requestDiv.appendChild(usernameLink);

		const status = document.createElement('div');
		status.classList.add('status');
		// Todo: user online status is not available in the request data
		if (request.from_user.online && typeof request.from_user.online.is_online !== 'undefined') {
			status.style.backgroundColor = request.from_user.online.is_online ? 'green' : 'gray';
		}
		else {
			status.style.backgroundColor = 'gray';
		}
		requestDiv.appendChild(status);

        const actions = this.createActions(request, request.id);
        requestDiv.appendChild(actions);

		return requestDiv;
	}

	navigateToFriendsProfile(user_id) {
		navigateTo(`/profile/${user_id}`);
    }

    showFriendsProfile(friend) {
		this.clearView();

		const profileHeader = this.createHeader('Friends', 'Friends', 'h1');

		const profileView = document.createElement('div');
		profileView.classList.add('profile');

		const profileTitle = this.createHeader('Friends-name',`${friend.username}`, 'h3');

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
        const onlineStatusText = friend.profile.online ? getTranslation('yes') : getTranslation('no');
        statusText.textContent = getTranslation('online-status', { status: onlineStatusText });
		onlineStatus.appendChild(statusText);
		onlineStatus.appendChild(statusDot);

		const wins = friend.wins;
		const loss = friend.loses;
		const gameHistoryText = getTranslation('game-history', { wins, loss });
		const gameHistory = document.createElement('p');
        gameHistory.textContent = gameHistoryText;

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
				const friend = this.getFriendByUsername(friendUsername); // Implement this method to fetch the friend data by username
				if (friend) {
					this.navigateToFriendsProfile(friend.username);
				}
			}
		} else {
			// Default view if no state is found (e.g., first load)
			this.getHtml();
		}
	}

	getFriendByusername(username) {
        // Implement this method to fetch the friend data by username from your data source
        // This is a placeholder implementation
        return this.friends.find(friend => friend.username == username);
    }
}
