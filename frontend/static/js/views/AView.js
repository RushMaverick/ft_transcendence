import AView from "./AView.js";

export default class {
	constructor(params){
		this.params = params;
	}

	setTitle(title){
		document.title = title;
	}

	async getHtml(){
		return "";
	}

	updateView(...elements){
		const app = document.querySelector('main');
		app.innerHTML = '';
		elements.forEach((element) => {
			if (element)
				app.appendChild(element);
		});
	}
}