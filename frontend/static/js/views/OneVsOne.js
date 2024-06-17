import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("One-vs-one");
	}

	async getHtml(){
		const container = document.createElement('div');

		const test = this.createHeader('FIGHT ME ONE ON ONE!', 'h1');

		container.appendChild(test);
		return container;
	}
}