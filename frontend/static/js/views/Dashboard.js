import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Dashboard");
	}

	async getHtml(){

		const testheader = this.createTestParagraph('testheader');
		const header = this.createHeader('header', 'Welcome to Pong game!', 'h1');
        const p1 = this.createParagraph('welcome', 'You are successfully running a Pong game.');
        const p2 = this.createLink('onevsone', 'Start a one-vs-one game', '/one-vs-one');
        const p3 = this.createLink('tournament', 'Start your tournament', '/tournaments');
        const p4 = this.createLink('friends', 'Checkout how your friends are doing', '/friends');
		
		window.localStorage.setItem('page', 'Dashboard');
		this.updateView(testheader, header, p1, p2, p3, p4);
		return ;
	}
}

