import AView from "./AView.js";

export default class FriendRequest extends AView {
	constructor(params){
		super(params);
	}

    async sendFriendRequest(friendUsername) {
        const result = await AView.fetchWithJson('/friends/send_request/', 'POST', { 'friend': friendUsername });

        if (result) {
            alert('Friend request sent!');
        } else {
            alert('Failed to send friend request.');
        }
        location.reload();
    }

    async acceptFriendRequest(friendUsername, request_id) {
        const result = await AView.fetchWithJson(`/friends/${request_id}/accept_request/`, 'POST', { 'from_user': friendUsername });
        if (result) {
            alert('Friend request accepted!');
        } else {
            alert('Failed to accept friend request.');
        }
        location.reload();
    }

    async ignoreFriendRequest(friendUsername, request_id) {
        const result = await AView.fetchWithJson(`/friends/${request_id}/reject_request/`, 'POST', { 'from_user': friendUsername });
        if (result) {
            alert('Friend request ignored.');
        } else {
            alert('Failed to ignore friend request.');
        }
        location.reload();
    }
}
