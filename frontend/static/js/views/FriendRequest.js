import AView from "./AView.js";

export default class FriendRequest extends AView {
	constructor(params){
		super(params);
	}

    async sendFriendRequest(friendUsername) {
        const result = await AView.fetchWithJson('/api/sendFriendRequest', 'POST', { friendUsername });
        console.log(result);

        if (result) {
            if (result.success) {
                alert('Friend request sent!');
            } else {
                alert('Failed to send friend request.');
            }
        }
    }

    async acceptFriendRequest(friendUsername) {
        const result = await AView.fetchWithJson('/api/acceptFriendRequest', 'POST', { friendUsername });
        console.log(result);
        if (result) {
            if (result.success) {
                alert('Friend request accepted!');
            } else {
                alert('Failed to accept friend request.');
            }
        }
    }

    async ignoreFriendRequest(friendUsername) {
        const result = await AView.fetchWithJson('/api/ignoreFriendRequest', 'POST', { friendUsername });
        console.log(result);
        if (result) {
            if (result.success) {
                alert('Friend request ignored.');
            } else {
                alert('Failed to ignore friend request.');
            }
        }
    }
}