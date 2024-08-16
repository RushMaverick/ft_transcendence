//global variable to store the login status(currently without connecting to backend)
// This will let us the user to be logged in throughout the session
// window.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
// console.log(`Initial state: ${window.isLoggedIn}`);
// but we will not use this for now, we will use temporary checks

import Dashboard from "./views/Dashboard.js";
import OneVsOne from "./views/OneVsOne.js";
import Tournaments from "./views/Tournaments.js";
import Tournament from "./views/Tournament.js";
import Friends from "./views/Friends.js";
import Pong from "./views/Pong.js";
import Login from "./views/Login.js";
import Register from "./views/Register.js";
import Profile from "./views/Profile.js";
import Settings from "./views/Settings.js";
import PrivacyPolicy from "./views/PrivacyPolicy.js";
import MatchHistory from "./views/MatchHistory.js";
import CreateGame from "./views/CreateGame.js";
import GameInvites from "./views/GameInvites.js";
import Play from "./views/Play.js";


//match the first character of the string or the start of the string -> "^"
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

//matchAll is an iterator and grab the array, and could look like for exampe, "friends/2/4"
//and object.fromEntries will take the multidimensional arrays convert into objects.
const getParams = match =>{
	const values = match.result.slice(1);
	const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

	return Object.fromEntries(keys.map((key, i) => {
		return [key, values[i]];
	}))
}

const getHashParams = () => {
    const hash = location.hash.slice(1);
    const parts = hash.split('/');
    const params = {};
    if (parts.length > 1) {
        params.view = parts[0];
        params.id = parts[1];
    }
    return params;
};

//when trying to navigate to a different page, we don't want to reload the page. We want to use the client-side router to change the view of the page.
const navigateTo = url => {
	history.pushState(null, null, url);
	router();
};

// const loggedIn =
let isOnline = false;
let view = null;
//write client-side router
const router = async () => {
	//inside friends, it will be  /friends/:id
	const routes = [
		{ path: "/", view: Login},
		{ path: "/login", view: Login },
		{ path: "/privacypolicy", view: PrivacyPolicy},
		{ path: "/register", view: Register },
		{ path: "/dashboard", view: Dashboard, authRequired: true },
		{ path: "/history", view: MatchHistory, authRequired: true },
		{ path: "/history/:user_id", view: MatchHistory, authRequired: true },
		{ path: "/one-vs-one", view: OneVsOne, authRequired: true},
		{ path: "/create-game", view: CreateGame, authRequired: true},
		{ path: "/game-invites", view: GameInvites, authRequired: true},
		{ path: "/tournament", view: Tournament, authRequired: true},
		{ path: "/tournaments", view: Tournaments, authRequired: true},
		{ path: "/pong", view: Pong, authRequired: true},
		{ path: "/friends", view: Friends, authRequired: true },
		{ path: "/profile", view: Profile, authRequired: true },
		{ path: "/profile/:user_id", view: Profile, authRequired: true },
		{ path: "/settings", view: Settings, authRequired: true },
		{ path: "/play", view: Play, authRequired: true }
	];

	//Test each route for potential match. go through each route and find matches and return
	const potentialMatches = routes.map(route => {
		return {
			route: route,
			result: location.pathname.match(pathToRegex(route.path))
		};
	});

	let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

	if (!match){
		match = {
			route: routes[0],
			result: [location.pathname]
		};
	}
	const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

	if (isLoggedIn && (match.route.path === "/login" || match.route.path === "/")) {
        navigateTo('/dashboard');
        return;
    }

	if (isLoggedIn &&  !isOnline){
		setOnline();
	}

	if (sessionStorage.getItem('playing') && match.route.path !== "/play") {
		navigateTo('/play');
		return;
	}

	//comment out to remove login for testing
	if (match.route.authRequired && !isLoggedIn) {
		console.log(`Access to ${match.route.path} is restricted.`);
		navigateTo('/login');
		return;
	}

	if (match.route.path === "/play" && !sessionStorage.getItem('room_name')) {
		console.log('No room name found');
		navigateTo('/create-game');
		return;
	}

	// Load translations for the current page
	// const page = localStorage.getItem('page');
	// await loadTranslations(page);

	const hashParams = getHashParams();
    if (hashParams.view && match.route.path === "/friends") {
        match.result.push(hashParams);
    }

	if (view)
	{
		//before view change
		await view.dismount();
	}
	view = new match.route.view(getParams(match));
	await view.getHtml();

	// Update translations after the view is rendered
	// document.dispatchEvent(new Event("viewUpdated"));

};

export const loadTranslations = async (page) => {
	const language = window.localStorage.getItem('language') || 'english';
	try {
		const response = await fetch(`./static/translations/${page}.json`);
		const data = await response.json();
		if (!window.translations) {
            window.translations = {};
        }
		window.translations = data; // Store translations globally
		console.log('Translations loaded for page:', page, window.translations);
	} catch (error) {
		console.error('Error loading translation file:', error);
	}
};


window.onload = async () => {
	if (window.localStorage.getItem('language') == null){
		window.localStorage.setItem('language', 'english');
	}
};

window.addEventListener("popstate", router);
// this will listen for back and forward buttons in the browser
// Dynamically import the translation file
document.addEventListener("viewUpdated", () => {
	if (localStorage.getItem('language') === 'language'){
		return;
	}
	const page = window.localStorage.getItem('page');
	updateTranslations('index');
	updateTranslations(page);
});

function updateTranslations(page){
	let translations;
    fetch('./static/translations/' + page + '.json')
   .then(response => response.text())
   .then(data => {
        translations = JSON.parse(data);
		const language = window.localStorage.getItem('language');
		const currentTranslations = translations[language];
		updateTranslationElements(currentTranslations);
	})
}

function updateTranslationElements(currentTranslations){
		const elementsToTranslate = document.querySelectorAll('[lang-key]');
			elementsToTranslate.forEach(element => {
				const key = element.getAttribute('lang-key');
				if (currentTranslations[key]) {
					element.textContent = currentTranslations[key];
				}
			});
}

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", async e => {
		if (e.target.matches("[privacy-link]")) {
			e.preventDefault();
			window.open(e.target.href);
		}
		else if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
		else if (e.target.matches("[lang-toggle]")) {
			document.body.addEventListener('change', (event) => {
				if (event.target.matches("[lang-toggle]")) {
					const selectedLanguage = event.target.value;
					if (selectedLanguage){
						const language = selectedLanguage.toLowerCase();
						window.localStorage.setItem('language', language);
						document.dispatchEvent(new CustomEvent('viewUpdated'));
					}
				}
				})
		}

	});

	document.addEventListener('registrationSuccess', () => {
		navigateTo('/login');
	});

	document.addEventListener('loginSuccess', (event) => {
		navigateTo(event.detail.path);
	});
// document.addEventListener('loginSuccess', (event) => {
// 	const { path } = event.detail;
// 	navigateTo(path);
// });

	router();
});

const setOnline = () => {
	const socket = new WebSocket(`ws://localhost:8000/ws/online_status/?token=${sessionStorage.getItem('access')}`);
	socket.onerror = function(error) {
		console.error("Online WebSocket Error:", error);
	};
	socket.onopen = function() {
		console.log('Online WebSocket connection established.');
	};
	socket.onclose = function(event) {
		console.log('Online WebSocket connection closed:', event);
	}
	isOnline = true;
};

export { navigateTo };
