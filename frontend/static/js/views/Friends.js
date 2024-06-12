import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Friends");
	}

	async getHtml(){
		const friends = document.createElement('h1');
		friends.textContent = "Friends";

		const p = document.createElement('p');
		p.textContent = "You have no friends.";
		this.updateView(friends, p);
	}
}