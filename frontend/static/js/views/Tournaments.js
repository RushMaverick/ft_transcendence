import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Tournaments");
	}

	async getHtml(){
		const header = this.createHeader('header', 'Tournaments', 'h2');
		const p = this.createParagraph('welcome', 'You have no tournaments.');

		const gameDiv = this.createGame('pong');
		
		window.localStorage.setItem('page', 'Tournaments');
		this.updateView(header, p, gameDiv);
		return ;
	}
}