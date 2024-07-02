//global variable to store the login status(currently without connecting to backend)
// This will let us the user to be logged in throughout the session
// window.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
// console.log(`Initial state: ${window.isLoggedIn}`);
// but we will not use this for now, we will use temporary checks

import Dashboard from "./views/Dashboard.js";
import OneVsOne from "./views/OneVsOne.js";
import Tournaments from "./views/Tournaments.js";
import Friends from "./views/Friends.js";
import Pong from "./views/Pong.js";
import Login from "./views/Login.js";
import Register from "./views/Register.js";
import Profile from "./views/Profile.js";
import Settings from "./views/Settings.js";

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

//when trying to navigate to a different page, we don't want to reload the page. We want to use the client-side router to change the view of the page.
const navigateTo = url => {
	history.pushState(null, null, url);
	router();
};

// const loggedIn = 

//write client-side router
const router = async () => {
	//inside friends, it will be  /friends/:id
	const routes = [
		{ path: "/", view: Login},
		{ path: "/login", view: Login },
		{ path: "/register", view: Register },
		{ path: "/dashboard", view: Dashboard, authRequired: true },
		{ path: "/one-vs-one", view: OneVsOne, authRequired: true},
		{ path: "/tournaments", view: Tournaments, authRequired: true},
		{ path: "/pong", view: Pong, authRequired: true},
		{ path: "/friends", view: Friends, authRequired: true },
		{ path: "/profile", view: Profile, authRequired: true },
		{ path: "/settings", view: Settings, authRequired: true },
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

	//comment out to remove login for testing
	// if (match.route.authRequired && !window.isLoggedIn) {
	// 	console.log(`Access to ${match.route.path} is restricted.`);
	// 	navigateTo("/login");
	// 	return;
	// }
	const view = new match.route.view(getParams(match));

	view.getHtml();
};

window.addEventListener("popstate", router);
//this will listen for back and forward buttons in the browser

// Dynamically import the translation file
document.addEventListener("viewUpdated", () => {
    let translations;
	const page = window.localStorage.getItem('page');
	console.log('page = ' + page);
    fetch('./static/translations/' + page + '.json')
   .then(response => response.text())
   .then(data => {
        translations = JSON.parse(data);
		const language = window.localStorage.getItem('language');
		const currentTranslations = translations[language]; // Store the imported translations
        const elementsToTranslate = document.querySelectorAll('[lang-key]');
		elementsToTranslate.forEach(element => {
            const key = element.getAttribute('lang-key');
            if (currentTranslations[key]) {
				element.textContent = currentTranslations[key];
            }
        });
    })
   .catch(error => console.error('Error loading translation file:', error));
});

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", e => {
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
		if (e.target.matches("[lang-toggle]")) {
			const language = e.target.getAttribute('language');
			window.localStorage.setItem('language', language);
			document.dispatchEvent(new CustomEvent('viewUpdated'));
		}
		//if link element has data-link attribute, we want to prevent default behavior
		//and sits on the element itself from index.html
	
	});
		//if link element has data-link attribute, we want to prevent default behavior

document.addEventListener('loginSuccess', (event) => {
	const { path } = event.detail;
	navigateTo(path);
});


	router();
});
