import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Settings");
	}

	async getHtml(){

		const header = this.createHeader('Settings', 'h2');
		const p = this.createParagraph('in theory here you could change the settings');

		this.updateView(header, p);
		return container;
	}
}