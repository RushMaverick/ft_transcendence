import AView from "./AView.js";
export default class extends AView {
	constructor(params){
		super(params);
		this.setTitle("Pong");
	}

	async getHtml(){
		const header = this.createHeader('header', 'S U P E R P O N G C H A M P', 'h1');
		const onevsButton = this.createAnchor('onevs-button', 'onevsone');
		onevsButton.href = '/one-vs-one';
		onevsButton.setAttribute('data-link', "");
		onevsButton.setAttribute('id', 'onevs-button');
		onevsButton.classList.add('pongpage-reroute-button');

		const tournaButton = this.createAnchor('tournaments-button', 'tournaments');
		tournaButton.href = '/tournaments';
		tournaButton.setAttribute('data-link', "");
		tournaButton.setAttribute('id', 'tournaments-button');
		tournaButton.classList.add('pongpage-reroute-button');

		const p = this.createParagraph("You are successfully running a Super Pongchamp game.");
		
		window.localStorage.setItem('page', 'Pong');
		this.updateView(header, onevsButton, tournaButton, p);
		return ;
	}

	
}
