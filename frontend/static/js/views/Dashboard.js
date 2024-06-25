import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Dashboard");
	}

	async getHtml(){

		const testheader = this.createTestParagraph('dashboard.testheader');
		const header = this.createHeader('dashboard.header', 'Welcome to Pong game!', 'h1');
        const p1 = this.createParagraph('dashboard.welcome', 'You are successfully running a Pong game.');
        const p2 = this.createParagraphWithLink('dashboard.onevsone', 'Start a one-vs-one game', '/one-vs-one');
        const p3 = this.createParagraphWithLink('dashboard.tournament', 'Start your tournament', '/tournaments');
        const p4 = this.createParagraphWithLink('dashboard.friends', 'Checkout how your friends are doing', '/friends');

		
		this.updateView(testheader, header, p1, p2, p3, p4);
		return ;
	}
}

