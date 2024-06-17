import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Dashboard");
	}

	async getHtml(){
		const container = document.createElement('div');

		const header = this.createHeader('Welcome to Pong game!', 'h1');
        const p1 = this.createParagraph("You are successfully running a Pong game.");
        const p2 = this.createParagraphWithLink("Start a one-vs-one game", "/one-vs-one");
        const p3 = this.createParagraphWithLink("Start your tournament", "/tournaments");
        const p4 = this.createParagraphWithLink("Checkout how your friends are doing", "/friends");
		
		container.appendChild(header);
		container.appendChild(p1);
		container.appendChild(p2);
		container.appendChild(p3);
		container.appendChild(p4);
		return container;
	}
}

