import AView from "./AView.js";

export default class extends AView {
	constructor(params){
		super(params);//call the constructor of the parent class
		this.setTitle("Dashboard");
	}

	async getHtml(){
		const header = this.createHeader1('Welcome to Pong game!');
        const p1 = this.createParagraph("You are successfully running a Pong game.");
        const p2 = this.createParagraphWithLink("Start a one-vs-one game", "/one-vs-one");
        const p3 = this.createParagraphWithLink("Start your tournament", "/tournaments");
        const p4 = this.createParagraphWithLink("Checkout how your friends are doing", "/friends");
		
		this.updateView(header, p1, p2, p3, p4);
		return ;
	}
}

