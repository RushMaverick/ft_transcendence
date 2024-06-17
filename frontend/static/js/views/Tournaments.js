import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Tournaments");
	}

	async getHtml(){
		const container = document.createElement('div');

		const header = this.createHeader('Tournaments', 'h1');
		const p = this.createParagraph("You have no tournaments.");
		
		container.appendChild(header);
		container.appendChild(p);
		return container;
	}
}