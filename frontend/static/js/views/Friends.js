import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Friends");
	}

	async getHtml(){
		const container = document.createElement('div');

		const friends = this.createHeader('friends', 'h2');
		const p = this.createParagraph('You have no friends');

		container.appendChild(friends);
		container.appendChild(p);
		return container;
	}
}