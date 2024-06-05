import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("One-vs-one");
	}

	async getHtml(){
		return `
			<h1>Welcome to play ONE VS ONE</h1>
			<p>
				Wait for your opponent.	
			</p>
			`;
	}
}