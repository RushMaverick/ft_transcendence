import AView from "./AView.js";

export async function sendFriendRequest(friendUsername) {
    const result = await fetchWithJson('/api/sendFriendRequest', 'POST', { friendUsername });

    if (result) {
        if (result.success) {
            alert('Friend request sent!');
        } else {
            alert('Failed to send friend request.');
        }
    }
}

export async function acceptFriendRequest(friendId) {
    const result = await fetchWithJson('/api/acceptFriendRequest', 'POST', { friendId });

    if (result) {
        if (result.success) {
            alert('Friend request accepted!');
        } else {
            alert('Failed to accept friend request.');
        }
    }
}

export async function ignoreFriendRequest(friendId) {
    const result = await fetchWithJson('/api/ignoreFriendRequest', 'POST', { friendId });

    if (result) {
        if (result.success) {
            alert('Friend request ignored.');
        } else {
            alert('Failed to ignore friend request.');
        }
    }
}