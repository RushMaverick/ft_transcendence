import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Settings");
	}

	async getHtml(){
		const container = document.createElement('div');

		const header = this.createHeader('Settings', 'h2');
		const p = this.createParagraph('in theory here you could change the settings');

		container.appendChild(header);
		container.appendChild(p);
		return container;
	}
}