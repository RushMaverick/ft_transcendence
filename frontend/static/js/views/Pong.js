import PongGame from "./gameCanvas/pongThree.js";
import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Pong");
	}

	async getHtml(){
		const header = this.createHeader('header', 'S U P E R P O N G C H A M P', 'h1');
		const onevsButton = this.createAnchor('onevs-button', 'onevsone');
		onevsButton.href = '/one-vs-one';
		onevsButton.setAttribute('data-link', "");
		onevsButton.setAttribute('id', 'onevs-button');
		onevsButton.classList.add('pong-button');

		const gameDiv = this.createGame('pong');
		const p = this.createParagraph("You are successfully running a Super Pongchamp game.");
		
		window.localStorage.setItem('page', 'Pong');
		this.updateView(header, onevsButton, gameDiv, p);
		return ;
	}
}
