import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Tournaments");
	}

	async getHtml(){
		return `
			<h1>Welcome to play Tournaments</h1>
			<p>
				Wait for your Tournament to set.	
			</p>
			`;
	}
}