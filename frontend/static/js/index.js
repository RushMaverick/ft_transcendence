import Dashboard from "./views/Dashboard.js";
import OneVsOne from "./views/OneVsOne.js";
import Tournaments from "./views/Tournaments.js";
import Friends from "./views/Friends.js";

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

//write client-side router
const router = async () => {
	//inside friends, it will be  /friends/:id
	const routes = [
		// { path: "/", view: Login},
		// { path: "/Login", view: Login },
		// { path: "/Login/:id", view: Register },
		{ path: "/dashboard", view: Dashboard },
		{ path: "/one-vs-one", view: OneVsOne},
		{ path: "/tournaments", view: Tournaments},
		{ path: "/friends", view: Friends },
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
			result : [location.pathname]
		};
	}
	//if we want, we can do 404 here when it is no match
	
	const view = new match.route.view(getParams(match));

	document.querySelector("#app").innerHTML = await view.getHtml();
	//select the app element and set the innerHTML to the view of the match route

};

window.addEventListener("popstate", router);
//this will listen for back and forward buttons in the browser

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", e => {
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
		//if link element has data-link attribute, we want to prevent default behavior
		//and sits on the element itself from index.html
	});
	router();
});