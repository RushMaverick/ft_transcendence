import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);
		this.setTitle("Friends");
	}

	async getHtml(){
		const friends = this.createHeader('Friends', 'h1');
		const data = await this.fetchJsonData('static/js/views/friends.json');

		if (data && data.length > 0) {
			const friendsList = document.createElement('div');
			data.forEach(friend => {
				const friendDiv = document.createElement('div');
				friendDiv.classList.add('friend');

				const avatar = document.createElement('img');
				avatar.src = friend.profile.avatar;
				avatar.alt = `${friend.username}'s avatar`;
				friendDiv.appendChild(avatar);

				const username = this.createParagraph(friend.username);

				const usernameLink = document.createElement('a');
				usernameLink.textContent = friend.username;
				//using hash for SPA navigation
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

				friendsList.appendChild(friendDiv);
			});

			this.updateView(friends, friendsList);
		} else {
			const noFriendsMessage = this.createParagraph('You have no friends');
			this.updateView(friends, noFriendsMessage);
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
}
