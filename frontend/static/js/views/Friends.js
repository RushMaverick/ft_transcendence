import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Friends");
	}

	async getHtml(){
		return `
			<h1>Friends</h1>
			<p>
				You have no friends.	
			</p>
			`;
	}
}